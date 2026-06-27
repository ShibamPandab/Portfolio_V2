import { Reveal } from '../ui/Reveal'

export function DesignDecisionList({ decisions }: { decisions: string[] }) {
  return (
    <div>
      <Reveal>
        <span className="eyebrow text-red">Design Decisions</span>
      </Reveal>
      <div className="mt-4 flex flex-col">
        {decisions.map((decision, i) => (
          <Reveal key={decision} delay={0.05 + i * 0.06}>
            <div className="flex gap-4 border-t-2 border-ink py-4 first:border-t-0 first:pt-0">
              <span className="eyebrow shrink-0 text-ink-soft">
                {String(i + 1).padStart(2, '0')}
              </span>
              <p className="text-sm leading-relaxed text-ink-soft">{decision}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  )
}
