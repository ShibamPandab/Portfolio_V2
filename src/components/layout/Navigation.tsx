import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Link, useLocation } from 'react-router-dom'
import { Container } from '../ui/Container'
import { NAV_LINKS } from '../../constants/nav'
import { cn } from '../../lib/utils'

export function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 border-b-2 transition-colors duration-300',
        scrolled || pathname !== '/' ? 'border-ink bg-cream' : 'border-transparent bg-transparent',
      )}
    >
      <Container className="flex h-20 items-center justify-between">
        <Link to="/" className="font-display text-2xl italic tracking-tight">
          Shibam Pandab
        </Link>

        <nav className="hidden items-center gap-9 lg:flex">
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.to || pathname.startsWith(`${link.to}/`)
            return (
              <Link
                key={link.to}
                to={link.to}
                aria-current={isActive ? 'page' : undefined}
                className={cn(
                  'eyebrow transition-colors duration-300 hover:text-red',
                  isActive ? 'text-red' : 'text-ink-soft',
                )}
              >
                {link.label}
              </Link>
            )
          })}
        </nav>

        <Link
          to="/contact"
          className="hidden border-2 border-ink px-5 py-2.5 eyebrow transition-colors duration-300 hover:bg-ink hover:text-cream lg:inline-block"
        >
          Start a Project
        </Link>

        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex flex-col gap-1.5 lg:hidden"
        >
          <span
            className={cn(
              'block h-0.5 w-7 bg-ink transition-transform duration-300',
              open && 'translate-y-[3.5px] rotate-45',
            )}
          />
          <span
            className={cn(
              'block h-0.5 w-7 bg-ink transition-transform duration-300',
              open && '-translate-y-[3.5px] -rotate-45',
            )}
          />
        </button>
      </Container>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t-2 border-ink bg-cream lg:hidden"
          >
            <Container className="flex flex-col gap-6 py-8">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setOpen(false)}
                  className="font-display text-3xl italic"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                to="/contact"
                onClick={() => setOpen(false)}
                className="eyebrow mt-2 inline-block w-fit border-2 border-ink px-5 py-3"
              >
                Start a Project
              </Link>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
