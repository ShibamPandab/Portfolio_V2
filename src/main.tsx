import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import './index.css'
import App from './App.tsx'

// Let our own scroll-to-top-on-route-change logic be authoritative
// instead of the browser trying to restore a previous scroll offset.
if ('scrollRestoration' in window.history) {
  window.history.scrollRestoration = 'manual'
}

// index.html ships static title/description/canonical/OG/Twitter tags
// so crawlers that fetch raw HTML without running JS (most social share
// scrapers) still see real, complete metadata. react-helmet-async has no
// visibility into those tags — it only tracks ones it renders itself —
// so without this cleanup its route-specific tags would accumulate
// alongside the static ones instead of replacing them (duplicate
// <title>, duplicate og:*, etc). Clearing them first gives Helmet a
// clean slate the instant JS takes over.
document
  .querySelectorAll(
    'title, meta[name="description"], link[rel="canonical"], meta[property^="og:"], meta[name^="twitter:"]',
  )
  .forEach((el) => el.remove())

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </HelmetProvider>
  </StrictMode>,
)
