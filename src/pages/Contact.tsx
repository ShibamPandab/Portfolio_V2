import { useEffect } from 'react'
import { Container } from '../components/ui/Container'
import { ScaffoldHeader } from '../components/ui/ScaffoldHeader'
import { Reveal } from '../components/ui/Reveal'
import { SITE } from '../constants/nav'

const SOCIALS = [
  { label: 'Instagram', href: '#' },
  { label: 'LinkedIn', href: '#' },
  { label: 'GitHub', href: '#' },
]

export function Contact() {
  useEffect(() => {
    document.title = 'Contact — Shibam Pandab'
  }, [])

  return (
    <section className="min-h-screen border-b-2 border-ink pt-32">
      <Container className="py-20 md:py-28">
        <ScaffoldHeader
          index="—"
          label="Contact"
          heading="Let's talk about your business."
          intro={`For now, the fastest way to reach me is directly by email — ${SITE.email}. A proper enquiry form is on the way.`}
        />

        <div className="mt-16 grid grid-cols-1 gap-x-8 gap-y-16 md:mt-20 md:grid-cols-2">
          <Reveal>
            <form
              aria-label="Project enquiry (not yet connected)"
              onSubmit={(e) => e.preventDefault()}
              className="flex flex-col gap-6"
            >
              <span className="eyebrow text-ink-soft">Project Enquiry — Coming Soon</span>
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="eyebrow text-ink-soft">
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  disabled
                  placeholder="Your name"
                  className="border-b-2 border-ink/30 bg-transparent py-2 text-ink placeholder:text-ink-soft/50 disabled:cursor-not-allowed"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="eyebrow text-ink-soft">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  disabled
                  placeholder="you@business.com"
                  className="border-b-2 border-ink/30 bg-transparent py-2 text-ink placeholder:text-ink-soft/50 disabled:cursor-not-allowed"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="eyebrow text-ink-soft">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  disabled
                  placeholder="Tell me about your business"
                  className="border-b-2 border-ink/30 bg-transparent py-2 text-ink placeholder:text-ink-soft/50 disabled:cursor-not-allowed"
                />
              </div>
              <button
                type="submit"
                disabled
                className="eyebrow w-fit border-2 border-ink/30 px-7 py-3.5 text-ink-soft/50 disabled:cursor-not-allowed"
              >
                Send (Coming Soon)
              </button>
            </form>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="flex flex-col gap-8">
              <div className="flex flex-col gap-2">
                <span className="eyebrow text-red">Email</span>
                <a
                  href={`mailto:${SITE.email}`}
                  className="font-display text-2xl italic transition-colors duration-300 hover:text-red"
                >
                  {SITE.email}
                </a>
              </div>

              <div className="flex flex-col gap-3">
                <span className="eyebrow text-red">Elsewhere (placeholder)</span>
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
  )
}
