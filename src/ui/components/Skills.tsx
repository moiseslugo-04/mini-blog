'use client'

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@ui/components/shadcn/tooltip'
import { ArrowRight } from 'lucide-react'
import { skills } from '@lib/utils/constants'
import Link from 'next/link'
import Image from 'next/image'
export function Skills() {
  return (
    <section className='flex w-100 min-w-full flex-col'>
      <div className='container max-w-6xl mx-auto px-4'>
        {/* Header */}
        <div className='text-center mb-12'>
          <h2 className='text-3xl md:text-4xl font-bold mb-4'>
            Skills & <span className='text-primary'>Expertise</span>
          </h2>
          <p className='text-muted-foreground max-w-2xl mx-auto'>
            Technologies and tools I use daily to build exceptional digital
            experiences
          </p>
        </div>

        <div className='mb-8'>
          <div className='relative max-w-5xl mx-auto'>
            <TooltipProvider delayDuration={100}>
              <div className='overflow-hidden'>
                <div className='flex gap-10 animate-scroll-slow'>
                  {[...skills, ...skills].map((skill, index) => (
                    <div
                      key={`${skill}-${index}`}
                      className='relative shrink-0'
                    >
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <div className='relative p-3 rounded-2xl bg-black/50 border border-primary hover:border-primary transition-all duration-300 shadow-sm hover:shadow-lg cursor-pointer'>
                            <div className='absolute inset-0 bg-linear-to-br from-primary/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity' />
                            <Image
                              width={8}
                              height={8}
                              src={`/icons/${skill.icon}.svg`}
                              alt={skill.name}
                              className='h-auto w-8 opacity-90 group-hover:opacity-100 transition-opacity'
                            />
                          </div>
                        </TooltipTrigger>
                        <TooltipContent
                          side='top'
                          className='min-w-25 bg-popover border border-border '
                        >
                          <div className='text-center'>
                            <div className='font-bold text-lg text-secondary'>
                              {skill.name}
                            </div>
                            <div className='text-xs text-muted-foreground'>
                              {skill.category}
                            </div>
                          </div>
                        </TooltipContent>
                      </Tooltip>
                    </div>
                  ))}
                </div>
              </div>
            </TooltipProvider>
          </div>
        </div>

        {/* CTA */}
        <div className='text-center mb-8'>
          <p className='text-lg text-muted mb-2'>
            Want to see these skills in action?
          </p>
          <Link
            href={'/projects'}
            className='inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-xl font-semibold hover:opacity-90 transition-opacity text-lg'
          >
            View My Projects
            <ArrowRight className='w-5 h-5' />
          </Link>
        </div>
      </div>
    </section>
  )
}
