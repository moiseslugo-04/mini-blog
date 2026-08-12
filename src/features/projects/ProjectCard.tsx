import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from '@components/ui/card'
import { Badge } from '@/components/ui/badge'
import Image from 'next/image'
import Link from 'next/link'
import { ExternalLink } from 'lucide-react'

interface ProjectCardProps {
  projectName?: string
  description?: string
  imageUrl?: string
  technologies?: {
    name: string
    icon: string
    description?: string
  }[]
  slug: string
  liveDemoUrl?: string
  repoUrl?: string
  className?: string
  details?: string
}
export default function ProjectCard(project: ProjectCardProps) {
  const {
    imageUrl,
    projectName,
    description,
    technologies,
    liveDemoUrl,
    slug,
  } = project
  return (
    <>
      {/* ================= CARD ================= */}
      <Card className='overflow-hidden'>
        <div className='flex flex-col sm:flex-row gap-6 p-5'>
          {/* IMAGE */}
          <div className='relative w-full aspect-video shrink-0 overflow-hidden rounded-xl sm:w-[45%] sm:aspect-auto'>
            <Image
              fill
              src={imageUrl ?? '/projectPlaceholder.png'}
              alt={projectName ?? 'Project Image'}
              className='object-cover object-top'
            />
          </div>

          {/* CONTENT */}
          <div className='flex min-w-0 flex-1 shrink-2 flex-col'>
            <CardHeader className='p-0'>
              <CardTitle className='text-lg'>{projectName}</CardTitle>

              <CardDescription className='mt-2 line-clamp-3'>
                {description}
              </CardDescription>

              <div className='mt-4 flex flex-wrap gap-2'>
                {technologies?.map((tech) => (
                  <Badge
                    key={tech.icon}
                    className='
                relative
                size-9
                rounded-md
                border-2
                border-muted
                bg-black/60
              '
                  >
                    <Image
                      src={tech.icon}
                      alt={tech.name}
                      fill
                      className='object-contain p-1'
                    />
                  </Badge>
                ))}
              </div>
            </CardHeader>

            <CardContent className='mt-auto flex gap-3 p-0 pt-5'>
              <Link
                href={`projects/${slug}`}
                className='
            rounded-md
            bg-primary
            px-4
            py-2
            text-sm
            text-foreground
            transition-colors
            hover:bg-primary/80
          '
              >
                View Details
              </Link>

              <Link
                href={liveDemoUrl ?? '/projects'}
                target='_blank'
                rel='noopener noreferrer'
                className='
            flex
            items-center
            gap-2
            rounded-md
            bg-primary/10
            px-4
            py-2
            text-sm
            text-foreground
            transition-colors
            hover:bg-primary/20
          '
              >
                Live Demo
                <ExternalLink className='size-4' />
              </Link>
            </CardContent>
          </div>
        </div>
      </Card>
    </>
  )
}
