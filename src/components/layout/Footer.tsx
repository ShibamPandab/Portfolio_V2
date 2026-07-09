import { Link } from 'react-router-dom'
import { Container } from '../ui/Container'
import { SocialLinks } from '../ui/SocialLinks'
import { NAV_LINKS, SITE } from '../../constants/nav'

export function Footer() {
  return (
    <footer className="border-ink">
      <Container className="flex flex-col gap-12 py-14 md:flex-row md:items-start md:justify-between">
        <div className="flex flex-col gap-3">
          <Link to="/" className="font-display text-2xl italic tracking-tight">
            {SITE.name}
          </Link>
          <p className="max-w-xs text-sm leading-relaxed text-ink-soft">
            Frontend Developer & Digital Experience Designer.
          </p>
        </div>

        <nav aria-label="Footer" className="flex flex-wrap gap-x-10 gap-y-3">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="eyebrow text-ink-soft transition-colors duration-300 hover:text-red"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex flex-col gap-3">
          <a
            href={`mailto:${SITE.email}`}
            className="eyebrow text-ink-soft transition-colors duration-300 hover:text-red"
          >
            {SITE.email}
          </a>
          <SocialLinks />
          <span className="eyebrow text-ink-soft/60">
            © {new Date().getFullYear()} {SITE.name}
          </span>
        </div>
      </Container>
    </footer>
  )
}
