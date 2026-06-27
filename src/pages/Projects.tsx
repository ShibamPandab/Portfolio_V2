import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Container } from '../components/ui/Container'
import { Eyebrow } from '../components/ui/Eyebrow'
import { Reveal } from '../components/ui/Reveal'
import { PROJECTS } from '../data/projects'

export function Projects() {
  useEffect(() => {
    document.title = 'All Projects — Shibam Pandab'
  }, [])

  return (
    <section className="min-h-screen border-b-2 border-ink pt-32">
      <Container className="py-20 md:py-28">
        <Reveal>
          <Eyebrow index="—" label="All Projects" />
          <h1 className="mt-8 max-w-2xl font-sans text-[9vw] leading-[1.02] font-medium tracking-tight md:text-[3.4rem] lg:text-[3.8rem]">
            Every project, past and current.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-soft">
            The homepage shows three. This is the full list — it grows
            as new work ships, without anything else on the site
            changing shape.
          </p>
        </Reveal>

        <div className="mt-16 md:mt-20">
          {PROJECTS.map((project, i) => (
            <Reveal key={project.slug} delay={i * 0.05}>
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
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}
