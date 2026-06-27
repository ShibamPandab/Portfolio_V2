import { Container } from '../ui/Container'
import { Reveal } from '../ui/Reveal'
import { Eyebrow } from '../ui/Eyebrow'
import { Button } from '../ui/Button'

const STEPS = [
  { index: '01', title: 'Understand', desc: 'The business and its customers, before any design decision.' },
  { index: '02', title: 'Design & Build', desc: 'AI-accelerated iteration, hand-finished detail.' },
  { index: '03', title: 'Launch & Refine', desc: 'Shipped, tested, and adjusted against real use.' },
]

export function MiniProcess() {
  return (
    <section aria-labelledby="process-preview-heading" className="border-b-2 border-ink">
      <Container className="py-24 md:py-36">
        <Reveal>
          <Eyebrow index="04" label="How I Work" />
          <h2
            id="process-preview-heading"
            className="mt-8 max-w-2xl font-sans text-[8vw] leading-[1.05] font-medium tracking-tight md:text-[2.6rem] lg:text-[3rem]"
          >
            A short, focused process — not a six-month agency pipeline.
          </h2>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 border-t-2 border-ink md:grid-cols-3">
          {STEPS.map((step, i) => (
            <Reveal key={step.index} delay={i * 0.08}>
              <div className="flex flex-col gap-3 border-ink p-8 md:border-r-2 md:last:border-r-0">
                <span className="eyebrow text-red">{step.index}</span>
                <h3 className="text-lg font-medium">{step.title}</h3>
                <p className="text-sm leading-relaxed text-ink-soft">{step.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <div className="mt-12">
            <Button to="/process" variant="secondary">
              See the Full Process
            </Button>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}
