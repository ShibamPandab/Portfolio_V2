// Shared helpers for api/contact.ts. Files under api/_lib are not
// auto-routed by Vercel (the underscore prefix opts a directory out
// of file-based routing), so this stays a plain module, not a second
// endpoint.

export type ContactPayload = {
  name: string
  email: string
  company?: string
  projectType: string
  timeline?: string
  message: string
  /** Honeypot — a real visitor never sees or fills this field. */
  website?: string
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const MAX_SHORT_FIELD = 200
const MAX_MESSAGE = 5000

/**
 * Returns a user-facing error string, or null when the payload is
 * valid. Mirrors the required/optional fields the form itself
 * enforces client-side — this is the server-side source of truth,
 * since client validation alone is trivial to bypass.
 */
export function validateContactPayload(body: Partial<ContactPayload> | undefined): string | null {
  if (!body) return 'Missing request body.'
  if (body.website) return 'Spam detected.' // honeypot tripped — bots fill every field

  const name = body.name?.trim()
  const email = body.email?.trim()
  const projectType = body.projectType?.trim()
  const message = body.message?.trim()

  if (!name) return 'Name is required.'
  if (!email || !EMAIL_RE.test(email)) return 'A valid email is required.'
  if (!projectType) return 'Project type is required.'
  if (!message) return 'A message is required.'

  if (name.length > MAX_SHORT_FIELD) return 'Name is too long.'
  if (email.length > MAX_SHORT_FIELD) return 'Email is too long.'
  if (body.company && body.company.length > MAX_SHORT_FIELD) return 'Company name is too long.'
  if (message.length > MAX_MESSAGE) return 'Message is too long.'

  return null
}

// --- best-effort rate limiting ------------------------------------------
//
// This is a single in-memory Map, scoped to one warm serverless
// instance — it is NOT a distributed rate limit. Vercel can and will
// route concurrent requests to different cold instances, each
// starting with an empty Map, so a determined attacker spreading
// requests across instances won't be fully blocked. What this DOES
// do: throttle the common case of one bot or script hammering the
// endpoint from a single source in a short window, without adding an
// external dependency (Redis/KV) this project doesn't otherwise need.
const WINDOW_MS = 10 * 60 * 1000
const MAX_REQUESTS_PER_WINDOW = 5
const requestLog = new Map<string, number[]>()

export function isRateLimited(key: string): boolean {
  const now = Date.now()
  const recent = (requestLog.get(key) ?? []).filter((t) => now - t < WINDOW_MS)
  recent.push(now)
  requestLog.set(key, recent)
  return recent.length > MAX_REQUESTS_PER_WINDOW
}

// --- email templates ------------------------------------------------------

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

const FONT_STACK = "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"

/**
 * Notification sent to the site owner. Every field is escaped before
 * interpolation — this HTML is built from unauthenticated user input,
 * so treating it as untrusted here is the same discipline as
 * rendering it in a browser.
 */
export function buildOwnerNotificationEmail(payload: ContactPayload): { subject: string; html: string } {
  const { name, email, company, projectType, timeline, message } = payload
  const subject = `New enquiry — ${name}${company ? ` (${company})` : ''}`

  const rows = [
    ['Name', name],
    ['Email', email],
    company && ['Company', company],
    ['Project type', projectType],
    timeline && ['Estimated timeline', timeline],
  ].filter((row): row is [string, string] => Boolean(row))

  const rowsHtml = rows
    .map(
      ([label, value]) =>
        `<tr><td style="padding:6px 16px 6px 0;color:#4a463e;font-size:13px;text-transform:uppercase;letter-spacing:0.06em;white-space:nowrap;vertical-align:top;">${escapeHtml(label)}</td><td style="padding:6px 0;color:#15130f;font-size:15px;">${escapeHtml(value)}</td></tr>`,
    )
    .join('')

  const html = `
    <div style="font-family:${FONT_STACK};max-width:560px;margin:0 auto;color:#15130f;">
      <p style="font-size:13px;text-transform:uppercase;letter-spacing:0.08em;color:#7a1f1f;margin:0 0 16px;">New Project Enquiry</p>
      <table style="border-collapse:collapse;margin-bottom:24px;">${rowsHtml}</table>
      <p style="font-size:13px;text-transform:uppercase;letter-spacing:0.06em;color:#4a463e;margin:0 0 8px;">Message</p>
      <p style="font-size:15px;line-height:1.6;white-space:pre-wrap;margin:0;">${escapeHtml(message)}</p>
      <p style="margin-top:32px;font-size:13px;color:#4a463e;">Reply to this email to respond directly to ${escapeHtml(name)}.</p>
    </div>
  `

  return { subject, html }
}

/**
 * Acknowledgement sent to the client. Deliberately doesn't restate
 * their message back at them — just confirms it arrived and sets the
 * same honest expectations already on the Contact page (24-48h,
 * no sales-pitch tone).
 */
export function buildClientAcknowledgementEmail(payload: Pick<ContactPayload, 'name'>): {
  subject: string
  html: string
} {
  const subject = 'Thanks for reaching out'

  const html = `
    <div style="font-family:${FONT_STACK};max-width:560px;margin:0 auto;color:#15130f;">
      <p style="font-size:20px;font-style:italic;margin:0 0 20px;">Hi ${escapeHtml(payload.name)},</p>
      <p style="font-size:15px;line-height:1.6;margin:0 0 16px;">
        Thanks for getting in touch — your enquiry has been received and will be read carefully, not skimmed.
      </p>
      <p style="font-size:15px;line-height:1.6;margin:0 0 16px;">
        Most enquiries get a response within 24–48 hours, with an honest sense of direction rather than a sales pitch.
      </p>
      <p style="font-size:15px;line-height:1.6;margin:0;">
        Talk soon,<br />Shibam
      </p>
    </div>
  `

  return { subject, html }
}
