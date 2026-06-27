import { useEffect } from 'react'
import { Container } from '../components/ui/Container'
import { ScaffoldHeader } from '../components/ui/ScaffoldHeader'
import { PlaceholderBlock } from '../components/ui/PlaceholderBlock'
import { Button } from '../components/ui/Button'
import { SERVICES, DELIVERABLES, PRICING_PHILOSOPHY, SERVICES_FAQ } from '../data/services'

export function Services() {
  useEffect(() => {
    document.title = 'Services — Shibam Pandab'
  }, [])

  return (
    <section className="min-h-screen border-b-2 border-ink pt-32">
      <Container className="py-20 md:py-28">
        <ScaffoldHeader
          index="—"
          label="Services"
          heading="What I can build for your business."
          intro="This page is being expanded with full detail. Here's the shape of what's coming."
        />

        <div className="mt-16 md:mt-20">
          <PlaceholderBlock label="Services" title="What I offer">
            <ul className="flex flex-col gap-4">
              {SERVICES.map((s) => (
                <li key={s.title}>
                  <span className="font-medium text-ink">{s.title}</span> — {s.desc}
                </li>
              ))}
            </ul>
          </PlaceholderBlock>

          <PlaceholderBlock label="Deliverables" title="What you receive" delay={0.05}>
            <ul className="flex flex-col gap-2">
              {DELIVERABLES.map((d) => (
                <li key={d}>{d}</li>
              ))}
            </ul>
          </PlaceholderBlock>

          <PlaceholderBlock label="Pricing Philosophy" title="How pricing works" delay={0.1}>
            <p>{PRICING_PHILOSOPHY}</p>
          </PlaceholderBlock>

          <PlaceholderBlock label="FAQ" title="Common questions" delay={0.15}>
            <ul className="flex flex-col gap-4">
              {SERVICES_FAQ.map((f) => (
                <li key={f.q}>
                  <span className="font-medium text-ink">{f.q}</span>
                  <p className="mt-1">{f.a}</p>
                </li>
              ))}
            </ul>
          </PlaceholderBlock>

          <div className="border-t-2 border-ink pt-12">
            <Button to="/contact" variant="primary">
              Start a Project
            </Button>
          </div>
        </div>
      </Container>
    </section>
  )
}
