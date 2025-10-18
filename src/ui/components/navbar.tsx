'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import { ModeToggle } from './darkMode/ModeToggle'
import { useSession, signOut } from 'next-auth/react'
import { Button } from '@components/shadcn/button'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import { Code2 } from 'lucide-react'

const links = [
  { href: '/', label: 'Home' },
  { href: '/blog', label: 'Blog' },
  { href: '/about', label: 'About' },
]

export function Navbar() {
  const pathname = usePathname()
  const { data: session } = useSession()
  const isAuthenticated = !!session?.user
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className='border-b border-border bg-card/50 backdrop-blur-sm'>
      <div className='container mx-auto flex items-center justify-between py-4 px-4'>
        {/* Logo */}
        <h1 className='text-lg font-bold text-primary'>
          Moises Blog <Code2 />
        </h1>

        {/* Button Mobile */}
        <Button
          variant='outline'
          className='sm:hidden p-2 text-muted-foreground hover:text-primary'
          onClick={() => setIsOpen(!isOpen)}
          aria-label='Toggle menu'
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </Button>

        {/* LINKS (Desktop) */}
        <ul className='hidden sm:flex items-center gap-6 text-sm'>
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={cn(
                  'transition-colors hover:text-primary',
                  pathname === link.href
                    ? 'text-primary font-medium'
                    : 'text-muted-foreground'
                )}
              >
                {link.label}
              </Link>
            </li>
          ))}

          {isAuthenticated ? (
            <>
              <Link
                href='/dashboard'
                className={cn(
                  'transition-colors hover:text-primary',
                  pathname === '/dashboard'
                    ? 'text-primary font-medium'
                    : 'text-muted-foreground'
                )}
              >
                Dashboard
              </Link>
              <Button
                variant='outline'
                size='sm'
                onClick={() => signOut({ callbackUrl: '/login' })}
              >
                Logout
              </Button>
            </>
          ) : (
            <Link
              href='/login'
              className='bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded-md text-sm'
            >
              Login
            </Link>
          )}
          <ModeToggle />
        </ul>
      </div>

      {/* MENU MOBILE */}
      {isOpen && (
        <div className='sm:hidden border-t border-border bg-card/90 backdrop-blur-md'>
          <ul className='flex flex-col px-4 py-3 space-y-3 text-sm'>
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    'block transition-colors hover:text-primary',
                    pathname === link.href
                      ? 'text-primary font-medium'
                      : 'text-muted-foreground'
                  )}
                >
                  {link.label}
                </Link>
              </li>
            ))}

            {isAuthenticated ? (
              <>
                <Link
                  href='/dashboard'
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    'block transition-colors hover:text-primary',
                    pathname === '/dashboard'
                      ? 'text-primary font-medium'
                      : 'text-muted-foreground'
                  )}
                >
                  Dashboard
                </Link>
                <Button
                  variant='outline'
                  className='w-full'
                  onClick={() => signOut({ callbackUrl: '/login' })}
                >
                  Logout
                </Button>
              </>
            ) : (
              <Link
                href='/login'
                onClick={() => setIsOpen(false)}
                className='block bg-blue-500 hover:bg-blue-600 text-white text-center px-3 py-2 rounded-md'
              >
                Login
              </Link>
            )}
            <div className='pt-2'>
              <ModeToggle />
            </div>
          </ul>
        </div>
      )}
    </nav>
  )
}
