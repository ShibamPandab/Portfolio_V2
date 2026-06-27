import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { Hero } from '../components/sections/Hero'
import { About } from '../components/sections/About'
import { Work } from '../components/sections/Work'

export function Home() {
  const { hash } = useLocation()

  useEffect(() => {
    document.title = 'Shibam Pandab — Frontend Developer & Digital Experience Designer'

    if (hash) {
      const el = document.querySelector(hash)
      if (el) {
        // Wait a tick for layout/fonts to settle before measuring scroll position
        requestAnimationFrame(() => el.scrollIntoView({ behavior: 'smooth' }))
      }
    }
  }, [hash])

  return (
    <>
      <Hero />
      <About />
      <Work />
    </>
  )
}
