import { ProjectCard } from '@/components/ProjectCard'
import { getProjects } from '@/lib/projects'

export default function ProjectsPage() {
  const projects = getProjects()

  return (
    <main className="min-h-screen">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Projects</h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-12 max-w-2xl">
          A collection of full-stack applications, AI/ML systems, and developer tools.
          Each project is deployed and available for exploration.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </main>
  )
}
