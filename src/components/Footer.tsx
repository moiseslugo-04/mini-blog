'use client'

import { Copyright } from './Copyright'
import { NavLogo } from '@components/navbar/NavLogo'
import Link from 'next/link'
import { Github, MailIcon, Linkedin } from 'lucide-react'
import { WorldMap } from './WorlMap'
import { usePathname } from 'next/navigation'

export function Footer() {
  const pathname = usePathname()
  const isProjectDetails = /^\/projects\/[^/]+$/.test(pathname)
  if (isProjectDetails) return null
  return (
    <footer className='w-full py-10 bg-card border-t border-border mt-auto transition-colors duration-300'>
      <div className='container max-w-6xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-[1fr_1fr_2fr] gap-8 mb-8'>
        <div className='flex flex-col items-start gap-3'>
          <NavLogo />
          <p className='text-sm text-muted-foreground leading-relaxed max-w-xs'>
            Building modern web experiences with clean code and great design.
          </p>
        </div>

        <div className='flex flex-col items-start gap-3'>
          <h3 className='text-sm font-semibold text-foreground tracking-wider'>
            Let's Connect
          </h3>
          <ul className='flex flex-col gap-2.5 text-sm text-muted-foreground'>
            <li>
              <Link
                href='https://github.com/moiseslugo-04'
                target='_blank'
                rel='noopener noreferrer'
                className='hover:text-primary transition-colors duration-200 flex items-center gap-2.5'
              >
                <Github className='w-4 h-4' />
                <span>GitHub</span>
              </Link>
            </li>
            <li>
              <Link
                href='https://www.linkedin.com/in/moises-lugo-352b892a4/'
                target='_blank'
                rel='noopener noreferrer'
                className='hover:text-primary transition-colors duration-200 flex items-center gap-2.5'
              >
                <Linkedin className='w-4 h-4' />
                <span>LinkedIn</span>
              </Link>
            </li>
            <li>
              <Link
                href='mailto:moiseslugo-9134@gmail.com'
                className='hover:text-primary transition-colors duration-200 flex items-center gap-2.5'
              >
                <MailIcon className='w-4 h-4' />
                <span>Email</span>
              </Link>
            </li>
          </ul>
        </div>
        <WorldMap />
      </div>

      {/* Copyright inferior */}
      <div className='container max-w-6xl mx-auto px-4 pt-6 border-t border-border/60 flex justify-center items-center text-xs text-muted-foreground'>
        <Copyright />
      </div>
    </footer>
  )
}
