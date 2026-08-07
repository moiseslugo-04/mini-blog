import Image from 'next/image'
import { MapPin } from 'lucide-react'

export function WorldMap() {
  return (
    <div className='relative overflow-hidden rounded-3xl border border-border bg-card p-8 shadow-sm'>
      {/* Background */}
      <div className='absolute inset-0 bg-linear-to-br from-primary/4 via-transparent to-primary/2' />

      <div className='relative z-10'>
        <div className='flex items-center gap-3'>
          <div className='flex h-10 w-10 items-center justify-center rounded-full bg-primary/10'>
            <MapPin className='h-5 w-5 text-primary' />
          </div>

          <div>
            <p className='text-sm text-muted-foreground'>Currently based in</p>

            <h3 className='text-lg font-semibold text-foreground'>
              João Pessoa, PB, Brazil
            </h3>
          </div>
        </div>

        <div className='relative  h-40 overflow-hidden rounded-xl'>
          {/* Mapa */}
          <Image
            src='/map.png'
            alt='World map'
            fill
            priority
            className='
    object-cover
    object-center
    scale-130
    opacity-40
    dark:opacity-90
    select-none
    pointer-events-none
    contrast-110
    brightness-90
  '
          />

          {/* Glow exterior */}
          <div className='absolute left-[34%] top-[63%] -translate-x-1/2 -translate-y-1/2'>
            {/* Then */}
            <div className='absolute left-1/2 top-1/2 h-9 w-9 -translate-x-1/2 -translate-y-1/2 rounded-full bg-sky-500/25 animate-ping' />

            {/* Glow grande */}
            <div className='absolute left-1/2 top-1/2 h-7 w-7 -translate-x-1/2 -translate-y-1/2 rounded-full bg-sky-500/30 blur-xl animate-pulse' />

            {/* Medium glow */}
            <div className='absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-sky-400/70' />

            {/* Center */}
            <div className='absolute left-1/2 top-1/2 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-sky-300 shadow-[0_0_12px_rgba(56,189,248,0.9)]' />

            {/* White spot */}
            <div className='absolute left-1/2 top-1/2 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white' />
          </div>
        </div>
      </div>
    </div>
  )
}
