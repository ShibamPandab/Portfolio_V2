import { Reveal } from '../ui/Reveal'
import { Button } from '../ui/Button'

export function ProjectCTA({
  liveHref,
  caseStudyTo,
}: {
  liveHref?: string
  /** Internal route to the project's case study page, e.g. /projects/bong-pizza */
  caseStudyTo?: string
}) {
  return (
    <Reveal delay={0.15}>
      <div className="flex flex-wrap items-center gap-8 pt-2">
        {caseStudyTo && (
          <Button to={caseStudyTo} variant="secondary">
            View Case Study
          </Button>
        )}
        {liveHref && (
          <Button href={liveHref} variant="secondary" external>
            View Live
          </Button>
        )}
        {!liveHref && !caseStudyTo && (
          <span className="eyebrow text-ink-soft/60">Live Link Coming Soon</span>
        )}
      </div>
    </Reveal>
  )
}
