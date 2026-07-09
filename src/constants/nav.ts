export const NAV_LINKS = [
  { label: 'Work', to: '/projects' },
  { label: 'Services', to: '/services' },
  { label: 'Process', to: '/process' },
  { label: 'Contact', to: '/contact' },
]

export const SITE = {
  name: 'Shibam Pandab',
  email: 'shibampandab@gmail.com',
  location: 'Kolkata, India',
  /** Single source of truth for the production origin — used by the SEO
   *  component (canonical/OG/Twitter URLs) and scripts/generate-seo.ts
   *  (sitemap.xml/robots.txt). Override at build time with SITE_URL if
   *  a custom domain is ever connected, instead of editing this file. */
  url: 'https://portfolio-v2-tau-eosin.vercel.app',
}

/** Real profile links only — a platform with no live profile is omitted, not linked as a dead "#". */
export const SOCIAL_LINKS = [
  { label: 'GitHub', href: 'https://github.com/ShibamPandab' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/shibam-pandab/' },
  { label: 'Instagram', href: 'https://www.instagram.com/_be_shibam_/' },
  { label: 'X (Twitter)', href: 'https://x.com/ShibamPandab' },
]
