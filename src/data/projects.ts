export type Project = {
  index: string
  name: string
  industry: string
  story: string
  challenge: string
  approach: string
  technology: string
  liveHref?: string
  caseStudyHref?: string
}

/**
 * Real client projects. Copy below is honest and process-based —
 * no fabricated metrics or results. Where a live URL isn't ready,
 * liveHref is left undefined and the "View Live" link is omitted.
 */
export const PROJECTS: Project[] = [
  {
    index: '01',
    name: 'Bong Pizza',
    industry: 'Restaurant — Food & Beverage',
    story:
      'A pizza brand whose food had more personality than its old web presence did — a generic restaurant template with a stock hero photo and a menu buried in a PDF.',
    challenge:
      'Most diners decide whether to order before they finish scrolling. The site needed to sell the food in the first screen, not after three clicks.',
    approach:
      'Built a single-page, menu-first layout: the full menu is readable without navigation, and the ordering CTA stays in view at every scroll depth instead of living only in a header.',
    technology: 'React, Tailwind CSS, Framer Motion',
  },
  {
    index: '02',
    name: 'Jewellery Store',
    industry: 'Jewellery — Luxury Retail',
    story:
      'A jewellery retailer competing against brands with far larger marketing budgets, where the website was the only place to establish craftsmanship before a customer ever visited in person.',
    challenge:
      'Jewellery is sold on trust and detail. A generic e-commerce theme would have made handmade pieces look mass-produced.',
    approach:
      'Slowed the pacing down deliberately — fewer products per screen, larger imagery, and editorial-style product presentation instead of a dense grid, so each piece reads as considered rather than inventoried.',
    technology: 'React, Tailwind CSS, Framer Motion',
  },
  {
    index: '03',
    name: 'Cafe Website',
    industry: 'Hospitality — Cafe',
    story:
      'A neighbourhood cafe that relied entirely on foot traffic and word of mouth, with no website at all before this project.',
    challenge:
      'The goal wasn’t conversions in the e-commerce sense — it was making a first-time visitor feel like they already knew the place before walking in.',
    approach:
      'Led with atmosphere over information: large photography of the space and menu items first, practical details (hours, location, menu) placed second but never hidden.',
    technology: 'React, Tailwind CSS, Framer Motion',
  },
]
