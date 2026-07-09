import { Suspense, lazy, useEffect } from 'react'
import { Navigate, Route, Routes, useLocation } from 'react-router-dom'
import { Navigation } from './components/layout/Navigation'
import { Footer } from './components/layout/Footer'

// Route-level code splitting — each page ships only when visited.
const Home = lazy(() => import('./pages/Home').then((m) => ({ default: m.Home })))
const Projects = lazy(() => import('./pages/Projects').then((m) => ({ default: m.Projects })))
// /projects/:slug resolves to either a category directory or a case
// study — see ProjectOrCategory for why this stays one dynamic route.
const ProjectOrCategory = lazy(() =>
  import('./pages/ProjectOrCategory').then((m) => ({ default: m.ProjectOrCategory })),
)
const Services = lazy(() => import('./pages/Services').then((m) => ({ default: m.Services })))
const Process = lazy(() => import('./pages/Process').then((m) => ({ default: m.Process })))
const Contact = lazy(() => import('./pages/Contact').then((m) => ({ default: m.Contact })))

function App() {
  const location = useLocation()

  useEffect(() => {
    if (!location.hash) window.scrollTo(0, 0)
  }, [location.pathname, location.hash])

  return (
    <>
      <div className="grain-overlay" aria-hidden="true" />
      <Navigation />
      <main>
        <Suspense fallback={null}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/:slug" element={<ProjectOrCategory />} />
            <Route path="/services" element={<Services />} />
            <Route path="/process" element={<Process />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </>
  )
}

export default App
