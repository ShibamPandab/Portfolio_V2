import { Link, Navigate, useParams } from 'react-router-dom'
import { Container } from '../components/ui/Container'
import { ProjectSection } from '../components/work/ProjectSection'
import { Seo } from '../components/seo/Seo'
import { PROJECTS } from '../data/projects'

export function ProjectDetails() {
  const { slug } = useParams<{ slug: string }>()
  const index = PROJECTS.findIndex((p) => p.slug === slug)
  const project = PROJECTS[index]

  if (!project) {
    return <Navigate to="/projects" replace />
  }

  const prev = PROJECTS[(index - 1 + PROJECTS.length) % PROJECTS.length]
  const next = PROJECTS[(index + 1) % PROJECTS.length]

  return (
    <section className="border-b-2 border-ink pt-32">
      {/* Every field here is read straight off the matched Project —
          nothing about this case study's metadata is written twice. */}
      <Seo
        title={`${project.name} — Case Study — Shibam Pandab`}
        description={project.description}
        path={`/projects/${project.slug}`}
        image={`/projects/${project.slug}.png`}
        type="article"
      />
      <Container className="py-12 md:py-16">
        <Link to="/projects" className="eyebrow text-ink-soft transition-colors duration-300 hover:text-red">
          ← All Projects
        </Link>

        <ProjectSection project={project} />

        {PROJECTS.length > 1 && (
          <nav
            aria-label="More projects"
            className="grid grid-cols-1 gap-px border-t-2 border-ink md:grid-cols-2"
          >
            <Link
              to={`/projects/${prev.slug}`}
              className="group flex flex-col gap-2 border-ink py-10 md:border-r-2 md:pr-10"
            >
              <span className="eyebrow text-ink-soft">Previous Project</span>
              <span className="font-display text-3xl italic transition-colors duration-300 group-hover:text-red">
                {prev.name}
              </span>
            </Link>
            <Link
              to={`/projects/${next.slug}`}
              className="group flex flex-col gap-2 py-10 text-right md:pl-10"
            >
              <span className="eyebrow text-ink-soft">Next Project</span>
              <span className="font-display text-3xl italic transition-colors duration-300 group-hover:text-red">
                {next.name}
              </span>
            </Link>
          </nav>
        )}
      </Container>
    </section>
  )
}
