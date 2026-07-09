import { Hero } from '../components/sections/Hero'
import { EditorialStatement } from '../components/sections/EditorialStatement'
import { About } from '../components/sections/About'
import { Work } from '../components/sections/Work'
import { Philosophy } from '../components/sections/Philosophy'
import { MiniProcess } from '../components/sections/MiniProcess'
import { Availability } from '../components/sections/Availability'
import { FinalCTA } from '../components/sections/FinalCTA'
import { useScrollToHash } from '../hooks/useScrollToHash'
import { Seo } from '../components/seo/Seo'

export function Home() {
  useScrollToHash()

  return (
    <>
      <Seo
        title="Shibam Pandab — Frontend Developer & Digital Experience Designer"
        description="Shibam Pandab — Frontend Developer & Digital Experience Designer. I design and build premium websites for restaurants, boutiques, and brands that refuse to look ordinary online."
        path="/"
      />
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
