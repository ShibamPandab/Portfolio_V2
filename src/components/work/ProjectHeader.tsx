import { Reveal } from '../ui/Reveal'
import { AnimatedText } from '../ui/AnimatedText'
import { cn } from '../../lib/utils'

export function ProjectHeader({
  index,
  name,
  category,
  quote,
  compact = false,
}: {
  index: string
  name: string
  category: string
  quote: string
  /** Slightly smaller type scale — used on the case-study page, where
   *  the text column is narrower and the screenshot carries the section. */
  compact?: boolean
}) {
  return (
    <div className="flex flex-col gap-6">
      <Reveal>
        <div className="flex items-baseline gap-4">
          <span className="font-display text-2xl italic text-red md:text-3xl">
            {index}
          </span>
          <h3
            className={cn(
              'font-sans leading-[0.95] font-medium tracking-tight',
              compact
                ? 'text-[9vw] md:text-[2.8vw] lg:text-[2.5rem]'
                : 'text-[11vw] md:text-[3.4vw] lg:text-[3rem]',
            )}
          >
            <AnimatedText text={name} />
          </h3>
        </div>
      </Reveal>

      <Reveal delay={0.05}>
        <span className="eyebrow text-ink-soft">{category}</span>
      </Reveal>

      <Reveal delay={0.1}>
        <p
          className={cn(
            'font-display max-w-md italic leading-snug',
            compact ? 'text-xl md:text-[1.5rem]' : 'text-2xl md:text-[1.8rem]',
          )}
        >
          “{quote}”
        </p>
      </Reveal>
    </div>
  )
}
