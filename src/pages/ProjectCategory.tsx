import { Link, Navigate, useParams } from 'react-router-dom'
import { Container } from '../components/ui/Container'
import { Eyebrow } from '../components/ui/Eyebrow'
import { Reveal } from '../components/ui/Reveal'
import { ProjectIndexRow } from '../components/work/ProjectIndexRow'
import { Seo } from '../components/seo/Seo'
import { CATEGORIES } from '../data/categories'
import { PROJECTS } from '../data/projects'

export function ProjectCategory() {
  // Route param stays named "slug" — /projects/:slug is shared with
  // ProjectDetails via ProjectOrCategory, so both read the same key.
  const { slug: categoryId } = useParams<{ slug: string }>()
  const index = CATEGORIES.findIndex((c) => c.id === categoryId)
  const category = CATEGORIES[index]

  if (!category) {
    return <Navigate to="/projects" replace />
  }

  const projects = PROJECTS.filter((p) => p.categoryId === category.id && !p.status)
  const prev = CATEGORIES[(index - 1 + CATEGORIES.length) % CATEGORIES.length]
  const next = CATEGORIES[(index + 1) % CATEGORIES.length]

  return (
    <section className="min-h-screen border-b-2 border-ink pt-32">
      {/* Title and description read straight off the matched Category. */}
      <Seo
        title={`${category.label} — Shibam Pandab`}
        description={category.intro}
        path={`/projects/${category.id}`}
      />
      <Container className="py-20 md:py-28">
        <Reveal>
          <Link
            to="/projects"
            className="eyebrow text-ink-soft transition-colors duration-300 hover:text-red"
          >
            ← All Industries
          </Link>
        </Reveal>

        <Reveal delay={0.06}>
          <Eyebrow index="—" label="Browse by Industry" className="mt-10" />
        </Reveal>
        <h1 className="mt-8 max-w-2xl font-sans text-[9vw] leading-[1.02] font-medium tracking-tight md:text-[3.4rem] lg:text-[3.8rem]">
          {category.label}
        </h1>
        <Reveal delay={0.1}>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-soft">{category.intro}</p>
        </Reveal>
        <Reveal delay={0.14}>
          <span className="eyebrow mt-6 inline-block text-ink-soft/70">
            {projects.length} {projects.length === 1 ? 'Project' : 'Projects'}
          </span>
        </Reveal>

        <div className="mt-16 md:mt-20">
          {projects.length > 0 ? (
            projects.map((project, i) => (
              <Reveal key={project.slug} delay={i * 0.05}>
                <ProjectIndexRow project={project} />
              </Reveal>
            ))
          ) : (
            <p className="border-t-2 border-ink py-8 text-ink-soft">
              No projects in this category yet.
            </p>
          )}
        </div>

        {CATEGORIES.length > 1 && (
          <nav
            aria-label="More industries"
            className="mt-20 grid grid-cols-1 gap-px border-t-2 border-ink md:grid-cols-2"
          >
            <Link
              to={`/projects/${prev.id}`}
              className="group flex flex-col gap-2 border-ink py-10 md:border-r-2 md:pr-10"
            >
              <span className="eyebrow text-ink-soft">Previous Industry</span>
              <span className="font-display text-3xl italic transition-colors duration-300 group-hover:text-red">
                {prev.label}
              </span>
            </Link>
            <Link
              to={`/projects/${next.id}`}
              className="group flex flex-col gap-2 py-10 text-right md:pl-10"
            >
              <span className="eyebrow text-ink-soft">Next Industry</span>
              <span className="font-display text-3xl italic transition-colors duration-300 group-hover:text-red">
                {next.label}
              </span>
            </Link>
          </nav>
        )}
      </Container>
    </section>
  )
}
