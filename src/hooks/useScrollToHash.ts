import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

/** Scrolls to an in-page anchor (e.g. /#work) after route changes settle. */
export function useScrollToHash() {
  const { hash } = useLocation()

  useEffect(() => {
    if (!hash) return
    const el = document.querySelector(hash)
    if (el) {
      requestAnimationFrame(() => el.scrollIntoView({ behavior: 'smooth' }))
    }
  }, [hash])
}
