'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import { ModeToggle } from './darkMode/ModeToggle'
import { ShieldUser, Home, LibraryBig, Hammer } from 'lucide-react'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/ui/components/shadcn/tooltip'
import Image from 'next/image'

const links = [
  {
    href: '/',
    label: 'Home',
    icon: <Home size={25} />,
    view: '/home-picture.png',
  },
  {
    href: '/blog',
    label: 'Blog',
    icon: <LibraryBig size={25} />,
    view: '/blog-picture.png',
  },
  {
    href: '/projects',
    label: 'Projects',
    icon: <Hammer size={25} />,
    view: '/development.png',
  },
  {
    href: '/dashboard',
    label: 'Dashboard',
    icon: <ShieldUser size={25} />,
    view: '/development.png',
  },
]

export function Navbar() {
  const pathname = usePathname()
  return (
    <nav
      className='fixed z-100 left-1/2 -translate-x-1/2 bottom-12 bg-gray-900/60 rounded-md
    backdrop-blur-md
    shadow-lg
   '
    >
      <div className='container mx-auto flex items-center justify-between py-1 px-4'>
        {/* LINKS (Desktop) */}
        <ul className='flex items-center gap-6 text-sm'>
          {links.map((link) => (
            <TooltipProvider key={link.href} delayDuration={100}>
              <li>
                <Tooltip>
                  <TooltipTrigger>
                    <Link
                      href={link.href}
                      aria-label={link.label}
                      aria-current={pathname === link.href ? 'page' : undefined}
                      className={cn(
                        'transition-colors hover:text-primary',
                        pathname === link.href
                          ? 'text-primary'
                          : 'text-gray-400'
                      )}
                    >
                      {link.icon}
                    </Link>
                  </TooltipTrigger>
                  <Link href={link.href}>
                    <TooltipContent
                      side='top'
                      className='p-0 mb-3 relative w-[130] h-auto'
                    >
                      <Image
                        width={64}
                        height={20}
                        src={link.view}
                        alt={`${link.label} preview`}
                        className='w-64 rounded-md'
                      />
                      <span className='absolute font-semibold left-1/2 -translate-x-1/2  bottom-1 px-2 py-1 rounded-sm w-fit bg-amber-600 h-fit text-center my-1'>
                        {link.label}
                      </span>
                    </TooltipContent>
                  </Link>
                </Tooltip>
              </li>
            </TooltipProvider>
          ))}
          <ModeToggle />
        </ul>
      </div>
    </nav>
  )
}
