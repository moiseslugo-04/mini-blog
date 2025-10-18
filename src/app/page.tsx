import { Banner } from '@components/Banner'
import { Button } from '@components/shadcn/button'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

export default function Home() {
  return (
    <section className='flex flex-col items-center justify-center gap-10 text-center py-16 px-4 sm:px-6 md:px-8'>
      <Banner />

      <div className='max-w-2xl space-y-6'>
        <h1 className='text-3xl sm:text-4xl font-bold text-primary'>
          Welcome to My Blog
        </h1>

        <p className='text-muted-foreground leading-relaxed text-sm sm:text-base'>
          Welcome to my personal mini blog 👋. Here I share learnings, projects,
          and reflections I discover as I grow as a{' '}
          <strong>frontend developer</strong>.
        </p>

        <p className='text-muted-foreground leading-relaxed text-sm sm:text-base'>
          My goal is to keep an honest record of my evolution — from small
          coding experiments to more advanced concepts in modern web
          development.
        </p>

        <Button asChild size='lg' className='mt-4'>
          <Link
            href='/posts'
            className='flex items-center justify-center gap-2'
          >
            View Posts <ArrowRight size={18} />
          </Link>
        </Button>
      </div>
    </section>
  )
}
