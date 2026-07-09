import { Container } from '../components/ui/Container'
import { Eyebrow } from '../components/ui/Eyebrow'
import { Reveal } from '../components/ui/Reveal'
import { AnimatedText } from '../components/ui/AnimatedText'
import { EditorialList } from '../components/ui/EditorialList'
import { FAQAccordion } from '../components/ui/FAQAccordion'
import { Button } from '../components/ui/Button'
import { Seo } from '../components/seo/Seo'
import {
  SERVICES,
  DELIVERABLES,
  INDUSTRIES,
  ADD_ONS,
  WORKING_TOGETHER,
  AVAILABILITY_NOTE,
  CURRENTLY_INTERESTED_IN,
  PRICING_PRINCIPLES,
  SERVICES_FAQ,
} from '../data/services'

export function Services() {
  return (
    <>
      <Seo
        title="Services — Shibam Pandab"
        description="Premium, design-led websites for businesses that take their presentation as seriously as their product."
        path="/services"
      />
      {/* 01 — Editorial Hero */}
      <section className="border-b-2 border-ink pt-32">
        <Container className="py-20 md:py-28">
          <Reveal>
            <Eyebrow index="00" label="Services" />
          </Reveal>
          <h1 className="mt-8 max-w-3xl font-sans text-[10vw] leading-[1.02] font-medium tracking-tight md:text-[4vw] lg:text-[3.6rem]">
            <AnimatedText text="What I build for ambitious businesses." />
          </h1>
          <Reveal delay={0.15}>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-soft">
              Premium, design-led websites for businesses that take
              their presentation as seriously as their product.
            </p>
          </Reveal>
        </Container>
      </section>

      {/* 02 — Services */}
      <section className="border-b-2 border-ink">
        <Container className="py-20 md:py-28">
          <Reveal>
            <Eyebrow index="01" label="What I Build" />
          </Reveal>
          <div className="mt-10">
            <EditorialList items={SERVICES} marker="number" />
          </div>
        </Container>
      </section>

      {/* 03 — What You Receive */}
      <section className="border-b-2 border-ink">
        <Container className="py-20 md:py-28">
          <Reveal>
            <Eyebrow index="02" label="What You Receive" />
          </Reveal>
          <div className="mt-10 grid grid-cols-1 gap-x-12 md:grid-cols-2">
            <EditorialList
              items={DELIVERABLES.slice(0, Math.ceil(DELIVERABLES.length / 2)).map((title) => ({ title }))}
              marker="check"
              compact
            />
            <EditorialList
              items={DELIVERABLES.slice(Math.ceil(DELIVERABLES.length / 2)).map((title) => ({ title }))}
              marker="check"
              compact
            />
          </div>
        </Container>
      </section>

      {/* 04 — Industries */}
      <section className="border-b-2 border-ink">
        <Container className="py-20 md:py-28">
          <Reveal>
            <Eyebrow index="03" label="Industries" />
          </Reveal>
          <div className="mt-10 grid grid-cols-2 gap-x-12 gap-y-1 border-t-2 border-ink pt-8">
            {INDUSTRIES.map((industry, i) => (
              <Reveal key={industry} delay={i * 0.03}>
                <p className="py-3 font-display text-xl italic md:text-2xl">{industry}</p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* 05 — Optional Add-ons */}
      <section className="border-b-2 border-ink">
        <Container className="py-20 md:py-28">
          <Reveal>
            <Eyebrow index="04" label="Optional Add-ons" />
            <p className="mt-4 max-w-lg text-sm text-ink-soft">
              Scoped in later, as a business grows — not bundled by default.
            </p>
          </Reveal>
          <div className="mt-10">
            <EditorialList items={ADD_ONS} marker="check" compact />
          </div>
        </Container>
      </section>

      {/* 06 — Working Together */}
      <section className="border-b-2 border-ink">
        <Container className="py-20 md:py-28">
          <Reveal>
            <Eyebrow index="05" label="Working Together" />
          </Reveal>
          <div className="mt-10 flex flex-col gap-6">
            {WORKING_TOGETHER.map((line, i) => (
              <Reveal key={line} delay={i * 0.06}>
                <p className="max-w-2xl font-display text-2xl italic leading-snug md:text-3xl">
                  {line}
                </p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* 07 — Availability */}
      <section className="border-b-2 border-ink">
        <Container className="py-20 md:py-28">
          <Reveal>
            <Eyebrow index="06" label="Currently Accepting" />
          </Reveal>
          <Reveal delay={0.08}>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-ink-soft">
              {AVAILABILITY_NOTE}
            </p>
          </Reveal>
          <div className="mt-10 max-w-md">
            <EditorialList
              items={CURRENTLY_INTERESTED_IN.map((title) => ({ title }))}
              marker="check"
              compact
            />
          </div>
        </Container>
      </section>

      {/* 08 — Pricing Philosophy */}
      <section className="border-b-2 border-ink">
        <Container className="py-20 md:py-28">
          <Reveal>
            <Eyebrow index="07" label="Pricing Philosophy" />
          </Reveal>
          <div className="mt-10 flex flex-col gap-6">
            {PRICING_PRINCIPLES.map((line, i) => (
              <Reveal key={line} delay={i * 0.08}>
                <p className="max-w-2xl font-display text-2xl italic leading-snug md:text-3xl">
                  {line}
                </p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* 09 — FAQ */}
      <section className="border-b-2 border-ink">
        <Container className="py-20 md:py-28">
          <Reveal>
            <span className="eyebrow text-ink-soft">Frequently Asked</span>
          </Reveal>
          <div className="mt-8">
            <FAQAccordion faqs={SERVICES_FAQ} />
          </div>
        </Container>
      </section>

      {/* 10 — Final CTA */}
      <section className="border-b-2 border-ink">
        <Container className="flex flex-col items-center gap-8 py-28 text-center md:py-40">
          <Reveal>
            <p className="max-w-2xl font-display text-3xl italic leading-snug md:text-5xl">
              Let’s build something people remember.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <Button to="/contact" variant="primary">
              Start a Project
            </Button>
          </Reveal>
        </Container>
      </section>
    </>
  )
}
