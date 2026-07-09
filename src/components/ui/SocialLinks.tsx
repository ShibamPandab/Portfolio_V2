import { cn } from '../../lib/utils'
import { SOCIAL_LINKS } from '../../constants/nav'
import { GithubIcon, InstagramIcon, LinkedInIcon, XIcon } from './SocialIcons'

const ICON_BY_LABEL: Record<string, typeof GithubIcon> = {
  GitHub: GithubIcon,
  LinkedIn: LinkedInIcon,
  Instagram: InstagramIcon,
  'X (Twitter)': XIcon,
}

/**
 * Single row of real social icons, shared by the Contact page and
 * the Footer so hover/focus states stay pixel-identical everywhere
 * they appear. Reads from SOCIAL_LINKS — add or remove a platform
 * there and it updates both places at once.
 */
export function SocialLinks({ className }: { className?: string }) {
  return (
    <div className={cn('flex items-center gap-4', className)}>
      {SOCIAL_LINKS.map(({ label, href }) => {
        const Icon = ICON_BY_LABEL[label]
        return (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${label} (opens in a new tab)`}
            className="text-ink-soft transition-colors duration-300 hover:text-red focus-visible:text-red focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red focus-visible:ring-offset-2 focus-visible:ring-offset-cream"
          >
            <Icon className="h-[18px] w-[18px]" />
          </a>
        )
      })}
    </div>
  )
}
