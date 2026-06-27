import type { ReactNode } from 'react'
import { Reveal } from './Reveal'
import { Eyebrow } from './Eyebrow'

/**
 * Shared page-opener for scaffolded pages (Services, Process,
 * Contact) — eyebrow, oversized heading, intro paragraph. Keeps
 * every "not yet fully designed" page opening with the same
 * editorial confidence as the homepage, rather than looking unfinished.
 */
export function ScaffoldHeader({
  index,
  label,
  heading,
  intro,
}: {
  index: string
  label: string
  heading: ReactNode
  intro: string
}) {
  return (
    <Reveal>
      <Eyebrow index={index} label={label} />
      <h1 className="mt-8 max-w-2xl font-sans text-[9vw] leading-[1.02] font-medium tracking-tight md:text-[3.4rem] lg:text-[3.8rem]">
        {heading}
      </h1>
      <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-soft">{intro}</p>
    </Reveal>
  )
}
