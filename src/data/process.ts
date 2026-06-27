import type { Feature } from '../types/content'

export const PHILOSOPHY_POINTS: string[] = [
  'The business',
  'The audience',
  'The goals',
  'What success actually looks like',
]

export type Stage = { index: string; title: string; tagline: string }

export const STAGES: Stage[] = [
  { index: '01', title: 'Discover', tagline: 'Understanding the goal before anything else.' },
  { index: '02', title: 'Research', tagline: 'Learning the landscape and the competition.' },
  { index: '03', title: 'Design', tagline: 'Shaping structure, typography, and tone.' },
  { index: '04', title: 'Build', tagline: 'Turning the design into a real, working site.' },
  { index: '05', title: 'Launch', tagline: 'Testing, deploying, and reviewing what shipped.' },
  { index: '06', title: 'Refine', tagline: 'Improving based on how it’s actually used.' },
]

export const STAGE_DETAILS: Feature[] = [
  { title: 'Discover', desc: 'Understanding the business, audience, and project goals.' },
  { title: 'Research', desc: 'Reviewing competitors, references, and opportunities.' },
  { title: 'Design', desc: 'Creating structure, typography, layout, and user experience.' },
  { title: 'Development', desc: 'Building a responsive, performant, production-ready website.' },
  { title: 'Launch', desc: 'Testing, deployment, optimisation, and final review.' },
  { title: 'Refine', desc: 'Small improvements based on real feedback after launch.' },
]

export const COMMUNICATION_POINTS: string[] = [
  'Regular progress updates',
  'Feedback at each milestone',
  'Clear communication throughout',
  'No surprises along the way',
]

export const AI_ACCELERATES: string[] = [
  'Research and exploration',
  'Repetitive technical tasks',
  'Rapid iteration on layout ideas',
]

export const ALWAYS_HUMAN: string[] = [
  'Strategy',
  'Creative direction',
  'Visual judgement',
  'User experience',
  'Final decisions',
]

export const TIMELINE_FACTORS: string[] = [
  'Project scope',
  'Complexity',
  'Feedback speed',
  'Content readiness',
]

export const AFTER_LAUNCH_POINTS: string[] = [
  'Small refinements',
  'A performance review',
  'Future improvements as the business grows',
  'Additional pages if needed',
]
