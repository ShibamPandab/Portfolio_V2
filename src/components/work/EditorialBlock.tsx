import { Reveal } from '../ui/Reveal'

/**
 * Shared internals for ChallengeBlock and SolutionBlock — same
 * visual treatment, different fixed labels. Kept as one
 * implementation so the two stay visually identical by construction.
 */
export function EditorialBlock({
  label,
  text,
  delay = 0,
}: {
  label: string
  text: string
  delay?: number
}) {
  return (
    <Reveal delay={delay}>
      <div className="flex flex-col gap-3">
        <span className="eyebrow text-red">{label}</span>
        <p className="max-w-md text-base leading-relaxed text-ink-soft">{text}</p>
      </div>
    </Reveal>
  )
}
