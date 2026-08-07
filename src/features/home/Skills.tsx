'use client'

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider,
} from '@/components/ui/tooltip'
import { ArrowRight } from 'lucide-react'
import { skills } from '@lib/utils/constants'
import Link from 'next/link'
import Image from 'next/image'
import { useRef } from 'react'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@ui/carousel'
import Autoplay from 'embla-carousel-autoplay'
export function Skills() {
  const plugin = useRef(Autoplay({ delay: 3000, stopOnInteraction: false }))
  return (
    <section className='flex w-100 min-w-full flex-col'>
      <div className='container max-w-6xl mx-auto px-4'>
        {/* Header */}
        <div className='mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between'>
          <h2 className='text-3xl font-bold text-primary md:text-4xl'>
            Technologies
          </h2>

          <Link
            href='/projects'
            className='group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:-translate-y-1 hover:shadow-xl md:w-auto'
          >
            Explore Projects
            <ArrowRight className='h-5 w-5 transition-transform duration-300 group-hover:translate-x-1' />
          </Link>
        </div>
        <TooltipProvider>
          <div className='mb-6 overflow-hidden'>
            <Carousel
              plugins={[plugin.current]}
              className='w-full  flex max-w-5xl mx-auto'
              onMouseEnter={plugin.current.stop}
              onMouseLeave={plugin.current.reset}
            >
              <CarouselNext />

              <CarouselContent className='flex gap-5'>
                {[...skills, ...skills].map((skill, i) => (
                  <CarouselItem key={`${skill}-${i}`} className='basis-auto'>
                    <Tooltip>
                      <div key={`${skill}-${i}`}>
                        <TooltipTrigger asChild>
                          <div className='relative p-3 rounded-2xl bg-black/70 border border-primary hover:border-primary transition-all duration-300 shadow-sm hover:shadow-lg cursor-pointer'>
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
                      </div>
                    </Tooltip>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
            </Carousel>
          </div>
        </TooltipProvider>
      </div>
    </section>
  )
}
