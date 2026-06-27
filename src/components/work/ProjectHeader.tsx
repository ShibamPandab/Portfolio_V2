import { Reveal } from '../ui/Reveal'
import { AnimatedText } from '../ui/AnimatedText'

export function ProjectHeader({
  index,
  name,
  category,
  quote,
}: {
  index: string
  name: string
  category: string
  quote: string
}) {
  return (
    <div className="flex flex-col gap-6">
      <Reveal>
        <div className="flex items-baseline gap-4">
          <span className="font-display text-2xl italic text-red md:text-3xl">
            {index}
          </span>
          <h3 className="font-sans text-[11vw] leading-[0.95] font-medium tracking-tight md:text-[3.4vw] lg:text-[3rem]">
            <AnimatedText text={name} />
          </h3>
        </div>
      </Reveal>

      <Reveal delay={0.05}>
        <span className="eyebrow text-ink-soft">{category}</span>
      </Reveal>

      <Reveal delay={0.1}>
        <p className="font-display max-w-md text-2xl italic leading-snug md:text-[1.8rem]">
          “{quote}”
        </p>
      </Reveal>
    </div>
  )
}
