import { Container } from '../ui/Container'
import { Reveal } from '../ui/Reveal'
import { Eyebrow } from '../ui/Eyebrow'
import { ProjectPreview } from '../work/ProjectPreview'
import { Button } from '../ui/Button'
import { PROJECTS } from '../../data/projects'

export function Work() {
  const featured = PROJECTS.filter((p) => p.featured)

  return (
    <section id="work" aria-labelledby="work-heading" className="border-b-2 border-ink">
      <h2 id="work-heading" className="sr-only">
        Selected Work
      </h2>

      <Container className="py-28 md:py-40">
        <Reveal>
          <Eyebrow index="02" label="Selected Work" />
          <p className="mt-8 max-w-2xl font-sans text-[7vw] leading-[1.05] font-medium tracking-tight md:text-[2.6rem] lg:text-[3rem]">
            Three businesses. Three different problems. The same
            approach: understand the business before touching the
            design.
          </p>
        </Reveal>

        <div className="mt-20 md:mt-28">
          {featured.map((project, i) => (
            <ProjectPreview key={project.slug} project={project} flip={i % 2 === 1} />
          ))}
        </div>

        <Reveal>
          <div className="flex justify-center border-t-2 border-ink py-14">
            <Button to="/projects" variant="secondary">
              View All Projects
            </Button>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}
