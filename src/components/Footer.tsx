'use client'

import { Copyright } from './Copyright'
import { NavLogo } from '@components/navbar/NavLogo'
import Link from 'next/link'
import { Github, MailIcon, Linkedin } from 'lucide-react'
import { usePathname } from 'next/navigation'

export function Footer() {
  const pathname = usePathname()

  const isProjectDetails = /^\/projects\/[^/]+$/.test(pathname)
  const isAdminPage = pathname === '/admin' || pathname.startsWith('/admin/')

  if (isProjectDetails || isAdminPage) return null

  return (
    <footer className='w-full mt-auto border-t border-border bg-card py-10 transition-colors duration-300'>
      <div className='container mx-auto mb-8 grid max-w-6xl grid-cols-1 gap-10 px-4 sm:px-6 md:grid-cols-2 lg:px-8'>
        {/* Column 1 */}
        <div className='flex flex-col items-start gap-3'>
          <NavLogo />

          <p className='max-w-sm text-sm leading-relaxed text-muted-foreground'>
            Desenvolvendo aplicações web modernas, funcionais e bem
            estruturadas, do front-end ao back-end.
          </p>
        </div>

        {/* Column 2 */}
        <div className='flex flex-col items-start gap-3 md:items-end'>
          <h3 className='text-sm font-semibold tracking-wider text-foreground'>
            Vamos conversar
          </h3>

          <ul className='flex flex-col gap-2.5 text-sm text-muted-foreground md:items-end'>
            <li>
              <Link
                href='https://github.com/moiseslugo-04'
                target='_blank'
                rel='noopener noreferrer'
                className='flex items-center gap-2.5 transition-colors duration-200 hover:text-primary'
              >
                <Github className='h-4 w-4' />
                <span>GitHub</span>
              </Link>
            </li>

            <li>
              <Link
                href='https://www.linkedin.com/in/moises-lugo-352b892a4/'
                target='_blank'
                rel='noopener noreferrer'
                className='flex items-center gap-2.5 transition-colors duration-200 hover:text-primary'
              >
                <Linkedin className='h-4 w-4' />
                <span>LinkedIn</span>
              </Link>
            </li>

            <li>
              <Link
                href='mailto:moiseslugo-9134@gmail.com'
                className='flex items-center gap-2.5 transition-colors duration-200 hover:text-primary'
              >
                <MailIcon className='h-4 w-4' />
                <span>Email</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className='container mx-auto flex max-w-6xl items-center justify-center border-t border-border/60 px-4 pt-6 text-xs text-muted-foreground sm:px-6 lg:px-8'>
        <Copyright />
      </div>
    </footer>
  )
}
