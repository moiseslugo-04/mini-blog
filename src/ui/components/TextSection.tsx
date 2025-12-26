import Link from 'next/link'
import { Zap, Sparkles, Target, DownloadIcon } from 'lucide-react'
import { Button } from '@ui/components/shadcn/button'
export function TextSection() {
  return (
    <div className='lg:w-1/2 text-center lg:text-left space-y-4'>
      {/* Badge */}

      {/* Headline */}
      <div className='flex flex-col gap-2 w-full'>
        <h1 className='flex justify-center lg:justify-start  lg:items-start gap-2 text-4xl  lg:text-4xl font-bold tracking-tight mb-4'>
          <span className='block'>Hi I'm,</span>
          <span className='text-primary'>Moises Lugo</span>
        </h1>

        <p className='text-xl md:text-2xl text-muted-foreground max-w-xl'>
          Building digital experiences that are{' '}
          <span className='font-semibold text-foreground'>simple</span>,{' '}
          <span className='font-semibold text-foreground'>efficient</span>, and{' '}
          <span className='font-semibold text-foreground'>impactful</span>.
        </p>
      </div>

      {/* Mission Statement */}
      <div className='space-y-4 max-w-xl'>
        <p className='text-lg text-muted-foreground leading-relaxed'>
          I transform complex ideas into clean, user-focused interfaces.
          Currently seeking to join a team where I can contribute to meaningful
          projects and grow through high-quality, collaborative development.
        </p>

        {/* Quick Stats */}
        <div className='flex flex-wrap justify-center items-center lg:justify-start not-only-of-type: gap-4 pt-4 border-t border-border'>
          <div className='flex items-center gap-2'>
            <Zap className='w-4 h-4 text-primary' />
            <span className='font-medium'>Remote Ready</span>
          </div>
          <div className='flex items-center gap-1'>
            <Target className='w-4 h-4 text-primary' />
            <span className='font-medium'>Problem Solver</span>
          </div>
          <div className='flex items-center gap-1'>
            <Sparkles className='w-4 h-4 text-primary' />
            <span className='font-medium'>Fast Learner</span>
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
