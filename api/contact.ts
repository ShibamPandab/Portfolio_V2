import type { VercelRequest, VercelResponse } from '@vercel/node'
import { Resend } from 'resend'
import {
  buildClientAcknowledgementEmail,
  buildOwnerNotificationEmail,
  isRateLimited,
  validateContactPayload,
  type ContactPayload,
} from './_lib/contact'

/**
 * POST /api/contact — the only thing the Contact page's form talks
 * to. Sends a notification to the owner's inbox (reply-to set to the
 * client, so replying works immediately) and a best-effort
 * acknowledgement back to the client. The acknowledgement failing
 * doesn't fail the request — the owner still got the lead, which is
 * the part that actually matters.
 */
export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST')
    return res.status(405).json({ success: false, message: 'Method not allowed.' })
  }

  const forwardedFor = req.headers['x-forwarded-for']
  const ip = (Array.isArray(forwardedFor) ? forwardedFor[0] : forwardedFor)?.split(',')[0]?.trim()
    ?? req.socket.remoteAddress
    ?? 'unknown'

  if (isRateLimited(ip)) {
    return res.status(429).json({ success: false, message: 'Too many requests. Please try again shortly.' })
  }

  const body = req.body as Partial<ContactPayload> | undefined
  const validationError = validateContactPayload(body)
  if (validationError) {
    return res.status(400).json({ success: false, message: validationError })
  }

  const payload = body as ContactPayload

  const apiKey = process.env.RESEND_API_KEY
  const toEmail = process.env.CONTACT_TO_EMAIL
  const fromEmail = process.env.CONTACT_FROM_EMAIL

  if (!apiKey || !toEmail || !fromEmail) {
    console.error('[api/contact] Missing RESEND_API_KEY, CONTACT_TO_EMAIL, or CONTACT_FROM_EMAIL.')
    return res
      .status(500)
      .json({ success: false, message: 'Server is not configured correctly. Please email directly instead.' })
  }

  const resend = new Resend(apiKey)

  try {
    const owner = buildOwnerNotificationEmail(payload)
    await resend.emails.send({
      from: fromEmail,
      to: toEmail,
      replyTo: payload.email,
      subject: owner.subject,
      html: owner.html,
    })
  } catch (err) {
    console.error('[api/contact] Failed to send owner notification:', err)
    return res
      .status(500)
      .json({ success: false, message: 'Something went wrong sending your enquiry. Please try emailing directly.' })
  }

  // Best-effort — the enquiry already reached the owner's inbox above,
  // so a failure here is logged but doesn't turn into a user-facing error.
  try {
    const ack = buildClientAcknowledgementEmail({ name: payload.name })
    await resend.emails.send({
      from: fromEmail,
      to: payload.email,
      subject: ack.subject,
      html: ack.html,
    })
  } catch (err) {
    console.error('[api/contact] Failed to send client acknowledgement:', err)
  }

  return res.status(200).json({ success: true, message: 'Enquiry sent successfully.' })
}
