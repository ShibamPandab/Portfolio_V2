import { useEffect } from 'react'
import { Container } from '../components/ui/Container'
import { ScaffoldHeader } from '../components/ui/ScaffoldHeader'
import { PlaceholderBlock } from '../components/ui/PlaceholderBlock'

export function Process() {
  useEffect(() => {
    document.title = 'Process — Shibam Pandab'
  }, [])

  return (
    <section className="min-h-screen border-b-2 border-ink pt-32">
      <Container className="py-20 md:py-28">
        <ScaffoldHeader
          index="—"
          label="Process"
          heading="How a project actually gets built."
          intro="A full walkthrough of the workflow is coming. For now, the outline."
        />

        <div className="mt-16 md:mt-20">
          <PlaceholderBlock label="Workflow" title="Understand → Design & Build → Launch & Refine">
            <p>Full breakdown of each phase coming soon.</p>
          </PlaceholderBlock>

          <PlaceholderBlock label="AI-Assisted Development" title="Tools accelerate iteration, not judgment" delay={0.05}>
            <p>A detailed look at where AI fits into the workflow — coming soon.</p>
          </PlaceholderBlock>

          <PlaceholderBlock label="Timeline" title="What a typical engagement looks like" delay={0.1}>
            <p>Timeline guidance by project type — coming soon.</p>
          </PlaceholderBlock>
        </div>
      </Container>
    </section>
  )
}
