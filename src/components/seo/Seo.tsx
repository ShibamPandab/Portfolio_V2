import { Helmet } from 'react-helmet-async'
import { SITE } from '../../constants/nav'

/**
 * No dedicated OG image exists yet (see production audit). Until one
 * is designed, the strongest real asset in the repo — a featured,
 * high-quality project screenshot — stands in as the site-wide
 * default, so every share card shows real work instead of a blank
 * or generated placeholder.
 */
const DEFAULT_OG_IMAGE = '/projects/bong-pizza.png'

export type SeoProps = {
  /** Sets document.title, og:title, and twitter:title — same string, one place. */
  title: string
  description: string
  /** Route path only, e.g. "/" or "/projects/bong-pizza" — combined with SITE.url for canonical and og:url. */
  path: string
  /** Root-relative image path, e.g. "/projects/cafe-elio.png". Falls back to DEFAULT_OG_IMAGE when omitted. */
  image?: string
  /** "article" for project case studies (they read as content pieces), "website" for everything else. */
  type?: 'website' | 'article'
}

/**
 * Single implementation every route renders once. Static pages pass
 * their own title/description; ProjectDetails passes fields sourced
 * directly from the matched Project object — no metadata is ever
 * hand-duplicated per project.
 */
export function Seo({ title, description, path, image, type = 'website' }: SeoProps) {
  const url = `${SITE.url}${path}`
  const imageUrl = `${SITE.url}${image ?? DEFAULT_OG_IMAGE}`

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={SITE.name} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />
    </Helmet>
  )
}
