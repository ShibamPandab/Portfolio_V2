import { EditorialBlock } from './EditorialBlock'

export function ChallengeBlock({ text }: { text: string }) {
  return <EditorialBlock label="Challenge" text={text} />
}
