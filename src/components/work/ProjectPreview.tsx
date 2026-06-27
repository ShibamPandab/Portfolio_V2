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
 */
export function ProjectPreview({ project, flip = false }: { project: Project; flip?: boolean }) {
  return (
    <article className="border-t-2 border-ink py-20 first:border-t-0 first:pt-0 md:py-28">
      <div className="grid grid-cols-12 gap-x-8 gap-y-10">
        <div
          className={cn(
            'col-span-12 flex flex-col gap-8 md:col-span-5',
            flip ? 'md:order-2 md:col-start-8' : 'md:col-start-1',
          )}
        >
          <ProjectHeader
            index={project.index}
            name={project.name}
            category={project.category}
            quote={project.quote}
          />
          <ProjectContent
            description={project.description}
            liveHref={project.liveHref}
            caseStudyTo={`/projects/${project.slug}`}
          />
        </div>

        <div
          className={cn(
            'col-span-12 md:col-span-7',
            flip ? 'md:order-1 md:col-start-1' : 'md:col-start-6',
          )}
        >
          <ProjectImage label={`${project.name} — project preview`} />
        </div>
      </div>
    </article>
  )
}
