import { Container } from '../components/ui/Container'
import { Eyebrow } from '../components/ui/Eyebrow'
import { Reveal } from '../components/ui/Reveal'
import { AnimatedText } from '../components/ui/AnimatedText'
import { EditorialList } from '../components/ui/EditorialList'
import { FeatureGrid } from '../components/ui/FeatureGrid'
import { Button } from '../components/ui/Button'
import { Seo } from '../components/seo/Seo'
import {
  PHILOSOPHY_POINTS,
  STAGES,
  STAGE_DETAILS,
  COMMUNICATION_POINTS,
  AI_ACCELERATES,
  ALWAYS_HUMAN,
  TIMELINE_FACTORS,
  AFTER_LAUNCH_POINTS,
} from '../data/process'

export function Process() {
  return (
    <>
      <Seo
        title="Process — Shibam Pandab"
        description="Every project follows a considered process, designed to understand the business before designing anything."
        path="/process"
      />
      {/* Hero */}
      <section className="border-b-2 border-ink pt-32">
        <Container className="py-20 md:py-28">
          <Reveal>
            <Eyebrow index="00" label="Process" />
          </Reveal>
          <h1 className="mt-8 max-w-2xl font-sans text-[10vw] leading-[1.02] font-medium tracking-tight md:text-[4vw] lg:text-[3.6rem]">
            <AnimatedText text="How a project actually gets built." />
          </h1>
          <Reveal delay={0.15}>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-soft">
              Every project follows a considered process, designed to
              understand the business before designing anything.
            </p>
          </Reveal>
        </Container>
      </section>

      {/* 01 — Philosophy */}
      <section className="border-b-2 border-ink">
        <Container className="py-20 md:py-28">
          <Reveal>
            <Eyebrow index="01" label="Philosophy" />
          </Reveal>
          <Reveal delay={0.06}>
            <p className="mt-8 max-w-2xl font-display text-2xl italic leading-snug md:text-3xl">
              Great websites don’t begin with code — they begin with
              understanding.
            </p>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="mt-6 max-w-xl text-ink-soft">
              Before designing a single screen, I first learn about:
            </p>
          </Reveal>
          <div className="mt-8 max-w-md">
            <EditorialList
              items={PHILOSOPHY_POINTS.map((title) => ({ title }))}
              marker="check"
              compact
            />
          </div>
        </Container>
      </section>

      {/* 02 — Workflow */}
      <section className="border-b-2 border-ink">
        <Container className="py-20 md:py-28">
          <Reveal>
            <Eyebrow index="02" label="Workflow" />
          </Reveal>
          <div className="mt-10">
            <EditorialList
              items={STAGES.map((s) => ({ title: s.title, desc: s.tagline }))}
              marker="number"
            />
          </div>
        </Container>
      </section>

      {/* 03 — What Happens In Each Stage */}
      <section className="border-b-2 border-ink">
        <Container className="py-20 md:py-28">
          <Reveal>
            <Eyebrow index="03" label="What Happens In Each Stage" />
          </Reveal>
          <div className="mt-10">
            <FeatureGrid features={STAGE_DETAILS} cols={3} />
          </div>
        </Container>
      </section>

      {/* 04 — Communication */}
      <section className="border-b-2 border-ink">
        <Container className="py-20 md:py-28">
          <Reveal>
            <Eyebrow index="04" label="Communication" />
          </Reveal>
          <Reveal delay={0.06}>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-ink-soft">
              Collaboration stays transparent throughout the project —
              never a black box between kickoff and delivery.
            </p>
          </Reveal>
          <div className="mt-8 max-w-md">
            <EditorialList
              items={COMMUNICATION_POINTS.map((title) => ({ title }))}
              marker="check"
              compact
            />
          </div>
        </Container>
      </section>

      {/* 05 — AI-Assisted Development */}
      <section className="border-b-2 border-ink">
        <Container className="py-20 md:py-28">
          <Reveal>
            <Eyebrow index="05" label="AI-Assisted Development" />
          </Reveal>
          <Reveal delay={0.06}>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-ink-soft">
              AI accelerates research, exploration, repetitive tasks,
              and iteration. It doesn’t replace judgement.
            </p>
          </Reveal>
          <div className="mt-10 grid grid-cols-1 gap-x-12 gap-y-10 md:grid-cols-2">
            <div>
              <Reveal delay={0.1}>
                <span className="eyebrow text-ink-soft">AI Accelerates</span>
              </Reveal>
              <div className="mt-4">
                <EditorialList
                  items={AI_ACCELERATES.map((title) => ({ title }))}
                  marker="check"
                  compact
                />
              </div>
            </div>
            <div>
              <Reveal delay={0.14}>
                <span className="eyebrow text-red">Always Human</span>
              </Reveal>
              <div className="mt-4">
                <EditorialList
                  items={ALWAYS_HUMAN.map((title) => ({ title }))}
                  marker="check"
                  compact
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 06 — What a typical engagement looks like */}
      <section className="border-b-2 border-ink">
        <Container className="py-20 md:py-28">
          <Reveal>
            <Eyebrow index="06" label="What a Typical Engagement Looks Like" />
          </Reveal>
          <Reveal delay={0.06}>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-ink-soft">
              There’s no fixed duration to promise here — timelines
              depend on project scope, complexity, feedback speed, and
              content readiness. A realistic estimate comes with the
              proposal, not before it.
            </p>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="mt-6 eyebrow text-ink-soft">
              {TIMELINE_FACTORS.join('   /   ')}
            </p>
          </Reveal>
        </Container>
      </section>

      {/* 07 — After Launch */}
      <section className="border-b-2 border-ink">
        <Container className="py-20 md:py-28">
          <Reveal>
            <Eyebrow index="07" label="After Launch" />
          </Reveal>
          <Reveal delay={0.06}>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-ink-soft">
              Launch isn’t always the end. What comes after is usually
              lighter, but still considered:
            </p>
          </Reveal>
          <div className="mt-8 max-w-md">
            <EditorialList
              items={AFTER_LAUNCH_POINTS.map((title) => ({ title }))}
              marker="check"
              compact
            />
          </div>
        </Container>
      </section>

      {/* Final CTA */}
      <section className="border-b-2 border-ink">
        <Container className="flex flex-col items-center gap-8 py-28 text-center md:py-40">
          <Reveal>
            <p className="max-w-2xl font-display text-3xl italic leading-snug md:text-5xl">
              Every project starts the same way — let’s talk.
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
