import { Navigation } from './components/layout/Navigation'
import { Hero } from './components/sections/Hero'
import { About } from './components/sections/About'
import { Work } from './components/sections/Work'

function App() {
  return (
    <>
      <div className="grain-overlay" aria-hidden="true" />
      <Navigation />
      <main>
        <Hero />
        <About />
        <Work />
      </main>
    </>
  )
}

export default App
