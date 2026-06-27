import type { ReactNode } from 'react'
import { Eyebrow } from './Eyebrow'
import { cn } from '../../lib/utils'

/**
 * Asymmetric 3:9 label/content split, used for every chapter of the
 * About story. `flip` mirrors which side carries the label — this is
 * what creates the alternating rhythm down the page instead of a
 * straight left-aligned stack.
 */
export function Chapter({
  index,
  label,
  flip = false,
  children,
  className,
}: {
  index: string
  label: string
  flip?: boolean
  children: ReactNode
  className?: string
}) {
  return (
    <div className={cn('grid grid-cols-12 gap-x-8', className)}>
      <div
        className={cn(
          'col-span-12 md:col-span-3',
          flip ? 'md:col-start-10' : 'md:col-start-1',
        )}
      >
        <Eyebrow index={index} label={label} />
      </div>
      <div
        className={cn(
          'col-span-12 mt-6 md:col-span-9 md:mt-0',
          flip ? 'md:col-start-1 md:row-start-1' : 'md:col-start-4',
        )}
      >
        {children}
      </div>
    </div>
  )
}
