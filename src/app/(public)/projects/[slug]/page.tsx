import { SidebarTrigger } from '@/components/ui/sidebar'
import { mockProjects } from '@/features/projects/mocks'
import { ArrowLeft, Github, ExternalLink } from 'lucide-react'
import Link from 'next/link'
import { ProjectOverview } from '@/features/projects/ProjectOverview'
import { TechStack } from '@/features/projects/TechStack'
import { notFound } from 'next/navigation'
type RouteParams = {
  params: Promise<{ slug: string }>
}

export default async function ProjectDetails({ params }: RouteParams) {
  const { slug } = await params

  const project = mockProjects.find((p) => p.slug === slug)

  if (!project) return notFound()

  const {
    imageUrl,
    description,
    details,
    projectName,
    liveDemoUrl,
    repoUrl,
    technologies,
  } = project

  return (
    <>
      {/* Mobile header */}
      <header className='flex h-12 items-center border-b px-4 md:hidden'>
        <div className='flex w-full items-center justify-between'>
          <Link
            href='/projects'
            className='flex min-w-0 items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground'
          >
            <ArrowLeft className='size-4 shrink-0' />

            <span className='truncate'>{projectName}</span>
          </Link>

          <SidebarTrigger className='size-8 shrink-0' />
        </div>
      </header>

      {/* Main content */}
      <main className='mx-auto w-full max-w-5xl px-4 py-8 md:px-8 md:py-12'>
        {/* ================================= */}
        {/* OVERVIEW */}
        {/* ================================= */}
        <ProjectOverview
          imageUrl={imageUrl}
          repoUrl={repoUrl}
          liveDemoUrl={liveDemoUrl}
          description={description}
          projectName={projectName}
        />
        {/* ================================= */}
        {/* ABOUT */}
        {/* ================================= */}

        <section
          id='about'
          className='mt-20 max-w-3xl scroll-mt-20 space-y-5 border-t pt-10'
        >
          <div className='space-y-2'>
            <p className='text-sm font-medium uppercase tracking-wider text-muted-foreground'>
              About
            </p>

            <h2 className='text-2xl font-semibold tracking-tight md:text-3xl'>
              About this project
            </h2>
          </div>

          <div className='space-y-4'>
            {details.split('\n\n').map((paragraph, index) => (
              <p
                key={index}
                className='text-base leading-7 text-muted-foreground'
              >
                {paragraph}
              </p>
            ))}
          </div>
        </section>
        {/* ================================= */}
        {/* TECH STACK */}
        {/* ================================= */}
        <TechStack technologies={technologies} />

        {/* ================================= */}
        {/* PROJECT LINKS */}
        {/* ================================= */}

        <section id='links' className='mt-20 border-t pt-10'>
          <div className='mb-6 space-y-2'>
            <p className='text-sm font-medium uppercase tracking-wider text-muted-foreground'>
              Links
            </p>

            <h2 className='text-2xl font-semibold tracking-tight'>
              Explore the project
            </h2>
          </div>

          <div className='flex flex-wrap gap-3'>
            {liveDemoUrl && (
              <Link
                href={liveDemoUrl}
                target='_blank'
                rel='noopener noreferrer'
                className='inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground transition-all hover:bg-primary/90'
              >
                <ExternalLink className='size-4' />
                Live Demo
              </Link>
            )}

            {repoUrl && (
              <Link
                href={repoUrl}
                target='_blank'
                rel='noopener noreferrer'
                className='inline-flex items-center gap-2 rounded-lg border px-4 py-2.5 text-sm font-medium transition-colors hover:bg-muted'
              >
                <Github className='size-4' />
                GitHub Repository
              </Link>
            )}
          </div>
        </section>
      </main>
    </>
  )
}
