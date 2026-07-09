import { Link } from 'react-router-dom'
import type { Project } from '../../data/projects'

/**
 * One hairline-divided project row — index, name, category, and a
 * "View Case Study" link that appears on hover. Extracted from the
 * old /projects list so the same row renders identically on the
 * rebuilt Work archive and every /projects/{category} directory,
 * instead of three copies of the same markup.
 */
export function ProjectIndexRow({ project }: { project: Project }) {
  return (
    <Link
      to={`/projects/${project.slug}`}
      className="group flex flex-col gap-4 border-t-2 border-ink py-8 first:border-t-0 first:pt-0 md:flex-row md:items-baseline md:justify-between md:gap-10"
    >
      <div className="flex items-baseline gap-5">
        <span className="font-display text-xl italic text-red md:text-2xl">
          {project.index}
        </span>
        <div className="flex flex-col gap-1">
          <h2 className="text-2xl font-medium transition-colors duration-300 group-hover:text-red md:text-3xl">
            {project.name}
          </h2>
          <span className="eyebrow text-ink-soft">{project.category}</span>
        </div>
      </div>

      <span className="flex items-center gap-2 eyebrow text-ink-soft transition-colors duration-300 group-hover:text-red">
        View Case Study
        <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
          →
        </span>
      </span>
    </Link>
  )
}
