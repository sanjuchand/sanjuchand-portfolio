import Link from 'next/link'
import { ExternalLink, Github } from 'lucide-react'
import type { Project } from '@/lib/projects'

interface ProjectCardProps {
  project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="border border-gray-200 dark:border-gray-800 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
      {/* Thumbnail placeholder */}
      <div className="aspect-video bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center">
        <span className="text-white text-2xl font-bold">{project.name[0]}</span>
      </div>

      <div className="p-6">
        {/* Header */}
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-xl font-bold">{project.name}</h3>
          <span className={`text-xs px-2 py-1 rounded ${
            project.status === 'production'
              ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
              : project.status === 'beta'
              ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200'
              : 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200'
          }`}>
            {project.status}
          </span>
        </div>

        {/* Tagline */}
        <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">
          {project.tagline}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.techStack.slice(0, 3).map(tech => (
            <span
              key={tech}
              className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded"
            >
              {tech}
            </span>
          ))}
          {project.techStack.length > 3 && (
            <span className="text-xs px-2 py-1 text-gray-500">
              +{project.techStack.length - 3}
            </span>
          )}
        </div>

        {/* Links */}
        <div className="flex gap-3">
          <Link
            href={`/projects/${project.id}`}
            className="flex-1 text-center px-4 py-2 bg-primary-600 text-white rounded hover:bg-primary-700 transition"
          >
            Learn More
          </Link>
          {project.links.live && (
            <a
              href={project.links.live}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 border border-gray-300 dark:border-gray-700 rounded hover:bg-gray-50 dark:hover:bg-gray-800 transition"
              title="Live Demo"
            >
              <ExternalLink size={20} />
            </a>
          )}
          {project.links.github && (
            <a
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 border border-gray-300 dark:border-gray-700 rounded hover:bg-gray-50 dark:hover:bg-gray-800 transition"
              title="View Code"
            >
              <Github size={20} />
            </a>
          )}
        </div>
      </div>
    </div>
  )
}
