import { useState, type FormEvent } from 'react'
import { Container } from '../components/ui/Container'
import { Eyebrow } from '../components/ui/Eyebrow'
import { Reveal } from '../components/ui/Reveal'
import { AnimatedText } from '../components/ui/AnimatedText'
import { EditorialList } from '../components/ui/EditorialList'
import { FAQAccordion } from '../components/ui/FAQAccordion'
import { Button } from '../components/ui/Button'
import { SocialLinks } from '../components/ui/SocialLinks'
import { Seo } from '../components/seo/Seo'
import { SITE } from '../constants/nav'
import {
  NEXT_STEPS,
  PREFERRED_PROJECTS,
  PROJECT_TYPE_OPTIONS,
  TIMELINE_OPTIONS,
  CONTACT_FAQ,
} from '../data/contact'

const inputStyles =
  'border-b-2 border-ink/30 bg-transparent py-2 text-ink placeholder:text-ink-soft/50 focus:border-red focus:outline-none transition-colors duration-300 disabled:opacity-50'

type SubmitStatus = 'idle' | 'loading' | 'success' | 'error'

export function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    company: '',
    projectType: '',
    timeline: '',
    message: '',
    // Honeypot — stays empty for real visitors. Never shown, never
    // labeled anything a screen reader would announce as a real field.
    website: '',
  })
  const [status, setStatus] = useState<SubmitStatus>('idle')
  const [errorMessage, setErrorMessage] = useState<string | null>(null)

  function update<K extends keyof typeof form>(key: K, value: string) {
    setForm((f) => ({ ...f, [key]: value }))
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    if (status === 'loading') return // guards against a double-click beating the disabled state

    setStatus('loading')
    setErrorMessage(null)

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      const data = (await res.json()) as { success: boolean; message: string }

      if (!res.ok || !data.success) {
        setStatus('error')
        setErrorMessage(data.message || 'Something went wrong. Please try again or email directly.')
        return
      }

      setStatus('success')
    } catch {
      setStatus('error')
      setErrorMessage('Something went wrong. Please check your connection and try again.')
    }
  }

  function resetForm() {
    setForm({ name: '', email: '', company: '', projectType: '', timeline: '', message: '', website: '' })
    setStatus('idle')
    setErrorMessage(null)
  }

  return (
    <>
      <Seo
        title="Contact — Shibam Pandab"
        description="Whether you have an idea, an existing business, or simply want to explore possibilities, you're welcome to get in touch."
        path="/contact"
      />
      {/* Hero */}
      <section className="border-b-2 border-ink pt-32">
        <Container className="py-20 md:py-28">
          <Reveal>
            <Eyebrow index="00" label="Contact" />
          </Reveal>
          <h1 className="mt-8 max-w-2xl font-sans text-[9vw] leading-[1.02] font-medium tracking-tight md:text-[3.6vw] lg:text-[3.6rem]">
            <AnimatedText text="Every great project starts with a conversation." />
          </h1>
          <Reveal delay={0.15}>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-soft">
              Whether you have an idea, an existing business, or simply
              want to explore possibilities, you’re welcome to get in touch.
            </p>
          </Reveal>
        </Container>
      </section>

      {/* 01 — Let's Start a Conversation */}
      <section className="border-b-2 border-ink">
        <Container className="py-20 md:py-28">
          <Reveal>
            <Eyebrow index="01" label="Let’s Start a Conversation" />
          </Reveal>
          <Reveal delay={0.06}>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-ink-soft">
              The best collaborations begin by understanding the
              business, before discussing technology. Every enquiry is
              read carefully, and you’ll hear back with an honest sense
              of direction — not a sales pitch.
            </p>
          </Reveal>
        </Container>
      </section>

      {/* 02 — Contact Form */}
      <section id="enquiry" className="border-b-2 border-ink">
        <Container className="py-20 md:py-28">
          <Reveal>
            <Eyebrow index="02" label="Start an Enquiry" />
          </Reveal>

          <div className="mt-10 grid grid-cols-1 gap-x-12 gap-y-16 md:grid-cols-[1.4fr_1fr]">
            <Reveal delay={0.06}>
              {status === 'success' ? (
                <div className="flex flex-col gap-6">
                  <p className="font-display text-2xl italic leading-snug">
                    Thanks — that's on its way. You'll hear back within 24–48 hours.
                  </p>
                  <p className="text-ink-soft">
                    A confirmation is on its way to your inbox too.
                  </p>
                  <button
                    type="button"
                    onClick={resetForm}
                    className="eyebrow w-fit border-b-2 border-ink/30 pb-1 text-ink-soft transition-colors duration-300 hover:border-red hover:text-red"
                  >
                    Send Another Enquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-8">
                  {/* Honeypot — visually hidden and excluded from tab order,
                      not display:none, since some bots skip fields hidden
                      that way. A real visitor never sees or fills this. */}
                  <div className="absolute -left-[9999px] top-auto h-px w-px overflow-hidden">
                    <label htmlFor="website">Website</label>
                    <input
                      id="website"
                      type="text"
                      tabIndex={-1}
                      autoComplete="off"
                      value={form.website}
                      onChange={(e) => update('website', e.target.value)}
                    />
                  </div>

                  <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                    <div className="flex flex-col gap-2">
                      <label htmlFor="name" className="eyebrow text-ink-soft">
                        Name
                      </label>
                      <input
                        id="name"
                        type="text"
                        required
                        disabled={status === 'loading'}
                        value={form.name}
                        onChange={(e) => update('name', e.target.value)}
                        placeholder="Your name"
                        className={inputStyles}
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label htmlFor="email" className="eyebrow text-ink-soft">
                        Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        required
                        disabled={status === 'loading'}
                        value={form.email}
                        onChange={(e) => update('email', e.target.value)}
                        placeholder="you@business.com"
                        className={inputStyles}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                    <div className="flex flex-col gap-2">
                      <label htmlFor="company" className="eyebrow text-ink-soft">
                        Company <span className="text-ink-soft/60">(Optional)</span>
                      </label>
                      <input
                        id="company"
                        type="text"
                        disabled={status === 'loading'}
                        value={form.company}
                        onChange={(e) => update('company', e.target.value)}
                        placeholder="Business name"
                        className={inputStyles}
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label htmlFor="projectType" className="eyebrow text-ink-soft">
                        Project Type
                      </label>
                      <select
                        id="projectType"
                        required
                        disabled={status === 'loading'}
                        value={form.projectType}
                        onChange={(e) => update('projectType', e.target.value)}
                        className={inputStyles}
                      >
                        <option value="" disabled>
                          Select a category
                        </option>
                        {PROJECT_TYPE_OPTIONS.map((opt) => (
                          <option key={opt} value={opt}>
                            {opt}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="flex flex-col gap-2 md:w-1/2 md:pr-4">
                    <label htmlFor="timeline" className="eyebrow text-ink-soft">
                      Estimated Timeline <span className="text-ink-soft/60">(Optional)</span>
                    </label>
                    <select
                      id="timeline"
                      disabled={status === 'loading'}
                      value={form.timeline}
                      onChange={(e) => update('timeline', e.target.value)}
                      className={inputStyles}
                    >
                      <option value="">Not sure yet</option>
                      {TIMELINE_OPTIONS.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label htmlFor="message" className="eyebrow text-ink-soft">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      required
                      disabled={status === 'loading'}
                      value={form.message}
                      onChange={(e) => update('message', e.target.value)}
                      placeholder="Tell me a little about the business and what you have in mind."
                      className={inputStyles}
                    />
                  </div>

                  {status === 'error' && errorMessage && (
                    <p role="alert" className="text-sm text-red">
                      {errorMessage}
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="group relative inline-flex w-fit items-center gap-2 border-2 border-ink bg-ink px-7 py-3.5 font-sans text-sm font-medium tracking-wide text-cream uppercase transition-colors duration-300 hover:bg-cream hover:text-ink disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:bg-ink disabled:hover:text-cream"
                  >
                    {status === 'loading' ? 'Sending…' : 'Send Enquiry'}
                  </button>
                </form>
              )}
            </Reveal>

            <Reveal delay={0.12}>
              <div className="flex flex-col gap-8">
                <div className="flex flex-col gap-2">
                  <span className="eyebrow text-red">Email Directly</span>
                  <a
                    href={`mailto:${SITE.email}`}
                    className="font-display text-2xl italic transition-colors duration-300 hover:text-red"
                  >
                    {SITE.email}
                  </a>
                </div>
                <div className="flex flex-col gap-3">
                  <span className="eyebrow text-red">Elsewhere</span>
                  <SocialLinks />
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* 03 — What Happens Next */}
      <section className="border-b-2 border-ink">
        <Container className="py-20 md:py-28">
          <Reveal>
            <Eyebrow index="03" label="What Happens Next" />
          </Reveal>
          <div className="mt-10 max-w-xl">
            <EditorialList items={NEXT_STEPS} marker="number" />
          </div>
        </Container>
      </section>

      {/* 04 — Working Together */}
      <section className="border-b-2 border-ink">
        <Container className="py-20 md:py-28">
          <Reveal>
            <Eyebrow index="04" label="Working Together" />
          </Reveal>
          <Reveal delay={0.06}>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-ink-soft">
              I work with a carefully selected number of projects at a
              time, so every collaboration receives proper attention.
              I’m currently balancing university studies alongside
              freelance work, which is exactly why thoughtful planning
              and realistic timelines matter to me.
            </p>
          </Reveal>
        </Container>
      </section>

      {/* 05 — Preferred Projects */}
      <section className="border-b-2 border-ink">
        <Container className="py-20 md:py-28">
          <Reveal>
            <Eyebrow index="05" label="Preferred Projects" />
          </Reveal>
          <div className="mt-10 max-w-md">
            <EditorialList
              items={PREFERRED_PROJECTS.map((title) => ({ title }))}
              marker="check"
              compact
            />
          </div>
          <Reveal delay={0.1}>
            <p className="mt-8 max-w-xl text-sm text-ink-soft">
              Enquiries outside these categories are welcome too, if the
              project itself is interesting.
            </p>
          </Reveal>
        </Container>
      </section>

      {/* 06 — Response Time */}
      <section className="border-b-2 border-ink">
        <Container className="py-14 md:py-20">
          <Reveal>
            <Eyebrow index="06" label="Response Time" />
            <p className="mt-4 max-w-lg text-ink-soft">
              Most enquiries receive a response within 24–48 hours.
              Project timelines are discussed openly before any commitment.
            </p>
          </Reveal>
        </Container>
      </section>

      {/* 07 — FAQ */}
      <section className="border-b-2 border-ink">
        <Container className="py-20 md:py-28">
          <Reveal>
            <span className="eyebrow text-ink-soft">Frequently Asked</span>
          </Reveal>
          <div className="mt-8">
            <FAQAccordion faqs={CONTACT_FAQ} />
          </div>
        </Container>
      </section>

      {/* Final CTA */}
      <section className="border-b-2 border-ink">
        <Container className="flex flex-col items-center gap-8 py-28 text-center md:py-40">
          <Reveal>
            <p className="max-w-2xl font-display text-2xl italic leading-snug md:text-4xl">
              If your project values thoughtful design, strong user
              experience, and long-term quality, I’d love to hear your
              story.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <Button href="#enquiry" variant="primary">
              Start the Conversation
            </Button>
          </Reveal>
        </Container>
      </section>
    </>
  )
}
