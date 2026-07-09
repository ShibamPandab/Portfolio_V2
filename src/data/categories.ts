export type CategoryId =
  | 'hospitality'
  | 'healthcare'
  | 'technology'
  | 'professional-services'
  | 'luxury-commerce'
  | 'education'
  | 'creative-portfolio'

export type Category = {
  id: CategoryId
  /** Short form used in eyebrows, nav, and category tiles. */
  label: string
  /** One line — sits directly under the label on the /projects directory. */
  tagline: string
  /** The editorial paragraph at the top of /projects/{id}. */
  intro: string
}

/**
 * The industry taxonomy for /projects. Adding a category here makes
 * it appear in "Browse by Industry" automatically — but an empty
 * category (zero matching projects) still renders as a live link, so
 * only add one once a project actually belongs to it.
 */
export const CATEGORIES: Category[] = [
  {
    id: 'hospitality',
    label: 'Hospitality Experiences',
    tagline: 'Restaurants, cafés, and coffee — where atmosphere sells before the menu does.',
    intro:
      'Hospitality is sold on a feeling before it’s sold on a menu. These sites lead with atmosphere, photography, and pacing — the site has to make a first-time visitor feel like they already know the place before they walk in.',
  },
  {
    id: 'healthcare',
    label: 'Healthcare & Wellness',
    tagline: 'Clinics and wellness spaces, built to read as calm and trustworthy on sight.',
    intro:
      'In healthcare and wellness, a site that looks unprofessional reads as a signal about the care itself. These builds prioritize clarity and trust signals over decoration — the goal is reassurance, not persuasion.',
  },
  {
    id: 'technology',
    label: 'Technology & AI',
    tagline: 'SaaS products and internal tools, where the interface is the product.',
    intro:
      'For software products, the interface isn’t marketing around the product — it is the product. These builds range from public SaaS landing pages to internal business tools, each judged on clarity and information hierarchy first.',
  },
  {
    id: 'professional-services',
    label: 'Professional Services',
    tagline: 'Studios and firms whose work has to speak louder than the website around it.',
    intro:
      'Professional practices — architecture, studios, agencies — sell judgment and craft. The website’s job is restraint: to frame the work without competing with it.',
  },
  {
    id: 'luxury-commerce',
    label: 'Luxury & Curated Commerce',
    tagline: 'Fashion and curated retail, where restraint reads as confidence.',
    intro:
      'Curated and luxury commerce is crowded with near-identical templates. Standing out usually means resisting the urge to add more — more banners, more badges, more promotional noise — and letting photography and editing do the persuading.',
  },
  {
    id: 'education',
    label: 'Education Platforms',
    tagline: 'Coaching centres and academies, speaking to students and parents at once.',
    intro:
      'Education sites usually have two audiences reading the same page differently — students evaluating for themselves, parents evaluating for outcomes and trust. The structure has to serve both without splitting into two experiences.',
  },
  {
    id: 'creative-portfolio',
    label: 'Creative & Portfolio Brands',
    tagline: 'Personal and studio portfolios, where the work has to stay the focus.',
    intro:
      'Portfolio-format sites for an individual practice or creative discipline. The brief is usually the same regardless of medium: get out of the way of the actual work.',
  },
]
