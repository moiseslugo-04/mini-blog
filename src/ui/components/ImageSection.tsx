import Image from 'next/image'
import { Code } from 'lucide-react'
export function ImageSection() {
  return (
    <div className='relative lg:w-1/2'>
      {/* Glow Effect */}
      <div className='absolute -inset-4 bg-linear-to-r from-primary/20 to-transparent rounded-full blur-xl' />

      {/* Main Image Container */}
      <div className='relative group'>
        {/* Outer Ring */}
        <div className='absolute -inset-4 rounded-full border-2 border-primary/20 animate-spin-slow' />

        {/* Image */}
        <div className='relative w-48 h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 rounded-full overflow-hidden border-4 border-background shadow-2xl'>
          <Image
            src='/hero-img.png'
            alt='Moises Lugo'
            fill
            priority
            quality={100}
            className='object-cover object-[-10px_100%] transition-transform duration-700 group-hover:scale-110'
            sizes='(max-width: 768px) 192px, (max-width: 1024px) 224px, 256px'
          />
        </div>

        <div className='absolute md:-top-8 md:left-40  rounded-xl px-3 py-1.5 -left-3 top-45'>
          <div className='flex items-center gap-1.5 text-sm font-medium'>
            <div className='min-w-48 inline-flex items-center gap-2 px-4 py-2 rounded-full shadow-lg bg-card border border-border text-primary text-sm font-medium'>
              <Code className='w-4 h-4' />
              Frontend Developer
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
