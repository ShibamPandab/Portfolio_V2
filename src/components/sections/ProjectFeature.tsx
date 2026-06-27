import { Reveal } from '../ui/Reveal'
import { MediaFrame } from '../ui/MediaFrame'
import { Button } from '../ui/Button'
import { AnimatedText } from '../ui/AnimatedText'
import type { Project } from '../../data/projects'
import { cn } from '../../lib/utils'

const META_ROWS: Array<{ key: keyof Project; label: string }> = [
  { key: 'industry', label: 'Industry' },
  { key: 'challenge', label: 'Challenge' },
  { key: 'approach', label: 'Approach' },
  { key: 'technology', label: 'Technology' },
]

export function ProjectFeature({ project, flip = false }: { project: Project; flip?: boolean }) {
  return (
    <article className="border-t-2 border-ink py-20 first:border-t-0 first:pt-0 md:py-28">
      <Reveal>
        <div className="mb-10 flex items-baseline gap-4 md:mb-14">
          <span className="font-display text-2xl italic text-red md:text-3xl">
            {project.index}
          </span>
          <h3 className="font-sans text-[10vw] leading-[0.95] font-medium tracking-tight md:text-[4.5vw] lg:text-[3.6rem]">
            <AnimatedText text={project.name} />
          </h3>
        </div>
      </Reveal>

      <div className="grid grid-cols-12 gap-x-8 gap-y-10">
        <div
          className={cn(
            'col-span-12 md:col-span-7',
            flip ? 'md:order-2 md:col-start-6' : 'md:col-start-1',
          )}
        >
          <Reveal delay={0.05}>
            <MediaFrame label={`${project.name} — project preview`} />
          </Reveal>
        </div>

        <div
          className={cn(
            'col-span-12 flex flex-col gap-8 md:col-span-5',
            flip ? 'md:order-1 md:col-start-1' : 'md:col-start-8',
          )}
        >
          <Reveal delay={0.1}>
            <p className="text-lg leading-relaxed text-ink-soft">{project.story}</p>
          </Reveal>

          <Reveal delay={0.15}>
            <dl className="flex flex-col">
              {META_ROWS.map((row) => (
                <div
                  key={row.key}
                  className="flex flex-col gap-1 border-t-2 border-ink py-4 first:border-t-0 first:pt-0"
                >
                  <dt className="eyebrow text-red">{row.label}</dt>
                  <dd className="text-sm leading-relaxed text-ink-soft">
                    {project[row.key]}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="flex flex-wrap items-center gap-8 pt-2">
              {project.liveHref && (
                <Button href={project.liveHref} variant="secondary">
                  View Live
                </Button>
              )}
              {project.caseStudyHref && (
                <Button href={project.caseStudyHref} variant="secondary">
                  View Case Study
                </Button>
              )}
              {!project.liveHref && !project.caseStudyHref && (
                <span className="eyebrow text-ink-soft/60">Live Link Coming Soon</span>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </article>
  )
}
