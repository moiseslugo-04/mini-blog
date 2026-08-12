import Image from 'next/image'
import Link from 'next/link'
import { Github, ExternalLink } from 'lucide-react'
interface ProjectOverviewPros {
  imageUrl: string
  projectName: string
  description: string
  liveDemoUrl: string
  repoUrl: string
}
export function ProjectOverview(props: ProjectOverviewPros) {
  const { imageUrl, repoUrl, liveDemoUrl, description, projectName } = props

  return (
    <section id='overview' className='scroll-mt-20 space-y-8'>
      {/* Project image */}
      <div className='relative aspect-video w-full overflow-hidden rounded-2xl border bg-muted shadow-sm'>
        <Image
          fill
          src={imageUrl ?? '/projectPlaceholder.png'}
          alt={`${projectName} project image`}
          className='object-cover object-top'
          priority
        />
      </div>

      {/* Project information */}
      <div className='max-w-3xl space-y-5'>
        <div className='space-y-3'>
          <p className='text-sm font-medium uppercase tracking-wider text-muted-foreground'>
            Project
          </p>

          <h1 className='text-3xl font-bold tracking-tight md:text-4xl'>
            {projectName}
          </h1>

          <p className='text-base leading-7 text-muted-foreground md:text-lg'>
            {description}
          </p>
        </div>

        {/* Actions */}
        <div className='flex flex-wrap gap-3'>
          {liveDemoUrl && (
            <Link
              href={liveDemoUrl}
              target='_blank'
              rel='noopener noreferrer'
              className='inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-md'
            >
              View Live Demo
              <ExternalLink className='size-4' />
            </Link>
          )}

          {repoUrl && (
            <Link
              href={repoUrl}
              target='_blank'
              rel='noopener noreferrer'
              className='inline-flex items-center gap-2 rounded-lg border bg-background px-4 py-2.5 text-sm font-medium transition-colors hover:bg-muted'
            >
              <Github className='size-4' />
              View Repository
            </Link>
          )}
        </div>
      </div>
    </section>
  )
}
