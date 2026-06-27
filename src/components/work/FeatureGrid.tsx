import { motion } from 'framer-motion'
import type { Feature } from '../../data/projects'
import { cn } from '../../lib/utils'

/**
 * Reuses the Hero's bordered 4-up strip device. The "icon" is a
 * single hairline cross mark rather than an icon library — keeps
 * the bundle free of generic icon sets and matches the editorial,
 * typography-only restraint the brief asked for.
 */
export function FeatureGrid({ features }: { features: Feature[] }) {
  return (
    <div className="grid grid-cols-1 border-t-2 border-ink sm:grid-cols-2 lg:grid-cols-4">
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
            i % 4 !== 3 && 'lg:border-r-2',
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
