import { Reveal } from '../ui/Reveal'
import { MediaFrame } from '../ui/MediaFrame'

/**
 * Case-study image treatment, distinct from ProjectImage (which the
 * homepage preview grid uses). Shows each screenshot at its true
 * aspect ratio — no crop, no stretch — inside a hairline mount, since
 * the whole point of a case-study screenshot is showing the real
 * interface exactly as it renders.
 */
export function ProjectShowcaseImage({ label, src }: { label: string; src?: string }) {
  return (
    <Reveal delay={0.05}>
      {src ? (
        <div className="border-2 border-ink bg-cream-dim p-2 md:p-3">
          <img src={src} alt={label} loading="lazy" className="block h-auto w-full" />
        </div>
      ) : (
        <MediaFrame label={label} />
      )}
    </Reveal>
  )
}
