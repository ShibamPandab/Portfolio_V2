export type Feature = { title: string; desc: string }
export type FAQ = { q: string; a: string }

export type Project = {
  index: string
  name: string
  category: string
  quote: string
  description: string
  challenge: string
  solution: string
  designDecisions: string[]
  technologies: string[]
  features: Feature[]
  faqs: FAQ[]
  liveHref?: string
  caseStudyHref?: string
}

/**
 * Real client projects. Copy is honest and process-based — no
 * fabricated metrics, timelines, or results. FAQ answers describe
 * how projects like this are generally approached rather than
 * claiming specifics this project hasn't confirmed. Features are
 * a draft based on the brief — confirm accuracy before launch.
 */
export const PROJECTS: Project[] = [
  {
    index: '01',
    name: 'Bong Pizza',
    category: 'Restaurant — Food & Beverage',
    quote: 'The food had more personality than the website did. That gap was the whole brief.',
    description:
      'A pizza brand whose old web presence was a generic restaurant template with a stock hero photo and a menu buried in a PDF — nothing about it matched the confidence of the food.',
    challenge:
      'Most diners decide whether to order before they finish scrolling. The site needed to sell the food in the first screen, not after three clicks through a templated nav.',
    solution:
      'A single-page, menu-first layout: the full menu is readable without navigation, and the ordering CTA stays in view at every scroll depth instead of living only in a header.',
    designDecisions: [
      'Single-page menu, no nested navigation — the full menu is one scroll away, not three clicks.',
      'A sticky ordering CTA at every scroll depth, instead of buried in a header that disappears.',
      'Bold, appetite-driven typography in place of stock food photography filler.',
    ],
    technologies: ['React', 'Tailwind CSS', 'Framer Motion'],
    features: [
      { title: 'Menu-First Layout', desc: 'The complete menu is readable on page load — no tabs, no PDF download.' },
      { title: 'Sticky Ordering CTA', desc: 'The call-to-action to order stays reachable at every scroll position.' },
      { title: 'Responsive Design', desc: 'Built mobile-first, since most diners browse menus on their phones.' },
      { title: 'Fast Load Performance', desc: 'A lightweight build with no unnecessary scripts or heavy media.' },
    ],
    faqs: [
      {
        q: 'How long does a project like this take?',
        a: 'Timelines depend on scope, but a focused, single-page build like this typically moves through design and development as a short, contained engagement rather than a drawn-out one.',
      },
      {
        q: 'Is it fully responsive?',
        a: 'Yes — every project is tested and refined across mobile, tablet, and desktop before launch, not just checked on one screen size.',
      },
      {
        q: 'Can it scale later?',
        a: 'The component structure is built to extend. New sections, pages, or an ordering integration can be added without rebuilding the foundation.',
      },
      {
        q: 'Is SEO included?',
        a: 'Semantic HTML, proper metadata, and performance fundamentals are part of every build by default. Deeper SEO strategy work is scoped separately if needed.',
      },
    ],
  },
  {
    index: '02',
    name: 'Jewellery Store',
    category: 'Jewellery — Luxury Retail',
    quote: 'Jewellery is sold on trust and detail — a dense grid would have made handmade pieces look mass-produced.',
    description:
      'A jewellery retailer competing against brands with far larger marketing budgets, where the website was the only place to establish craftsmanship before a customer ever visited in person.',
    challenge:
      'Jewellery is sold on trust and close attention to detail. A generic e-commerce theme would have made handmade pieces look mass-produced and interchangeable.',
    solution:
      'Slowed the pacing down deliberately — fewer products per screen, larger imagery, and editorial-style product presentation instead of a dense grid, so each piece reads as considered rather than inventoried.',
    designDecisions: [
      'Fewer products per screen, so each piece gets room to be looked at rather than scanned.',
      'Editorial-style product presentation in place of a dense e-commerce grid.',
      'Slower pacing throughout the site — confidence over speed.',
    ],
    technologies: ['React', 'Tailwind CSS', 'Framer Motion'],
    features: [
      { title: 'Editorial Product Display', desc: 'Each piece is presented with space and care, not crowded into a grid.' },
      { title: 'Large-Format Imagery', desc: 'Photography is given room to show craftsmanship and detail.' },
      { title: 'Responsive Design', desc: 'Layouts adapt without losing the slower, considered pacing on mobile.' },
      { title: 'Accessible Typography', desc: 'Legible, high-contrast type throughout — not just decorative serif headers.' },
    ],
    faqs: [
      {
        q: 'What problem did this project solve?',
        a: 'It gave a handmade jewellery brand a web presence that reads as considered and high-trust, instead of looking like a generic e-commerce theme.',
      },
      {
        q: 'Is it fully responsive?',
        a: 'Yes — the editorial pacing and large imagery are tuned separately for mobile so the experience doesn’t just shrink down awkwardly.',
      },
      {
        q: 'Can the client update content?',
        a: 'Depends on the chosen setup — a lightweight CMS can be wired in so new pieces can be added without touching code, if that’s a priority for the client.',
      },
      {
        q: 'Can more pages be added later?',
        a: 'Yes — the component system is built to extend, so new collections or pages slot into the existing structure.',
      },
    ],
  },
  {
    index: '03',
    name: 'Cafe Website',
    category: 'Hospitality — Cafe',
    quote: 'The goal wasn’t conversions in the e-commerce sense — it was making a first-time visitor feel like they already knew the place.',
    description:
      'A neighbourhood cafe that relied entirely on foot traffic and word of mouth, with no website at all before this project.',
    challenge:
      'The goal wasn’t conversions in the e-commerce sense — it was making a first-time visitor feel like they already knew the place before walking in.',
    solution:
      'Led with atmosphere over information: large photography of the space and menu items first, practical details (hours, location, menu) placed second but never hidden.',
    designDecisions: [
      'Atmosphere-led layout — photography of the space comes before any text.',
      'Practical details like hours, location, and menu are placed second, but never hidden.',
      'No homepage clutter — one clear path from landing to visiting.',
    ],
    technologies: ['React', 'Tailwind CSS', 'Framer Motion'],
    features: [
      { title: 'Atmosphere-First Layout', desc: 'Large photography of the space leads the experience, before any copy.' },
      { title: 'Clear Practical Details', desc: 'Hours, location, and menu are easy to find without digging.' },
      { title: 'Responsive Design', desc: 'Built to feel right on the phone screens most visitors actually use.' },
      { title: 'Fast, Lightweight Build', desc: 'No heavy plugins or bloated page-builder code underneath.' },
    ],
    faqs: [
      {
        q: 'What problem did this project solve?',
        a: 'It gave a cafe that relied entirely on foot traffic a first proper web presence — somewhere to point people before they ever walk in.',
      },
      {
        q: 'Is it fully responsive?',
        a: 'Yes — most visitors will find this site on a phone outside the cafe itself, so mobile was treated as the primary experience, not an afterthought.',
      },
      {
        q: 'Is SEO included?',
        a: 'Local-search basics — semantic structure, metadata, and fast load times — are part of the build by default.',
      },
      {
        q: 'Can it scale later?',
        a: 'Yes — an online ordering or reservation flow can be added later without rebuilding the existing site.',
      },
    ],
  },
]
