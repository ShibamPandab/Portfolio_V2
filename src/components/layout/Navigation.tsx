import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Container } from '../ui/Container'
import { cn } from '../../lib/utils'

const LINKS = [
  { label: 'About', href: '/#about' },
  { label: 'Work', href: '/#work' },
  { label: 'Projects', href: '/projects' },
  { label: 'Services', href: '/#services' },
  { label: 'Workflow', href: '/#workflow' },
  { label: 'Contact', href: '/#contact' },
]

export function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 border-b-2 transition-colors duration-300',
        scrolled ? 'border-ink bg-cream' : 'border-transparent bg-transparent',
      )}
    >
      <Container className="flex h-20 items-center justify-between">
        <Link to="/" className="font-display text-2xl italic tracking-tight">
          Shibam Pandab
        </Link>

        <nav className="hidden items-center gap-9 lg:flex">
          {LINKS.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className="eyebrow text-ink-soft transition-colors duration-300 hover:text-red"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <Link
          to="/#contact"
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
              {LINKS.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  onClick={() => setOpen(false)}
                  className="font-display text-3xl italic"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                to="/#contact"
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
