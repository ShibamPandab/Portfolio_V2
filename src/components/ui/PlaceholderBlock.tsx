import type { ReactNode } from 'react'
import { Reveal } from './Reveal'

/**
 * One hairline-divided placeholder block for a scaffolded page
 * section. `children` carries the actual placeholder content —
 * a short paragraph, or a small list — kept intentionally light.
 */
export function PlaceholderBlock({
  label,
  title,
  children,
  delay = 0,
}: {
  label: string
  title: string
  children?: ReactNode
  delay?: number
}) {
  return (
    <Reveal delay={delay}>
      <div className="border-t-2 border-ink py-12 first:border-t-0 first:pt-0">
        <span className="eyebrow text-red">{label}</span>
        <h2 className="mt-4 text-2xl font-medium md:text-3xl">{title}</h2>
        {children && <div className="mt-4 max-w-xl text-ink-soft">{children}</div>}
      </div>
    </Reveal>
  )
}
