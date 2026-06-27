import { Container } from '../ui/Container'
import { Chapter } from '../ui/Chapter'
import { Reveal } from '../ui/Reveal'
import { AnimatedText } from '../ui/AnimatedText'
import { Button } from '../ui/Button'
import { cn } from '../../lib/utils'

const PRINCIPLES = [
  {
    index: '01',
    title: 'Clarity over decoration',
    desc: 'Restraint is a design tool, not a limitation — every element that doesn’t earn its place gets removed.',
  },
  {
    index: '02',
    title: 'Typography carries the brand',
    desc: 'Most businesses don’t need more photography. They need better words, set with more confidence.',
  },
  {
    index: '03',
    title: 'Every choice maps to an outcome',
    desc: 'A layout decision should answer a business question — not follow whatever is trending this year.',
  },
]

const NUMBERS = [
  { value: '3', caption: 'Business categories designed for — restaurants, boutique retail, hospitality' },
  { value: '0', caption: 'Stock templates used. Every layout is built from scratch' },
  { value: '100%', caption: 'Responsive, accessible, and production-ready by default' },
]

export function About() {
  return (
    <section id="about" aria-labelledby="about-heading" className="border-b-2 border-ink">
      <h2 id="about-heading" className="sr-only">
        About Shibam Pandab
      </h2>

      <Container className="flex flex-col gap-28 py-28 md:gap-36 md:py-40">
        {/* Editorial Statement — the chapter opener, deliberately smaller than the Hero */}
        <Reveal>
          <p className="max-w-4xl font-sans text-[8vw] leading-[1.05] font-medium tracking-tight md:text-[3.4rem] lg:text-[3.8rem]">
            Good design isn’t decoration. It’s the difference between a
            business that gets{' '}
            <span className="font-display italic text-red">remembered</span>{' '}
            and one that gets scrolled past.
          </p>
        </Reveal>

        {/* Who I am */}
        <Chapter index="01" label="Who I Am">
          <Reveal>
            <p className="max-w-2xl text-lg leading-relaxed text-ink-soft md:text-xl">
              I’m Shibam Pandab — a frontend developer and digital
              experience designer. I work at the intersection of design
              thinking and frontend engineering, building websites for
              restaurants, boutiques, and brands that care as much about
              how they’re perceived as how they function.
            </p>
          </Reveal>
        </Chapter>

        {/* How I think — flipped: label sits on the right this time */}
        <Chapter index="02" label="How I Think" flip>
          <Reveal>
            <p className="max-w-2xl text-lg leading-relaxed text-ink-soft md:text-xl">
              Every project starts as a business problem, not a design
              problem. Before a single pixel is placed, I ask what the
              website needs to do for the person paying for it — earn
              trust faster, shorten a decision, make a booking feel
              inevitable. Design is just the way that answer becomes
              visible.
            </p>
          </Reveal>
        </Chapter>

        {/* Why I build websites — isolated pull quote, no label column */}
        <Reveal>
          <blockquote className="mx-auto max-w-3xl text-center">
            <p className="font-display text-3xl italic leading-snug md:text-4xl lg:text-5xl">
              <AnimatedText
                as="span"
                text="A website is the first conversation most customers have with a business — I want that conversation to feel deliberate."
              />
            </p>
          </blockquote>
        </Reveal>

        {/* Design Philosophy — hairline-divided list, no cards */}
        <Chapter index="03" label="Design Philosophy">
          <div className="flex flex-col">
            {PRINCIPLES.map((p, i) => (
              <Reveal key={p.index} delay={i * 0.08}>
                <div className="flex flex-col gap-2 border-t-2 border-ink py-7 first:border-t-0 first:pt-0 md:flex-row md:items-baseline md:gap-10">
                  <span className="eyebrow shrink-0 text-red md:w-10">
                    {p.index}
                  </span>
                  <div className="flex flex-col gap-1.5 md:flex-1">
                    <h3 className="text-xl font-medium md:text-2xl">
                      {p.title}
                    </h3>
                    <p className="max-w-xl text-ink-soft">{p.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Chapter>

        {/* AI-assisted Workflow — flipped again to keep the alternation going */}
        <Chapter index="04" label="AI-Assisted Workflow" flip>
          <Reveal>
            <p className="max-w-2xl text-lg leading-relaxed text-ink-soft md:text-xl">
              I use AI tools the way a craftsman uses better tools — to
              move faster through iteration, not to skip judgment. AI
              accelerates the parts of the process that don’t need a
              human decision, so more time goes into the parts that do:
              layout, language, and the small choices that make a site
              feel considered instead of templated.
            </p>
          </Reveal>
        </Chapter>

        {/* Selected Numbers — isolated numerals, never stat cards */}
        <div>
          <Reveal>
            <span className="eyebrow text-ink-soft">05 — Selected Numbers</span>
          </Reveal>
          <div className="mt-10 grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-0">
            {NUMBERS.map((n, i) => (
              <Reveal key={n.value} delay={i * 0.1}>
                <div
                  className={cn(
                    'flex flex-col gap-3 md:px-8',
                    i > 0 && 'md:border-l-2 md:border-ink',
                  )}
                >
                  <span className="font-display text-6xl italic md:text-7xl">
                    {n.value}
                  </span>
                  <p className="max-w-[26ch] text-sm leading-relaxed text-ink-soft">
                    {n.caption}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Transition CTA */}
        <Reveal>
          <div className="flex flex-col items-start gap-8 border-t-2 border-ink pt-12 md:flex-row md:items-center md:justify-between">
            <p className="max-w-md font-display text-2xl italic md:text-3xl">
              The work speaks more plainly than I can.
            </p>
            <Button href="#work" variant="secondary">
              View Selected Work
            </Button>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}
