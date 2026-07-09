import { Reveal } from '../ui/Reveal'
import { MediaFrame } from '../ui/MediaFrame'

/**
 * Renders the real project screenshot when `src` is provided, falling
 * back to the MediaFrame placeholder for projects without one yet.
 */
export function ProjectImage({ label, src }: { label: string; src?: string }) {
  return (
    <Reveal delay={0.05}>
      {src ? (
        <div className="relative aspect-[4/3] w-full overflow-hidden border-2 border-ink bg-cream-dim md:aspect-[16/11]">
          <img
            src={src}
            alt={label}
            loading="lazy"
            className="h-full w-full object-cover object-top"
          />
        </div>
      ) : (
        <MediaFrame label={label} />
      )}
    </Reveal>
  )
}
