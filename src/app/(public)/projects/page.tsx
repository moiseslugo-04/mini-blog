import ProjectCard from '@/features/projects/ProjectCard'
import { mockProjects } from '@/features/projects/mocks'
export default function ProjectPage() {
  return (
    <section className='w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col gap-12  '>
      <div className='text-center max-w-4xl mx-auto '>
        <h1 className='text-4xl md:text-6xl font-bold tracking-tight mb-6 text-primary'>
          My Projects
        </h1>
        <p className='text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed'>
          A collection of real-world projects where I explore modern
          technologies, UI patterns, and best practices.
        </p>
      </div>
      <div className='grid  lg:grid-cols-2 justify-items-center gap-8'>
        {mockProjects.map((project) => (
          <ProjectCard key={project.projectName} {...project} />
        ))}
      </div>
    </section>
  )
}
