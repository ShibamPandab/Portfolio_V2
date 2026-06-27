import { Reveal } from '../ui/Reveal'
import { Button } from '../ui/Button'

function ExternalIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" aria-hidden="true" className="inline-block">
      <path
        d="M3 9L9 3M9 3H4.5M9 3V7.5"
        stroke="currentColor"
        strokeWidth="1.2"
        fill="none"
      />
    </svg>
  )
}

/**
 * Closing triptych for a project's case study page — the strongest
 * CTA on the page. Live Site is visually heaviest (primary button),
 * browsing more case studies is secondary, GitHub stays subtle and
 * text-only so it never competes with the live-site conversion goal.
 */
export function EditorialCTA({
  liveHref,
  githubHref,
}: {
  liveHref?: string
  githubHref?: string
}) {
  return (
    <div className="grid grid-cols-1 divide-y-2 divide-ink border-t-2 border-b-2 border-ink md:grid-cols-3 md:divide-x-2 md:divide-y-0">
      <Reveal>
        <div className="flex h-full flex-col gap-6 p-8 md:p-10">
          <p className="text-base text-ink-soft">Experience the finished product.</p>
          {liveHref ? (
            <Button href={liveHref} external variant="primary" className="w-fit">
              View Live Site
            </Button>
          ) : (
            <span className="eyebrow text-ink-soft/60">Live Site Coming Soon</span>
          )}
        </div>
      </Reveal>

      <Reveal delay={0.06}>
        <div className="flex h-full flex-col gap-6 p-8 md:p-10">
          <p className="text-base text-ink-soft">Visit the complete index of case studies.</p>
          <Button to="/projects" variant="secondary" className="w-fit">
            View All Case Studies
          </Button>
        </div>
      </Reveal>

      <Reveal delay={0.12}>
        <div className="flex h-full flex-col gap-6 p-8 md:p-10">
          <p className="text-base text-ink-soft">Interested in the implementation?</p>
          {githubHref ? (
            <a
              href={githubHref}
              target="_blank"
              rel="noopener noreferrer"
              className="eyebrow group inline-flex w-fit items-center gap-2 border-b border-ink/30 pb-1 text-ink-soft transition-colors duration-300 hover:border-red hover:text-red"
            >
              View Source on GitHub
              <ExternalIcon />
            </a>
          ) : (
            <span className="eyebrow text-ink-soft/60">Source Not Public</span>
          )}
        </div>
      </Reveal>
    </div>
  )
}
