import { writeFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { PROJECTS } from '../src/data/projects'
import { SITE } from '../src/constants/nav'

/**
 * Generates public/sitemap.xml and public/robots.txt from the same
 * route sources the app itself renders — App.tsx's static routes
 * and the PROJECTS array — so a new project appended to
 * src/data/projects.ts appears in the sitemap on the next build
 * with zero manual edits here.
 *
 * Runs before every `dev` and `build` (see package.json scripts).
 * Vite serves public/ as-is in dev and copies it into dist/ during
 * build, so these files ship at the site root: /sitemap.xml and
 * /robots.txt.
 */

const SITE_URL = process.env.SITE_URL ?? SITE.url

type RouteEntry = {
  path: string
  changefreq: 'weekly' | 'monthly'
  priority: string
}

const STATIC_ROUTES: RouteEntry[] = [
  { path: '/', changefreq: 'weekly', priority: '1.0' },
  { path: '/projects', changefreq: 'weekly', priority: '0.8' },
  { path: '/services', changefreq: 'monthly', priority: '0.7' },
  { path: '/process', changefreq: 'monthly', priority: '0.7' },
  { path: '/contact', changefreq: 'monthly', priority: '0.7' },
]

const PROJECT_ROUTES: RouteEntry[] = PROJECTS.map((project) => ({
  path: `/projects/${project.slug}`,
  changefreq: 'monthly',
  priority: project.featured ? '0.7' : '0.6',
}))

const ALL_ROUTES = [...STATIC_ROUTES, ...PROJECT_ROUTES]
const today = new Date().toISOString().slice(0, 10)

function buildSitemap(): string {
  const urls = ALL_ROUTES.map(
    ({ path, changefreq, priority }) => `  <url>
    <loc>${SITE_URL}${path}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`,
  ).join('\n')

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`
}

function buildRobots(): string {
  return `User-agent: *
Allow: /

Sitemap: ${SITE_URL}/sitemap.xml
`
}

const publicDir = resolve(import.meta.dirname, '../public')
writeFileSync(resolve(publicDir, 'sitemap.xml'), buildSitemap())
writeFileSync(resolve(publicDir, 'robots.txt'), buildRobots())

console.log(`[generate-seo] sitemap.xml — ${ALL_ROUTES.length} routes (${STATIC_ROUTES.length} static + ${PROJECT_ROUTES.length} projects)`)
console.log(`[generate-seo] robots.txt — sitemap points to ${SITE_URL}/sitemap.xml`)
