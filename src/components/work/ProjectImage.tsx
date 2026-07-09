import { Reveal } from '../ui/Reveal'
import { MediaFrame } from '../ui/MediaFrame'

/**
 * Renders the real project screenshot when `src` is provided, falling
 * back to the MediaFrame placeholder for projects without one yet.
 *
 * A fixed 16:9 frame keeps every featured card the same height in
 * the list, but the screenshots themselves are laptop-viewport
 * captures (wider than 16:9) — object-contain shows the full
 * composition inside that frame instead of cropping it to fill, with
 * the frame's own background standing in for letterboxing rather
 * than leaving transparent gaps.
 */
export function ProjectImage({ label, src }: { label: string; src?: string }) {
  return (
    <Reveal delay={0.05}>
      {src ? (
        <div className="relative aspect-video w-full overflow-hidden border-2 border-ink bg-cream-dim">
          <img
            src={src}
            alt={label}
            loading="lazy"
            className="h-full w-full object-contain"
          />
        </div>
      ) : (
        <MediaFrame label={label} />
      )}
    </Reveal>
  )
}
