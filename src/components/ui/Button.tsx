import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { cn } from '../../lib/utils'

type ButtonProps = {
  children: ReactNode
  href?: string
  /** Internal route — renders a react-router Link for SPA navigation instead of a full page load */
  to?: string
  onClick?: () => void
  variant?: 'primary' | 'secondary'
  className?: string
}

export function Button({
  children,
  href,
  to,
  onClick,
  variant = 'primary',
  className,
}: ButtonProps) {
  const base =
    'group relative inline-flex items-center gap-2 font-sans text-sm font-medium tracking-wide uppercase transition-colors duration-300'

  const styles =
    variant === 'primary'
      ? cn(
          base,
          'border-2 border-ink bg-ink px-7 py-3.5 text-cream hover:bg-cream hover:text-ink',
        )
      : cn(
          base,
          'border-b-2 border-ink/30 pb-1 text-ink hover:border-red',
        )

  const content = (
    <>
      <span>{children}</span>
      {variant === 'secondary' && (
        <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
          →
        </span>
      )}
    </>
  )

  if (to) {
    return (
      <Link to={to} className={cn(styles, className)}>
        {content}
      </Link>
    )
  }

  if (href) {
    return (
      <a href={href} className={cn(styles, className)}>
        {content}
      </a>
    )
  }

  return (
    <button type="button" onClick={onClick} className={cn(styles, className)}>
      {content}
    </button>
  )
}
