import type { FAQ } from '../types/content'

export type Service = { title: string; desc: string }

export const SERVICES: Service[] = [
  { title: 'Restaurant Websites', desc: 'Menu-first, mobile-ready sites built to convert hungry visitors into orders or reservations.' },
  { title: 'Luxury Brand Websites', desc: 'Editorial, restrained design for brands where presentation is part of the product.' },
  { title: 'Portfolio Websites', desc: 'Considered, fast-loading sites that present creative or professional work on its own terms.' },
  { title: 'Business Websites', desc: 'A clear, trustworthy presence for service businesses that need to be found and believed.' },
  { title: 'Landing Pages', desc: 'Focused, single-purpose pages built around one goal and one call-to-action.' },
  { title: 'AI-Assisted Frontend Development', desc: 'Faster iteration without cutting craft — AI as a workflow advantage, not a shortcut.' },
]

export const DELIVERABLES: string[] = [
  'Responsive Website',
  'Production-Ready Code',
  'Performance Optimization',
  'Technical SEO',
  'GitHub Repository',
  'Deployment',
  'Documentation',
  'Basic Analytics Setup',
  '30-Day Support',
]

export const INDUSTRIES: string[] = [
  'Restaurants',
  'Cafés',
  'Luxury Retail',
  'Architecture',
  'Healthcare',
  'Education',
  'SaaS',
  'Personal Brands',
  'Startups',
]

export const ADD_ONS: Service[] = [
  { title: 'CMS Integration', desc: 'Edit content without ongoing developer involvement.' },
  { title: 'Booking System', desc: 'An appointment or reservation flow built into the site.' },
  { title: 'Google Analytics', desc: 'Visibility into how visitors actually use the site.' },
  { title: 'AI Chat Integration', desc: 'A conversational assistant for visitor questions.' },
  { title: 'Maintenance', desc: 'Ongoing technical upkeep after launch.' },
  { title: 'Content Updates', desc: 'Periodic content and copy refreshes.' },
  { title: 'Performance Audit', desc: 'A focused pass to catch regressions and slowdowns.' },
  { title: 'Additional Landing Pages', desc: 'New focused pages for specific campaigns or offers.' },
  { title: 'Email Automation', desc: 'Automated follow-ups for enquiries or bookings.' },
]

export const PRICING_PRINCIPLES: string[] = [
  'Every project is scoped individually — there are no fixed packages.',
  'Pricing depends on business goals, complexity, and timeline.',
  'After an initial conversation, you receive a tailored proposal.',
]

export const SERVICES_FAQ: FAQ[] = [
  {
    q: 'How long does a project take?',
    a: 'Timelines depend on scope — a single focused page moves faster than a multi-section business site. You’ll get a realistic timeline as part of the proposal, not a guess upfront.',
  },
  {
    q: 'Do you work internationally?',
    a: 'Yes — the process is remote-first by default, with communication scheduled around your timezone.',
  },
  {
    q: 'Do you redesign existing websites?',
    a: 'Yes — a redesign is scoped the same way as a new build: understanding the business first, then deciding what should change and what shouldn’t.',
  },
  {
    q: 'Can I request additional pages later?',
    a: 'Yes — the component structure is built to extend, so new pages or sections can be added without rebuilding the foundation.',
  },
  {
    q: 'Will I own the source code?',
    a: 'Yes — you receive full access to the GitHub repository as part of every project.',
  },
  {
    q: 'Do you provide maintenance?',
    a: 'It’s available as an optional add-on rather than bundled by default, so you’re only paying for ongoing support if you actually want it.',
  },
]
