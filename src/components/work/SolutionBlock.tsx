import { EditorialBlock } from './EditorialBlock'

export function SolutionBlock({ text }: { text: string }) {
  return <EditorialBlock label="Solution" text={text} delay={0.06} />
}
