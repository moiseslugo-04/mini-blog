import { Header } from '@/lib/features/projects/components/Header'
import ProjectCard from '@/lib/features/projects/components/ProjectCard'
import { skills } from '@/lib/utils/constants'
import { Button } from '@/ui/components/shadcn/button'
import { GhostIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function ProjectPage() {
  return (
    <section className='w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col gap-12  '>
      <Header />
      <div className='grid  gap-8 grid-cols-1 md:grid-cols-2  '>
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </section>
  )
}

{
  /*  
  
  
    <div
          className='flex flex-col   rounded-2xl bg-card border border-border
        transition-all duration-300 hover:-translate-y-2 hover:shadow-xl p-3'
        >
          <div className='w-full flex items-center flex-col lg:flex-row gap-6 mb-4'>
            <div className='relative  w-full   aspect-video rounded-lg overflow-hidden sm:p-2'>
              <Image
                src='/blog-picture.png'
                alt='Example project image'
                fill
                className='object-cover '
              />
            </div>

            <div className='flex flex-col w-full    '>
              <h2 className='text-primary text-center text-lg font-semibold mb-2'>
                Project Name
              </h2>

              <p className=' max-w-[60ch] text-sm leading-[1.6] text-muted-foreground'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque,
                incidunt esse! Magni, saepe ullam libero cupiditate repellendus
                dolores quisquam dicta voluptatibus odit vitae reprehenderit.
              </p>
            </div>
          </div>

          <div className='flex gap-2 flex-wrap my-3 justify-center items-center'>
            {skills.slice(7).map((skill) => {
              return (
                <div
                  className='border-gray-500 flex  gap-2 items-center border rounded-sm px-2 py-1'
                  key={skill.name}
                >
                  <Image
                    src={`/icons/${skill.icon}.svg`}
                    alt='test'
                    width={20}
                    height={20}
                  />
                  <span>{skill.name}</span>
                </div>
              )
            })}
          </div>
          <div className=' justify-between  flex lg:justify-center  lg:gap-4 px-20 items-center '>
            <Link
              className='underline text-blue-500'
              href={'https://www.gechis.com/'}
            >
              View
            </Link>
            <Button>Details {'>'}</Button>
          </div>
        </div>
  
  
  
  
  
  
  
  
  222-------------------------
  
  
  
  
  
  <div className='w-[80%]! rounded-2xl border border-border bg-card '>
                  <div className='text-center mb-6'>
                    <h2 className='text-primary text-2xl font-bold mb-2'>
                      Awesome Web App
                    </h2>
                    <p className='text-muted-foreground text-sm'>
                      A web interface web application to enhance productivity,
                      featuring Next.js, React, TypeScript, and Pragma.
                    </p>
                  </div>
                  <div className='mb-6'>
                    <h3 className='text-lg font-semibold mb-3 text-primary'>
                      Project Overview
                    </h3>
                    <p className='text-muted-foreground text-sm leading-relaxed'>
                      This web application is designed to enhance productivity
                      and streamline workflows using Next.js for the frontend,
                      React for UI components, TypeScript for strong typing, and
                      Pragma for querying the database with a modern, modular,
                      and scalable codebase.
                    </p>
                  </div>

                  <div className='mb-8'>
                    <h3 className='text-lg font-semibold mb-3 text-primary'>
                      Technologies & Tools
                    </h3>
                    <div className='space-y-2 text-sm'>
                      {[
                        {
                          num: 1,
                          name: 'Next.js',
                          desc: 'A React framework for server-side rendering and static site generation',
                        },
                        {
                          num: 2,
                          name: 'React',
                          desc: 'A JavaScript library for building user interfaces',
                        },
                        {
                          num: 3,
                          name: 'TypeScript',
                          desc: 'A typed superset of JavaScript that compiles to plain JavaScript',
                        },
                        {
                          num: 4,
                          name: 'Pragma',
                          desc: 'A code-generation tool for Node.js and TypeScript',
                        },
                      ].map((item) => (
                        <div key={item.num} className='flex'>
                          <span className='w-6 font-bold mr-2'>
                            {item.num}.
                          </span>
                          <span>
                            <strong>{item.name}:</strong> {item.desc}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className='flex justify-between gap-4 pt-4 border-t border-border'>
                    <Link
                      href={'/'}
                      className='inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors text-sm'
                    >
                      <GhostIcon size={20} />
                      View Repository
                    </Link>
                  </div>
                </div> */
}
