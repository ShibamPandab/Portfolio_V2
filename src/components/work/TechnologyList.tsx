import { Reveal } from '../ui/Reveal'

export function TechnologyList({ technologies }: { technologies: string[] }) {
  return (
    <Reveal delay={0.1}>
      <div className="flex flex-col gap-3">
        <span className="eyebrow text-red">Technology</span>
        <p className="eyebrow text-ink-soft">{technologies.join('   /   ')}</p>
      </div>
    </Reveal>
  )
}
