import Link from 'next/link'
import { Zap, Sparkles, Target, DownloadIcon } from 'lucide-react'
import { Button } from '@/shared/ui/button'
export function TextSection() {
  return (
    <div className='lg:w-1/2 text-center lg:text-left space-y-4'>
      {/* Headline */}
      <div className='flex flex-col gap-2 w-full'>
        <h1 className='flex justify-center lg:justify-start  lg:items-start gap-2 text-4xl  lg:text-4xl font-bold tracking-tight mb-4'>
          <span className='block'>Hi I'm,</span>
          <span className='text-primary'>Moises Lugo</span>
        </h1>

        <p className='text-xl md:text-2xl text-muted-foreground max-w-xl'>
          Frontend Developer focused on building modern, and user-friendly web applications using {' '}
          <span className='font-semibold text-foreground'>React</span>,{' '}
          <span className='font-semibold text-foreground'> Next.js</span>, and{' '}
          <span className='font-semibold text-foreground'>TypeScript</span>.
        </p>
      </div>

      {/* Mission Statement */}
      <div className='space-y-4 max-w-xl'>
        <p className='text-lg text-muted-foreground leading-relaxed'>
          I enjoy transforming ideas into real products, working with APIs, authentication,
          and modern frontend development practices.
          
          Currently looking for an opportunity to grow as a Frontend or Full Stack Developer 
          while contributing to real-world projects and collaborative teams.
        </p>

        {/* Quick Stats */}
        <div className='flex flex-wrap justify-center items-center lg:justify-start not-only-of-type: gap-4 pt-4 border-t border-border'>
          <div className='flex items-center gap-2'>
            <Zap className='w-4 h-4 text-primary' />
            <span className='font-medium'>Frontend Focused</span>
          </div>
          <div className='flex items-center gap-1'>
            <Target className='w-4 h-4 text-primary' />
            <span className='font-medium'>API Integration</span>
          </div>
          <div className='flex items-center gap-1'>
            <Sparkles className='w-4 h-4 text-primary' />
            <span className='font-medium'>Responsive Design</span>
          </div>
        </div>
      </div>

      {/* CTA Buttons */}
      <div className='flex pt-4 '>
        <Button
          asChild
          size='lg'
          variant='outline'
          className='gap-2 px-8 py-6 text-lg border-2'
        >
          <Link
            href='/cv-moises-lugo.pdf'
            target='_blank'
            download
            rel='noopener noreferrer'
          >
            Download CV
            <DownloadIcon />
          </Link>
        </Button>
      </div>
    </div>
  )
}
