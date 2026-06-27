import { Reveal } from '../ui/Reveal'
import { ProjectCTA } from './ProjectCTA'

export function ProjectContent({
  description,
  liveHref,
  caseStudyHref,
}: {
  description: string
  liveHref?: string
  caseStudyHref?: string
}) {
  return (
    <div className="flex flex-col gap-8">
      <Reveal delay={0.12}>
        <p className="max-w-md text-lg leading-relaxed text-ink-soft">{description}</p>
      </Reveal>
      <ProjectCTA liveHref={liveHref} caseStudyHref={caseStudyHref} />
    </div>
  )
}
