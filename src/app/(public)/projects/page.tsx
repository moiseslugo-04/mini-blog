import { Header } from '@features/projects/components/Header'
import ProjectCard from '@features/projects/components/ProjectCard'
export default function ProjectPage() {
  return (
    <section className='w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col gap-12  '>
      <Header />
      <div className='grid  gap-8 grid-cols-1 md:grid-cols-2  justify-items-center'>
        <ProjectCard />
      </div>
    </section>
  )
}
