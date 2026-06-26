import { cn } from '../../lib/utils'

/**
 * Recurring section marker: "01 — LABEL". This is the site's
 * signature device, echoed in nav, hero, and every section header.
 */
export function Eyebrow({
  index,
  label,
  className,
}: {
  index: string
  label: string
  className?: string
}) {
  return (
    <div className={cn('eyebrow flex items-center gap-3 text-ink-soft', className)}>
      <span className="text-red">{index}</span>
      <span className="h-px w-6 bg-ink-soft/40" />
      <span>{label}</span>
    </div>
  )
}
