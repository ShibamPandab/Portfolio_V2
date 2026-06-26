import { Navigation } from './components/layout/Navigation'
import { Hero } from './components/sections/Hero'

function App() {
  return (
    <>
      <div className="grain-overlay" aria-hidden="true" />
      <Navigation />
      <main>
        <Hero />
      </main>
    </>
  )
}

export default App
