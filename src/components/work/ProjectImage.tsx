import { Reveal } from '../ui/Reveal'
import { MediaFrame } from '../ui/MediaFrame'

/**
 * Wraps MediaFrame so a real <img loading="lazy"> can drop in here
 * later without touching ProjectSection's layout logic.
 */
export function ProjectImage({ label }: { label: string }) {
  return (
    <Reveal delay={0.05}>
      <MediaFrame label={label} />
    </Reveal>
  )
}
