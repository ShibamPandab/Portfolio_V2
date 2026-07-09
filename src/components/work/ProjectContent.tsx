import { Reveal } from '../ui/Reveal'
import { ProjectCTA } from './ProjectCTA'

export function ProjectContent({
  description,
  liveHref,
  caseStudyTo,
}: {
  description: string
  liveHref?: string
  caseStudyTo?: string
}) {
  return (
    <div className="flex flex-col gap-8">
      <Reveal delay={0.12}>
        <p className="max-w-sm text-base leading-relaxed text-ink-soft">{description}</p>
      </Reveal>
      <ProjectCTA liveHref={liveHref} caseStudyTo={caseStudyTo} />
    </div>
  )
}
