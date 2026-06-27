import { Navigation } from './components/layout/Navigation'
import { Hero } from './components/sections/Hero'
import { About } from './components/sections/About'

function App() {
  return (
    <>
      <div className="grain-overlay" aria-hidden="true" />
      <Navigation />
      <main>
        <Hero />
        <About />
      </main>
    </>
  )
}

export default App
