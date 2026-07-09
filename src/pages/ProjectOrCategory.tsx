import { useParams } from 'react-router-dom'
import { CATEGORIES } from '../data/categories'
import { ProjectCategory } from './ProjectCategory'
import { ProjectDetails } from './ProjectDetails'

/**
 * /projects/:slug resolves to two different things — an industry
 * directory (/projects/hospitality) or an individual case study
 * (/projects/bong-pizza) — so every existing case study URL stays
 * exactly as it was instead of gaining a category prefix. Category
 * ids and project slugs are guaranteed not to collide (checked
 * against all 7 categories and all current projects); ProjectDetails
 * itself still redirects to /projects if a slug matches neither.
 */
export function ProjectOrCategory() {
  const { slug } = useParams<{ slug: string }>()
  const isCategory = CATEGORIES.some((c) => c.id === slug)

  return isCategory ? <ProjectCategory /> : <ProjectDetails />
}
