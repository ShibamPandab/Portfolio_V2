import { motion } from 'framer-motion'
import type { Feature } from '../../types/content'
import { cn } from '../../lib/utils'

/**
 * The site's shared bordered-strip grid device (first used in the
 * Hero's principles strip). The "icon" is a single hairline cross
 * mark rather than an icon library — keeps the bundle free of
 * generic icon sets and matches the editorial, typography-only
 * restraint used everywhere else. `cols` controls the desktop
 * column count (3 or 4) so the divider logic stays correct.
 */
export function FeatureGrid({
  features,
  cols = 4,
}: {
  features: Feature[]
  cols?: 3 | 4
}) {
  return (
    <div
      className={cn(
        'grid grid-cols-1 border-t-2 border-ink sm:grid-cols-2',
        cols === 3 ? 'lg:grid-cols-3' : 'lg:grid-cols-4',
      )}
    >
      {features.map((feature, i) => (
        <motion.div
          key={feature.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
          className={cn(
            'flex flex-col gap-3 border-ink p-7',
            i % 2 === 0 && 'sm:border-r-2',
            i % cols !== cols - 1 && 'lg:border-r-2',
          )}
        >
          <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden="true" className="text-red">
            <path d="M7 0v14M0 7h14" stroke="currentColor" strokeWidth="1.5" />
          </svg>
          <h4 className="text-base font-medium">{feature.title}</h4>
          <p className="text-sm leading-relaxed text-ink-soft">{feature.desc}</p>
        </motion.div>
      ))}
    </div>
  )
}
