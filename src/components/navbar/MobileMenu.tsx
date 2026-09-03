'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { ModeToggle } from '@/features/theme/components/ModeToggle'
import { NavLogo } from './NavLogo'
import { NavbarLink } from './Navbar'
export function MobileMenu({ links }: { links: NavbarLink[] }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <div className='flex sm:hidden items-center gap-3'>
        <ModeToggle />

        <Button
          variant='ghost'
          size='icon'
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <Menu className='size-5' />
        </Button>
      </div>

      {isOpen && (
        <>
          {/* Backdrop */}
          <div
            className='fixed inset-0  bg-black/50 backdrop-blur-sm z-40'
            onClick={() => setIsOpen(false)}
          />

          {/* Menu */}
          <div
            className='
              fixed
              top-4
              left-4
              right-4
              z-50
              rounded-3xl
              border
              border-primary/20
              bg-card/90
              backdrop-blur-xl
              shadow-2xl
              overflow-hidden
            '
          >
            {/* Header */}
            <div className='flex items-center justify-between border-b border-border/60 px-5 py-4'>
              <div className='flex flex-col items-start gap-1'>
                <NavLogo />
                <p className='text-xs text-muted-foreground'>
                  Full Stack Developer
                </p>
              </div>

              <Button
                variant='ghost'
                size='icon'
                onClick={() => setIsOpen(false)}
              >
                <X className='size-5' />
              </Button>
            </div>

            {/* Links */}
            <nav className='p-3'>
              <ul className='space-y-2'>
                {links.map(({ href, label, icon: Icon }) => {
                  if (label === 'Dashboard') return null
                  return (
                    <li key={href}>
                      <Link
                        href={href}
                        onClick={() => setIsOpen(false)}
                        className='
                        group
                        flex
                        items-center
                        gap-4
                        rounded-xl
                        px-4
                        py-3
                        transition-all
                        duration-300
                        hover:bg-primary/10
                        hover:text-primary
                      '
                      >
                        <div
                          className='
                          flex
                          size-10
                          items-center
                          justify-center
                          rounded-lg
                          border
                          border-border
                          bg-background/50
                          transition-colors
                          group-hover:border-primary/40
                          group-hover:bg-primary/10
                        '
                        >
                          <Icon className='size-5' />
                        </div>

                        <span className='font-medium'>{label}</span>
                      </Link>
                    </li>
                  )
                })}
              </ul>
            </nav>

            {/* Footer */}
            <div className='border-t border-border/60 px-5 py-4'>
              <p className='text-sm font-medium'>Moises Lugo</p>

              <p className='text-xs text-muted-foreground'>
                Building modern web experiences with React & Next.js
              </p>
            </div>
          </div>
        </>
      )}
    </>
  )
}
