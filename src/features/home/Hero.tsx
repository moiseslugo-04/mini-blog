import { ImageSection } from './ImageSection'
import { HeroContent } from './HeroContent'
import Link from 'next/link'
import { DownloadIcon, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
export function Hero() {
  return (
    <section className='relative sm:pt-20 pt-10  min-w-full  overflow-hidden '>
      <div className='container max-w-6xl mx-auto'>
        <div className='grid grid-cols-[1fr_2fr] md:grid-cols-2 gap-6  '>
          <HeroContent />

          {/* CTA Buttons */}
          <div className='row-start-2  flex  sm:flex-row flex-col  gap-2  w-50 lg:w-100'>
            <Button
              asChild
              className='gap-2 py-5 text-sm md:text-lg border-2 w-fit '
            >
              <Link href='/projects'>
                <ArrowRight />
                View Projects
              </Link>
            </Button>

            <Button
              asChild
              variant='outline'
              className='gap-2 py-5 text-sm md:text-lg border-2 w-fit  '
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
          <ImageSection />
        </div>
      </div>
    </section>
  )
}
