import { useEffect, useState, type FormEvent } from 'react'
import { Container } from '../components/ui/Container'
import { Eyebrow } from '../components/ui/Eyebrow'
import { Reveal } from '../components/ui/Reveal'
import { AnimatedText } from '../components/ui/AnimatedText'
import { EditorialList } from '../components/ui/EditorialList'
import { FAQAccordion } from '../components/ui/FAQAccordion'
import { Button } from '../components/ui/Button'
import { SITE } from '../constants/nav'
import {
  NEXT_STEPS,
  PREFERRED_PROJECTS,
  PROJECT_TYPE_OPTIONS,
  TIMELINE_OPTIONS,
  CONTACT_FAQ,
} from '../data/contact'

const SOCIALS = [
  { label: 'Instagram', href: '#' },
  { label: 'LinkedIn', href: '#' },
  { label: 'GitHub', href: '#' },
]

const inputStyles =
  'border-b-2 border-ink/30 bg-transparent py-2 text-ink placeholder:text-ink-soft/50 focus:border-red focus:outline-none transition-colors duration-300'

export function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    company: '',
    projectType: '',
    timeline: '',
    message: '',
  })

  useEffect(() => {
    document.title = 'Contact — Shibam Pandab'
  }, [])

  function update<K extends keyof typeof form>(key: K, value: string) {
    setForm((f) => ({ ...f, [key]: value }))
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    const subject = `Project enquiry — ${form.name || 'New project'}`
    const lines = [
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      form.company && `Company: ${form.company}`,
      form.projectType && `Project type: ${form.projectType}`,
      form.timeline && `Estimated timeline: ${form.timeline}`,
      '',
      form.message,
    ].filter(Boolean)
    window.location.href = `mailto:${SITE.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(lines.join('\n'))}`
  }

  return (
    <>
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
              <form onSubmit={handleSubmit} className="flex flex-col gap-8">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="name" className="eyebrow text-ink-soft">
                      Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
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
                    value={form.message}
                    onChange={(e) => update('message', e.target.value)}
                    placeholder="Tell me a little about the business and what you have in mind."
                    className={inputStyles}
                  />
                </div>

                <button
                  type="submit"
                  className="group relative inline-flex w-fit items-center gap-2 border-2 border-ink bg-ink px-7 py-3.5 font-sans text-sm font-medium tracking-wide text-cream uppercase transition-colors duration-300 hover:bg-cream hover:text-ink"
                >
                  Send Enquiry
                </button>
              </form>
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
                  <div className="flex flex-col gap-2">
                    {SOCIALS.map((s) => (
                      <a
                        key={s.label}
                        href={s.href}
                        className="eyebrow text-ink-soft transition-colors duration-300 hover:text-red"
                      >
                        {s.label}
                      </a>
                    ))}
                  </div>
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
