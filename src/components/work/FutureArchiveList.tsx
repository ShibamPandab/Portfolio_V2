import type { Project } from '../../data/projects'
import { Reveal } from '../ui/Reveal'
import { StatusBadge } from '../ui/StatusBadge'

/**
 * Roadmap items — projects with a status set but no shipped case
 * study yet. Deliberately not a Link: there's nothing to click
 * through to. Renders nothing when the list is empty, which is the
 * expected state today — no project currently carries a status.
 */
export function FutureArchiveList({ projects }: { projects: Project[] }) {
  if (projects.length === 0) return null

  return (
    <div>
      {projects.map((project, i) => (
        <Reveal key={project.slug} delay={i * 0.04}>
          <div className="flex flex-col gap-3 border-t-2 border-ink py-8 first:border-t-0 first:pt-0 md:flex-row md:items-baseline md:justify-between md:gap-10">
            <div className="flex items-baseline gap-5">
              <span className="font-display text-xl italic text-ink-soft/50 md:text-2xl">
                {project.index}
              </span>
              <div className="flex flex-col gap-1">
                <h2 className="text-2xl font-medium text-ink-soft md:text-3xl">{project.name}</h2>
                <span className="eyebrow text-ink-soft/70">{project.category}</span>
              </div>
            </div>

            {project.status && <StatusBadge status={project.status} />}
          </div>
        </Reveal>
      ))}
    </div>
  )
}
