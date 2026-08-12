import { ExternalLink, Github, X, CheckCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
interface ProjectDetailsProps {
  open: boolean
  toggleOpen: () => void
  technologies: {
    name: string
    description?: string
  }[]
  liveDemoUrl: string
  repoUrl: string
  projectName: string
  details: string
}

export function ProjectDetails({
  open,
  toggleOpen,
  technologies,
  liveDemoUrl,
  repoUrl,
  projectName,
  details,
}: ProjectDetailsProps) {
  return (
    <>
      {open && (
        <>
          {/* ================= DESKTOP DETAILS ================= */}
          <aside
            className='
          hidden md:block fixed top-6 right-6 bottom-6 w-140
          bg-zinc-900 text-white
          rounded-2xl shadow-2xl z-50
          border border-white/10
          overflow-hidden pb-10
        '
          >
            <header className='flex items-center justify-between p-4 border-b border-white/10'>
              <h3 className='text-2xl font-bold leading-snug line-clamp-2'>
                {projectName}
              </h3>
              <button onClick={toggleOpen} aria-label='Close'>
                <X />
              </button>
            </header>

            <div className='h-full overflow-y-auto px-6 py-6 space-y-8'>
              {/* ABOUT */}
              <section className='space-y-3'>
                <h2 className='font-semibold'>About the project</h2>
                <p className='text-sm text-zinc-400 leading-relaxed'>
                  {details}
                </p>

                <div className='flex flex-wrap gap-2'>
                  {technologies.map((tech) => (
                    <span
                      key={tech.name}
                      className='px-3 py-1 text-xs rounded-full bg-white/5 border border-white/10 text-zinc-200'
                    >
                      {tech.name}
                    </span>
                  ))}
                </div>
              </section>

              <div className='h-px bg-linear-to-r from-transparent via-white/10 to-transparent' />

              {/* TECHNOLOGIES */}
              <section className='space-y-4'>
                <h4 className='text-sm font-semibold uppercase tracking-wide text-zinc-400'>
                  Technologies & Tools
                </h4>

                <ul className='space-y-4'>
                  {technologies.map((tech) => (
                    <li
                      key={tech.name}
                      className='flex gap-4 p-3 rounded-xl bg-white/3 border border-white/10'
                    >
                      <CheckCircle className='h-5 w-5 text-emerald-400 mt-1' />
                      <div>
                        <p className='font-medium text-white'>{tech.name}</p>
                        {tech.description && (
                          <p className='text-sm text-zinc-400'>
                            {tech.description}
                          </p>
                        )}
                      </div>
                    </li>
                  ))}
                </ul>
              </section>

              <div className='h-px bg-linear-to-r from-transparent via-white/10 to-transparent' />

              {/* ACTIONS */}
              <section className='space-y-3 pb-10'>
                <Button
                  asChild
                  className='w-full bg-linear-to-r from-blue-500 to-indigo-500'
                >
                  <a
                    href={liveDemoUrl}
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <ExternalLink className='mr-2 h-4 w-4' />
                    View Live Project
                  </a>
                </Button>

                <Button
                  asChild
                  variant='outline'
                  className='w-full border-white/20 text-white hover:bg-white/5'
                >
                  <a href={repoUrl} target='_blank' rel='noopener noreferrer'>
                    <Github className='mr-2 h-4 w-4' />
                    View Repository
                  </a>
                </Button>
              </section>
            </div>
          </aside>

          {/* ================= MOBILE DETAILS ================= */}
          <div className='fixed md:hidden inset-0 z-50 bg-linear-to-b from-zinc-900 to-zinc-950 text-white overflow-y-auto pb-10'>
            <header className='sticky top-0 z-10 p-4 flex justify-between items-center bg-zinc-900/80 backdrop-blur border-b border-white/10'>
              <div>
                <h3 className='text-2xl font-bold leading-snug line-clamp-2'>
                  {projectName}
                </h3>
                <p className='text-xs text-zinc-400'>Project details</p>
              </div>
              <button onClick={toggleOpen} aria-label='Close'>
                <X />
              </button>
            </header>

            <div className='px-5 py-6 space-y-8'>
              <section className='space-y-4'>
                <h2 className='font-semibold'>About the project</h2>
                <p className='text-sm text-zinc-400 leading-relaxed'>
                  {details}
                </p>

                <div className='flex flex-wrap gap-2'>
                  {technologies.map((tech) => (
                    <span
                      key={tech.name}
                      className='px-3 py-1 text-xs rounded-full bg-white/5 border border-white/10'
                    >
                      {tech.name}
                    </span>
                  ))}
                </div>
              </section>

              <section className='space-y-4'>
                <h4 className='text-xs uppercase tracking-wide text-zinc-500'>
                  Technologies
                </h4>

                <ul className='space-y-3'>
                  {technologies.map((tech) => (
                    <li
                      key={tech.name}
                      className='p-4 rounded-xl bg-white/4 border border-white/10'
                    >
                      <p className='font-medium'>{tech.name}</p>
                      {tech.description && (
                        <p className='text-sm text-zinc-400 mt-1'>
                          {tech.description}
                        </p>
                      )}
                    </li>
                  ))}
                </ul>
              </section>

              <section className='space-y-3 pt-4'>
                <Button
                  asChild
                  className='w-full bg-linear-to-r from-blue-500 to-indigo-500'
                >
                  <a
                    href={liveDemoUrl}
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    Live Demo
                  </a>
                </Button>
                <Button
                  asChild
                  variant='outline'
                  className='w-full bg-foreground border-none'
                >
                  <a href={repoUrl} target='_blank' rel='noopener noreferrer'>
                    <Github className='mr-2 h-4 w-4' />
                    View Repository
                  </a>
                </Button>
              </section>
            </div>
          </div>
        </>
      )}
    </>
  )
}
