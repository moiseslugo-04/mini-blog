import { Code2, Layers3, Database, Workflow } from 'lucide-react'

type TechStackProps = { name: string; icon: string; description: string }[]
import Image from 'next/image'
export function TechStack({ technologies }: { technologies: TechStackProps }) {
  return (
    <section id='tech-stack' className='mt-20 scroll-mt-20 border-t pt-10'>
      <div className='mb-8 space-y-2'>
        <p className='text-sm font-medium uppercase tracking-wider text-muted-foreground'>
          Technologies
        </p>

        <h2 className='text-2xl font-semibold tracking-tight md:text-3xl'>
          Tech Stack
        </h2>

        <p className='max-w-2xl text-muted-foreground'>
          Technologies and tools used to build this project.
        </p>
      </div>

      <div className='grid gap-4 sm:grid-cols-2'>
        {technologies.map((technology) => {
          return (
            <article
              key={technology.name}
              className='group rounded-xl border bg-card p-5 transition-colors hover:bg-muted/50'
            >
              <div className='flex items-start gap-4'>
                <div className=' relative flex size-10  shrink-0 items-center justify-center rounded-lg border bg-background'>
                  <Image
                    src={technology.icon}
                    alt='Tech Icon Stack'
                    className='p-1'
                    fill
                  />
                </div>

                <div className='space-y-1.5'>
                  <h3 className='font-semibold'>{technology.name}</h3>

                  <p className='text-sm leading-6 text-muted-foreground'>
                    {technology.description}
                  </p>
                </div>
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}
