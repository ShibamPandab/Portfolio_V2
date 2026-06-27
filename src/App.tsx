import { Route, Routes } from 'react-router-dom'
import { Navigation } from './components/layout/Navigation'
import { Home } from './pages/Home'
import { Projects } from './pages/Projects'
import { ProjectCaseStudy } from './pages/ProjectCaseStudy'

function App() {
  return (
    <>
      <div className="grain-overlay" aria-hidden="true" />
      <Navigation />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:slug" element={<ProjectCaseStudy />} />
        </Routes>
      </main>
    </>
  )
}

export default App
