import type { Project } from '../../data/projects'
import { cn } from '../../lib/utils'
import { Reveal } from '../ui/Reveal'
import { ProjectHeader } from './ProjectHeader'
import { ProjectShowcaseImage } from './ProjectShowcaseImage'
import { ChallengeBlock } from './ChallengeBlock'
import { SolutionBlock } from './SolutionBlock'
import { DesignDecisionList } from './DesignDecisionList'
import { TechnologyList } from './TechnologyList'
import { FeatureGrid } from '../ui/FeatureGrid'
import { FAQAccordion } from '../ui/FAQAccordion'
import { EditorialCTA } from './EditorialCTA'

export function ProjectSection({ project, flip = false }: { project: Project; flip?: boolean }) {
  return (
    <article className="border-t-2 border-ink py-20 first:border-t-0 first:pt-0 md:py-32">
      {/* Header + Image — alternates sides per project */}
      <div className="grid grid-cols-12 gap-x-8 gap-y-12 md:items-center">
        <div
          className={cn(
            'col-span-12 flex flex-col gap-8 md:col-span-4',
            flip ? 'md:order-2 md:col-start-9' : 'md:col-start-1',
          )}
        >
          <ProjectHeader
            index={project.index}
            name={project.name}
            category={project.category}
            quote={project.quote}
            compact
          />
          <Reveal delay={0.12}>
            <p className="max-w-sm text-base leading-relaxed text-ink-soft">{project.description}</p>
          </Reveal>
        </div>

        <div
          className={cn(
            'col-span-12 md:col-span-8',
            flip ? 'md:order-1 md:col-start-1' : 'md:col-start-5',
          )}
        >
          <ProjectShowcaseImage
            label={`${project.name} — project preview`}
            src={`/projects/${project.slug}.png`}
          />
        </div>
      </div>

      {/* Challenge / Solution / Design Decisions / Technology — full width, below the fold of the hero block */}
      <div className="mt-20 grid grid-cols-1 gap-x-8 gap-y-12 border-t-2 border-ink pt-16 md:grid-cols-2 md:gap-y-16">
        <ChallengeBlock text={project.challenge} />
        <SolutionBlock text={project.solution} />
        <DesignDecisionList decisions={project.designDecisions} />
        <TechnologyList technologies={project.technologies} />
      </div>

      {/* Key Features */}
      <div className="mt-20">
        <span className="eyebrow text-ink-soft">Key Features</span>
        <div className="mt-6">
          <FeatureGrid features={project.features} />
        </div>
      </div>

      {/* Project FAQ */}
      <div className="mt-20">
        <span className="eyebrow text-ink-soft">Frequently Asked</span>
        <div className="mt-6">
          <FAQAccordion faqs={project.faqs} />
        </div>
      </div>

      {/* Editorial CTA — the strongest conversion moment on the page */}
      <div className="mt-20">
        <EditorialCTA liveHref={project.liveHref} githubHref={project.githubHref} />
      </div>
    </article>
  )
}
