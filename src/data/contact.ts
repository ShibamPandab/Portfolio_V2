import type { FAQ } from '../types/content'

export const NEXT_STEPS: Array<{ title: string }> = [
  { title: 'You send an enquiry.' },
  { title: 'I review your project carefully.' },
  { title: 'If it feels like a good fit, we’ll discuss goals, timeline, and next steps.' },
  { title: 'You’ll receive a clear proposal and recommended approach.' },
]

export const PREFERRED_PROJECTS: string[] = [
  'Restaurant Websites',
  'Luxury Brands',
  'Portfolio Websites',
  'Creative Businesses',
  'Startups',
]

export const PROJECT_TYPE_OPTIONS: string[] = [
  ...PREFERRED_PROJECTS,
  'Something Else',
]

export const TIMELINE_OPTIONS: string[] = [
  'Flexible / not sure yet',
  '1–4 weeks',
  '1–3 months',
  '3+ months',
]

export const CONTACT_FAQ: FAQ[] = [
  {
    q: 'Do you work internationally?',
    a: 'Yes — the process is remote-first by default, with communication scheduled around your timezone.',
  },
  {
    q: 'Can we start with a discovery call?',
    a: 'Yes — a short call is often the easiest way to understand a project before anything is scoped in writing.',
  },
  {
    q: 'Can existing websites be redesigned?',
    a: 'Yes — a redesign is scoped the same way as a new build: understanding the business first, then deciding what should change.',
  },
  {
    q: 'Do you work with startups?',
    a: 'Yes — provided there’s a clear sense of what the site needs to do, even if the brand itself is still early.',
  },
  {
    q: 'Can additional features be added later?',
    a: 'Yes — every build is structured to extend, so new pages or functionality can be added without starting over.',
  },
]
