import { ImageSection } from './ImageSection'
import { TextSection } from './TextSection'

export function Hero() {
  return (
    <section className='relative py-8  overflow-hidden'>
      {/* Background elements */}
      <div className='absolute inset-0 -z-10'>
        <div className='absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl' />
        <div className='absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl' />
      </div>

      <div className='container max-w-6xl mx-auto px-4  '>
        <div className='flex flex-col lg:flex-row items-center gap-12 lg:gap-10'>
          {/* Image Section - Left */}
          <ImageSection />
          {/* Text Section - Right */}
          <TextSection />
        </div>
      </div>
    </section>
  )
}
