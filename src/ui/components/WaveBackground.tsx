'use client'

import { cn } from '@/lib/utils'
import { useTheme } from 'next-themes'
export function WaveBackground() {
  const { theme } = useTheme()
  return (
    <div
      aria-hidden='true'
      className='absolute inset-0 -z-10 bg-no-repeat bg-cover bg-center'
      style={{
        backgroundImage: cn(
          theme === 'dark'
            ? "url('/bg-hero-dark.svg')"
            : "url('/bg-hero-light.svg')"
        ),
      }}
    ></div>
  )
}
