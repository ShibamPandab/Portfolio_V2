import { Container } from '../ui/Container'
import { Reveal } from '../ui/Reveal'
import { Eyebrow } from '../ui/Eyebrow'

/**
 * A single isolated philosophy statement — deliberately not a repeat
 * of About's "Design Philosophy" bullet list. Same underlying belief,
 * different register: one sentence, full-page isolation, no list.
 */
export function Philosophy() {
  return (
    <section aria-labelledby="philosophy-heading" className="border-b-2 border-ink">
      <Container className="py-24 md:py-36">
        <Reveal>
          <Eyebrow index="03" label="Philosophy" />
        </Reveal>
        <Reveal delay={0.08}>
          <h2
            id="philosophy-heading"
            className="mt-10 max-w-3xl font-sans text-[8vw] leading-[1.05] font-medium tracking-tight md:text-[3.2rem] lg:text-[3.6rem]"
          >
            A website is never the product. It’s the proof that the
            business behind it pays attention.
          </h2>
        </Reveal>
      </Container>
    </section>
  )
}
