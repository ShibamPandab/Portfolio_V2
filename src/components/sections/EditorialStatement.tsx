import { Container } from '../ui/Container'
import { Reveal } from '../ui/Reveal'
import { Eyebrow } from '../ui/Eyebrow'
import { AnimatedText } from '../ui/AnimatedText'

/**
 * A single isolated statement between Hero and About — the
 * "why this exists" beat before the "who I am" story. Deliberately
 * brief: one sentence, given the whole section, no supporting copy.
 */
export function EditorialStatement() {
  return (
    <section aria-labelledby="philosophy-statement" className="border-b-2 border-ink">
      <Container className="flex flex-col items-center gap-10 py-24 text-center md:py-36">
        <Reveal>
          <Eyebrow index="01" label="Why This Exists" className="justify-center" />
        </Reveal>
        <p
          id="philosophy-statement"
          className="max-w-3xl font-display text-3xl italic leading-snug md:text-5xl"
        >
          <AnimatedText text="Most businesses don’t need a website. They need a reason to be remembered." />
        </p>
      </Container>
    </section>
  )
}
