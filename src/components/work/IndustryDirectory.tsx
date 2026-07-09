import { Link } from 'react-router-dom'
import { Reveal } from '../ui/Reveal'
import { CATEGORIES } from '../../data/categories'
import { PROJECTS } from '../../data/projects'

/**
 * "Browse by Industry" — one hairline row per category, same visual
 * language as ProjectIndexRow so the archive reads as one system
 * rather than two different list styles.
 */
export function IndustryDirectory() {
  return (
    <div>
      {CATEGORIES.map((category, i) => {
        const count = PROJECTS.filter((p) => p.categoryId === category.id && !p.status).length

        return (
          <Reveal key={category.id} delay={i * 0.04}>
            <Link
              to={`/projects/${category.id}`}
              className="group flex flex-col gap-4 border-t-2 border-ink py-8 first:border-t-0 first:pt-0 md:flex-row md:items-baseline md:justify-between md:gap-10"
            >
              <div className="flex flex-col gap-2 md:max-w-xl">
                <h2 className="text-2xl font-medium transition-colors duration-300 group-hover:text-red md:text-3xl">
                  {category.label}
                </h2>
                <p className="text-base leading-relaxed text-ink-soft">{category.tagline}</p>
              </div>

              <div className="flex items-center justify-between gap-4 md:flex-col md:items-end md:gap-3">
                <span className="eyebrow text-ink-soft/70">
                  {count} {count === 1 ? 'Project' : 'Projects'}
                </span>
                <span className="flex items-center gap-2 eyebrow text-ink-soft transition-colors duration-300 group-hover:text-red">
                  Browse
                  <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </span>
              </div>
            </Link>
          </Reveal>
        )
      })}
    </div>
  )
}
