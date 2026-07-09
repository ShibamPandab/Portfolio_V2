import { Container } from '../components/ui/Container'
import { Eyebrow } from '../components/ui/Eyebrow'
import { Reveal } from '../components/ui/Reveal'
import { ProjectPreview } from '../components/work/ProjectPreview'
import { IndustryDirectory } from '../components/work/IndustryDirectory'
import { FutureArchiveList } from '../components/work/FutureArchiveList'
import { Seo } from '../components/seo/Seo'
import { PROJECTS } from '../data/projects'

export function Projects() {
  const featured = PROJECTS.filter((p) => p.featured)
  const futureProjects = PROJECTS.filter((p) => p.status)

  return (
    <section className="min-h-screen border-b-2 border-ink pt-32">
      <Seo
        title="Work — Shibam Pandab"
        description="Featured projects and an industry-organized archive — restaurants, healthcare, technology, and more — each with a complete case study covering challenge, solution, and design decisions."
        path="/projects"
      />
      <Container className="py-20 md:py-28">
        <Reveal>
          <Eyebrow index="—" label="Work" />
          <h1 className="mt-8 max-w-2xl font-sans text-[9vw] leading-[1.02] font-medium tracking-tight md:text-[3.4rem] lg:text-[3.8rem]">
            Every project, organized by industry.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-soft">
            A few featured projects first, then the full archive
            grouped the way a studio actually thinks about its work —
            by the kind of business, not just a flat list.
          </p>
        </Reveal>
      </Container>

      {/* 01 — Featured Projects */}
      <section aria-labelledby="featured-heading">
        <h2 id="featured-heading" className="sr-only">
          Featured Projects
        </h2>
        <Container className="pb-20 md:pb-28">
          <Reveal>
            <Eyebrow index="01" label="Featured Projects" />
          </Reveal>
          <div className="mt-14 md:mt-20">
            {featured.map((project, i) => (
              <ProjectPreview key={project.slug} project={project} flip={i % 2 === 1} />
            ))}
          </div>
        </Container>
      </section>

      {/* 02 — Browse by Industry */}
      <section aria-labelledby="industry-heading">
        <h2 id="industry-heading" className="sr-only">
          Browse by Industry
        </h2>
        <Container className="pb-20 md:pb-28">
          <Reveal>
            <Eyebrow index="02" label="Browse by Industry" />
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-soft">
              Seven directories, each with its own editorial introduction
              and the projects that belong to it.
            </p>
          </Reveal>
          <div className="mt-14 md:mt-20">
            <IndustryDirectory />
          </div>
        </Container>
      </section>

      {/* 03 — Future Archive — hidden entirely while empty */}
      {futureProjects.length > 0 && (
        <section aria-labelledby="future-heading">
          <h2 id="future-heading" className="sr-only">
            Future Archive
          </h2>
          <Container className="pb-20 md:pb-28">
            <Reveal>
              <Eyebrow index="03" label="Future Archive" />
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-soft">
                Work that's underway or planned, not yet a shipped case
                study.
              </p>
            </Reveal>
            <div className="mt-14 md:mt-20">
              <FutureArchiveList projects={futureProjects} />
            </div>
          </Container>
        </section>
      )}
    </section>
  )
}
