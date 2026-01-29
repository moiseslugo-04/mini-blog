'use client'

import { useState, useEffect } from 'react'
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from '@/shared/ui/card'
import { Button } from '@/shared/ui/button'
import { Badge } from '@/shared/ui/badge'
import { cn } from '@/lib/utils'
import { ProjectDetails } from './ProjectDetails'

interface ProjectCardProps {
  projectName?: string
  description?: string
  imageUrl?: string
  technologies?: {
    name: string
    description?: string
  }[]
  liveDemoUrl?: string
  repoUrl?: string
  className?: string
  details?: string
}

export default function ProjectCard({
  projectName = 'Gechis E-commerce',
  description = 'Gechis is a modern e-commerce web application focused on performance, scalability, and a clean user experience. It includes product listings, category navigation, and a solid frontend architecture built with modern tools.',
  details = `This project was built with a real-world market mindset. My goal was not just to create a demo, but to develop an e-commerce application that reflects how modern products are structured and built in production.

As a frontend developer, I focused on clean UI, scalable architecture, and good user experience, using modern tools like Next.js, React, and Tailwind CSS.

This is also a full-stack project, where I practiced the integration between frontend and backend, working with data modeling, API communication, and real application flows. Through this project, I aimed to demonstrate my technical skills, decision-making, and understanding of how real products are built.`,
  imageUrl = '/gechis.png',
  technologies = [
    {
      name: 'Next.js',
      description:
        'Framework used for routing, server components, and performance optimization.',
    },
    {
      name: 'React',
      description:
        'Component-based UI development for a scalable and maintainable frontend.',
    },
    {
      name: 'TypeScript',
      description:
        'Strong typing to improve code quality and developer experience.',
    },
    {
      name: 'Tailwind CSS',
      description:
        'Utility-first CSS framework for building responsive and consistent UI.',
    },
    {
      name: 'Prisma',
      description: 'ORM used for database access and data modeling.',
    },
  ],
  liveDemoUrl = 'https://www.gechis.com/',
  repoUrl = 'https://github.com/moiseslugo-04/nextjs-ecommerce',
  className,
}: ProjectCardProps) {
  const [open, setOpen] = useState(false)

  return (
    <>
      {/* ================= CARD ================= */}
      <Card
        className={cn(
          'relative max-w-xl overflow-hidden',
          'bg-card text-card-foreground border border-border',
          'transition-transform hover:scale-[1.02]',
          className
        )}
      >
        {/* IMAGE */}
        <div className='relative aspect-video overflow-hidden'>
          <img
            src={imageUrl}
            alt={projectName}
            className='h-full w-full object-cover object-top'
          />

          {/* Overlay compatible */}
          <div className='absolute inset-0 bg-linear-to-t from-background/80 via-background/30 to-transparent' />
        </div>

        <CardHeader>
          <CardTitle className='text-2xl'>{projectName}</CardTitle>

          <CardDescription className='text-muted-foreground'>
            {description}
          </CardDescription>

          <div className='flex flex-wrap gap-2 mt-4'>
            {technologies.map((tech) => (
              <Badge
                key={tech.name}
                variant='outline'
                className='border-border text-muted-foreground'
              >
                {tech.name}
              </Badge>
            ))}
          </div>
        </CardHeader>

        <CardContent className='flex gap-3'>
          <Button onClick={() => setOpen(true)}>Details</Button>

          <Button asChild variant='outline'>
            <a href={liveDemoUrl} target='_blank'>
              View
            </a>
          </Button>
        </CardContent>
      </Card>

      {/* ================= OVERLAY ================= */}
      {open && (
        <div
          className='fixed inset-0 z-40 bg-background/60 backdrop-blur-sm'
          onClick={() => setOpen(false)}
        />
      )}

      <ProjectDetails
        open={open}
        details={details}
        toggleOpen={() => setOpen(false)}
        technologies={technologies}
        liveDemoUrl={liveDemoUrl}
        repoUrl={repoUrl}
        projectName={projectName}
      />
    </>
  )
}
