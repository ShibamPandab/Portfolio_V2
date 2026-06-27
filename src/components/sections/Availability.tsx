import { Container } from '../ui/Container'
import { Reveal } from '../ui/Reveal'
import { Eyebrow } from '../ui/Eyebrow'
import { Button } from '../ui/Button'

export function Availability() {
  return (
    <section aria-labelledby="availability-heading" className="border-b-2 border-ink">
      <Container className="flex flex-col items-start gap-10 py-24 md:py-32 md:flex-row md:items-center md:justify-between">
        <Reveal>
          <Eyebrow index="05" label="Availability" />
          <h2
            id="availability-heading"
            className="mt-6 max-w-xl font-display text-3xl italic leading-snug md:text-4xl"
          >
            New projects are taken on a limited basis, by enquiry.
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <Button to="/contact" variant="primary">
            Check Availability
          </Button>
        </Reveal>
      </Container>
    </section>
  )
}
