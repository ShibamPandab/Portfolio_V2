export type Service = { title: string; desc: string }

/**
 * Placeholder content for the Services page scaffold. Replace with
 * real offerings, deliverables, and pricing philosophy before launch.
 */
export const SERVICES: Service[] = [
  { title: 'Website Design & Build', desc: 'End-to-end design and development for a single, focused site.' },
  { title: 'Brand-Led Web Presence', desc: 'Translating an existing brand identity into a considered website.' },
  { title: 'Ongoing Iteration', desc: 'Continued refinement after launch, as the business changes.' },
]

export const DELIVERABLES: string[] = [
  'A fully responsive, production-ready website',
  'Source code, handed over cleanly',
  'Basic SEO and performance fundamentals included',
]

export const PRICING_PHILOSOPHY =
  'Pricing depends on scope, not a fixed package — a single-page menu site and a multi-page catalogue aren’t the same engagement. Details coming soon.'

export const SERVICES_FAQ: Array<{ q: string; a: string }> = [
  { q: 'How is a project priced?', a: 'Scoped per project after an initial conversation — full details coming soon.' },
  { q: 'Do you work with international clients?', a: 'Yes — work is remote-first by default.' },
]
