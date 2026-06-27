import { Reveal } from './Reveal'

type Item = { title: string; desc?: string }

/**
 * Hairline-divided list — the site's shared device for any "list of
 * things" section (services, deliverables, add-ons, design decisions).
 * No cards, no icons beyond a small numeral or check mark.
 */
export function EditorialList({
  items,
  marker = 'number',
  compact = false,
}: {
  items: Item[]
  marker?: 'number' | 'check'
  compact?: boolean
}) {
  return (
    <div className="flex flex-col">
      {items.map((item, i) => (
        <Reveal key={item.title} delay={i * 0.04}>
          <div
            className={
              compact
                ? 'flex items-baseline gap-4 border-t-2 border-ink py-4 first:border-t-0 first:pt-0'
                : 'flex flex-col gap-2 border-t-2 border-ink py-6 first:border-t-0 first:pt-0 md:flex-row md:items-baseline md:gap-10'
            }
          >
            <span className={compact ? 'eyebrow shrink-0 text-red' : 'eyebrow shrink-0 text-red md:w-10'}>
              {marker === 'check' ? '✓' : String(i + 1).padStart(2, '0')}
            </span>
            <div className="flex flex-col gap-1 md:flex-1">
              <h3 className={compact ? 'text-base font-medium' : 'text-lg font-medium md:text-xl'}>
                {item.title}
              </h3>
              {item.desc && <p className="max-w-xl text-sm leading-relaxed text-ink-soft">{item.desc}</p>}
            </div>
          </div>
        </Reveal>
      ))}
    </div>
  )
}
