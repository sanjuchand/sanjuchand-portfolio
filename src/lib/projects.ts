import projectsConfig from '../../projects-config.json'

export interface Project {
  id: string
  name: string
  tagline: string
  description: string
  status: 'production' | 'beta' | 'development'
  featured: boolean
  techStack: string[]
  categories: string[]
  links: {
    github?: string
    live?: string
    demo?: string
  }
  deployment: {
    type: 'cloud-run' | 'vercel' | 'static' | 'self-hosted'
    subdomain?: string
    cost?: string
  }
  highlights: string[]
  thumbnail?: string
  images?: string[]
  caseStudyPath?: string
}

export function getProjects(): Project[] {
  return projectsConfig.projects as Project[]
}

export function getProject(id: string): Project | undefined {
  return projectsConfig.projects.find(p => p.id === id) as Project | undefined
}

export function getFeaturedProjects(): Project[] {
  return projectsConfig.projects.filter(p => p.featured) as Project[]
}

export function getProjectsByCategory(category: string): Project[] {
  return projectsConfig.projects.filter(p =>
    p.categories.includes(category)
  ) as Project[]
}
