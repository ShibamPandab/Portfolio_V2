import { Container } from '../ui/Container'
import { Reveal } from '../ui/Reveal'
import { Button } from '../ui/Button'
import { AnimatedText } from '../ui/AnimatedText'

export function FinalCTA() {
  return (
    <section aria-labelledby="final-cta-heading" className="border-b-2 border-ink">
      <Container className="flex flex-col items-center gap-10 py-32 text-center md:py-44">
        <h2
          id="final-cta-heading"
          className="max-w-3xl font-sans text-[10vw] leading-[1] font-medium tracking-tight md:text-[5vw] lg:text-[4.2rem]"
        >
          <AnimatedText text="Have a business worth building for?" />
        </h2>
        <Reveal delay={0.3}>
          <Button to="/contact" variant="primary">
            Start a Project
          </Button>
        </Reveal>
      </Container>
    </section>
  )
}
