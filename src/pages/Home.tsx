import { useEffect } from 'react'
import { Hero } from '../components/sections/Hero'
import { EditorialStatement } from '../components/sections/EditorialStatement'
import { About } from '../components/sections/About'
import { Work } from '../components/sections/Work'
import { Philosophy } from '../components/sections/Philosophy'
import { MiniProcess } from '../components/sections/MiniProcess'
import { Availability } from '../components/sections/Availability'
import { FinalCTA } from '../components/sections/FinalCTA'
import { useScrollToHash } from '../hooks/useScrollToHash'

export function Home() {
  useScrollToHash()

  useEffect(() => {
    document.title = 'Shibam Pandab — Frontend Developer & Digital Experience Designer'
  }, [])

  return (
    <>
      <Hero />
      <EditorialStatement />
      <About />
      <Work />
      <Philosophy />
      <MiniProcess />
      <Availability />
      <FinalCTA />
    </>
  )
}
