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
 */
export function ProjectPreview({ project, flip = false }: { project: Project; flip?: boolean }) {
  return (
    <article className="border-t-2 border-ink py-20 first:border-t-0 first:pt-0 md:py-28">
      <div className="grid grid-cols-1 gap-x-10 gap-y-10 md:grid-cols-[38fr_62fr] md:items-center">
        <div className={cn('flex flex-col gap-8', flip && 'md:order-2')}>
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

        <div className={cn(flip && 'md:order-1')}>
          <ProjectImage
            label={`${project.name} — project preview`}
            src={`/projects/${project.slug}.png`}
          />
        </div>
      </div>
    </article>
  )
}
