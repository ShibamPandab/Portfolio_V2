import { motion } from 'framer-motion'
import { Container } from '../ui/Container'
import { Button } from '../ui/Button'
import { Eyebrow } from '../ui/Eyebrow'
import { AnimatedText } from '../ui/AnimatedText'

const PRINCIPLES = [
  {
    index: '01',
    title: 'Design-Led',
    desc: 'Every layout starts as a business decision, not a template.',
  },
  {
    index: '02',
    title: 'Built to Convert',
    desc: 'Premium presentation, measured against real usability.',
  },
  {
    index: '03',
    title: 'AI-Accelerated',
    desc: 'Faster iteration, without cutting craft or attention to detail.',
  },
  {
    index: '04',
    title: 'Production-Ready',
    desc: 'Responsive, accessible, and SEO-ready from day one.',
  },
]

export function Hero() {
  return (
    <section id="top" className="relative border-b-2 border-ink pt-20">
      <Container className="relative flex min-h-[78vh] flex-col gap-10 py-16 md:py-24">
        <Eyebrow index="00" label="Frontend Developer / Digital Experience Designer" />

        <h1 className="max-w-5xl font-sans text-[13vw] leading-[0.95] font-medium tracking-tight md:text-[7.5vw] lg:text-[6.4vw]">
          <AnimatedText text="I build websites your" />{' '}
          <AnimatedText
            as="span"
            text="customers"
            delay={0.18}
            className="font-display font-normal text-red italic"
          />{' '}
          <AnimatedText text="actually remember." delay={0.3} />
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-xl text-lg leading-relaxed text-ink-soft"
        >
          Premium, design-led websites for restaurants, boutiques, and brands
          that refuse to look ordinary online — built fast with an
          AI-accelerated workflow, finished by hand.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.85, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-wrap items-center gap-8"
        >
          <Button href="#work" variant="primary">
            View Case Studies
          </Button>
          <Button to="/contact" variant="secondary">
            Start a Project
          </Button>
        </motion.div>
      </Container>

      <div className="grid grid-cols-1 border-t-2 border-ink md:grid-cols-4">
        {PRINCIPLES.map((p, i) => (
          <motion.div
            key={p.index}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col gap-3 border-ink p-8 md:border-r-2 md:last:border-r-0"
          >
            <span className="eyebrow text-red">{p.index}</span>
            <h3 className="text-lg font-medium">{p.title}</h3>
            <p className="text-sm leading-relaxed text-ink-soft">{p.desc}</p>
          </motion.div>
        ))}
      </div>

      <div className="pointer-events-none absolute right-6 bottom-8 hidden items-center gap-3 md:flex">
        <span className="eyebrow text-ink-soft [writing-mode:vertical-rl]">
          Scroll
        </span>
        <motion.span
          className="h-16 w-px bg-ink-soft/40"
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 1, delay: 1, ease: [0.22, 1, 0.36, 1] }}
          style={{ transformOrigin: 'top' }}
        />
      </div>
    </section>
  )
}
