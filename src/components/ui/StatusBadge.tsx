import type { ProjectStatus } from '../../data/projects'

const STATUS_LABEL: Record<ProjectStatus, string> = {
  'in-development': 'In Development',
  research: 'Research',
  planned: 'Planned',
}

/**
 * Reduced-emphasis marker for roadmap items — deliberately quieter
 * than anything used for shipped work, so a visitor reads "not live
 * yet" at a glance. Never renders "Pending".
 */
export function StatusBadge({ status }: { status: ProjectStatus }) {
  return (
    <span className="eyebrow inline-flex w-fit items-center gap-2 border border-ink-soft/30 px-3 py-1 text-ink-soft/70">
      {STATUS_LABEL[status]}
    </span>
  )
}
