import { notFound } from 'next/navigation'
import Link from 'next/link'
import { getProject, getProjects } from '@/lib/projects'
import { ExternalLink, Github } from 'lucide-react'

export async function generateStaticParams() {
  const projects = getProjects()
  return projects.map(project => ({
    id: project.id,
  }))
}

export default function ProjectPage({ params }: { params: { id: string } }) {
  const project = getProject(params.id)

  if (!project) {
    notFound()
  }

  return (
    <main className="min-h-screen">
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        {/* Back link */}
        <Link
          href="/projects"
          className="text-primary-600 hover:text-primary-700 mb-8 inline-block"
        >
          ← Back to Projects
        </Link>

        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{project.name}</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">
            {project.tagline}
          </p>

          {/* Links */}
          <div className="flex gap-4">
            {project.links.live && (
              <a
                href={project.links.live}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition"
              >
                <ExternalLink size={20} />
                Live Demo
              </a>
            )}
            {project.links.github && (
              <a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 border border-gray-300 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition"
              >
                <Github size={20} />
                View Code
              </a>
            )}
          </div>
        </div>

        {/* Description */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">About</h2>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            {project.description}
          </p>
        </section>

        {/* Highlights */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Key Features</h2>
          <ul className="space-y-3">
            {project.highlights.map((highlight, index) => (
              <li key={index} className="flex items-start">
                <span className="text-primary-600 mr-2">▸</span>
                <span className="text-gray-700 dark:text-gray-300">{highlight}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Tech Stack */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Tech Stack</h2>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map(tech => (
              <span
                key={tech}
                className="px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-full text-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </section>

        {/* Categories */}
        <section>
          <h2 className="text-2xl font-bold mb-4">Categories</h2>
          <div className="flex flex-wrap gap-2">
            {project.categories.map(category => (
              <span
                key={category}
                className="px-4 py-2 border border-primary-300 dark:border-primary-700 text-primary-700 dark:text-primary-300 rounded-full text-sm"
              >
                {category}
              </span>
            ))}
          </div>
        </section>
      </div>
    </main>
  )
}
