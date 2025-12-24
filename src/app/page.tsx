//import { Banner } from '@components/Banner'
import { Button } from '@components/shadcn/button'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
export default function Home() {
  return (
    <section className='full flex-1 flex flex-col items-center justify-center gap-10 text-center py-16 px-4 sm:px-6 md:px-8'>
      <h1 className='text-3xl sm:text-4xl font-bold text-primary'>
        Hi, I’m Moises 👋
      </h1>

      <p className='text-muted-foreground leading-relaxed text-sm sm:text-base'>
        I’m a frontend developer focused on building modern, accessible, and
        user-friendly web applications.
      </p>

      <p className='text-muted-foreground leading-relaxed text-sm sm:text-base'>
        In this portfolio, I share my projects, experiments, and the things I
        learn while working with technologies like React, Next.js, and modern UI
        patterns.
      </p>

      <Button asChild size='lg' className='mt-2'>
        <Link href='/projects' className='flex items-center gap-2'>
          View my work <ArrowRight size={18} />
        </Link>
      </Button>
    </section>
  )
}
