import type { Project } from '../../data/projects'
import { cn } from '../../lib/utils'
import { ProjectHeader } from './ProjectHeader'
import { ProjectImage } from './ProjectImage'
import { ProjectContent } from './ProjectContent'

/**
 * Homepage editorial preview — header, image, short description, and
 * a single "View Case Study" CTA. The full Challenge/Solution/
 * Features/FAQ depth lives only on the dedicated case study page at
 * /projects/{slug}, so the homepage stays light and conversion-paced.
 *
 * Text/image split is 38/62 (fr units, so the ratio holds regardless
 * of the gap) — the screenshot carries most of the visual weight,
 * with just enough text column to read the pitch at a glance.
 *
 * The alternating "flip" layout swaps both the DOM order and the
 * column template together, rather than using the `order` property
 * on a fixed 38fr/62fr grid. CSS Grid auto-placement assigns items
 * to tracks in order-adjusted sequence, so `order` alone would have
 * put the reordered item into the *other* track's width, not just
 * its other visual position — silently swapping which side got 38%
 * vs 62% instead of just which side the image was on.
 */
export function ProjectPreview({ project, flip = false }: { project: Project; flip?: boolean }) {
  const header = (
    <div className="flex flex-col gap-8">
      <ProjectHeader
        index={project.index}
        name={project.name}
        category={project.category}
        quote={project.quote}
        compact
      />
      <ProjectContent
        description={project.description}
        liveHref={project.liveHref}
        caseStudyTo={`/projects/${project.slug}`}
      />
    </div>
  )

  const image = (
    <ProjectImage label={`${project.name} — project preview`} src={`/projects/${project.slug}.png`} />
  )

  return (
    <article className="border-t-2 border-ink py-20 first:border-t-0 first:pt-0 md:py-28">
      <div
        className={cn(
          'grid grid-cols-1 gap-x-10 gap-y-10 md:items-center',
          flip ? 'md:grid-cols-[62fr_38fr]' : 'md:grid-cols-[38fr_62fr]',
        )}
      >
        {flip ? (
          <>
            {image}
            {header}
          </>
        ) : (
          <>
            {header}
            {image}
          </>
        )}
      </div>
    </article>
  )
}
