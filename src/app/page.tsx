import Link from 'next/link'
import { ProjectCard } from '@/components/ProjectCard'
import { getProjects } from '@/lib/projects'

export default function Home() {
  const projects = getProjects()
  const featuredProjects = projects.filter(p => p.featured)

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 md:py-32">
        <div className="max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-balance">
            Hi, I'm <span className="text-primary-600">Sanju Chand</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8">
            Full-stack developer building AI-powered applications and scalable systems.
            I specialize in Python, React, and modern cloud infrastructure.
          </p>
          <div className="flex gap-4">
            <Link
              href="/projects"
              className="px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition"
            >
              View Projects
            </Link>
            <Link
              href="/about"
              className="px-6 py-3 border border-gray-300 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition"
            >
              About Me
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
        <div className="mt-12 text-center">
          <Link
            href="/projects"
            className="text-primary-600 hover:text-primary-700 font-medium"
          >
            View all projects →
          </Link>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">Tech Stack</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {['Python', 'TypeScript', 'React', 'Next.js', 'FastAPI', 'PostgreSQL', 'Docker', 'GCP'].map(tech => (
            <div key={tech} className="p-6 border border-gray-200 dark:border-gray-800 rounded-lg text-center">
              <span className="font-medium">{tech}</span>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}
