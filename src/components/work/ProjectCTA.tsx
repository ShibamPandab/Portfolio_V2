import { Reveal } from '../ui/Reveal'
import { Button } from '../ui/Button'

export function ProjectCTA({
  liveHref,
  caseStudyHref,
}: {
  liveHref?: string
  caseStudyHref?: string
}) {
  return (
    <Reveal delay={0.15}>
      <div className="flex flex-wrap items-center gap-8 pt-2">
        {liveHref && (
          <Button href={liveHref} variant="secondary">
            View Live
          </Button>
        )}
        {caseStudyHref && (
          <Button href={caseStudyHref} variant="secondary">
            View Case Study
          </Button>
        )}
        {!liveHref && !caseStudyHref && (
          <span className="eyebrow text-ink-soft/60">Live Link Coming Soon</span>
        )}
      </div>
    </Reveal>
  )
}
