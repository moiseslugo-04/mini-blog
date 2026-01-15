'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import { ModeToggle } from './darkMode/ModeToggle'

import { links } from '@lib/utils/constants'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/ui/components/shadcn/tooltip'
import Image from 'next/image'

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
          {links.map(({ href, label, Icon, view }) => (
            <TooltipProvider key={href} delayDuration={100}>
              <li>
                <Tooltip>
                  <TooltipTrigger>
                    <Link
                      href={href}
                      aria-label={label}
                      aria-current={pathname === href ? 'page' : undefined}
                      className={cn(
                        'transition-colors hover:text-primary',
                        pathname === href ? 'text-primary' : 'text-gray-400'
                      )}
                    >
                      {<Icon size={25} />}
                    </Link>
                  </TooltipTrigger>
                  <Link href={href}>
                    <TooltipContent
                      side='top'
                      className='p-0 mb-3 relative w-[130] h-auto'
                    >
                      <Image
                        src={view}
                        width={256}
                        height={144}
                        className='rounded-sm object-cover'
                        alt={`${label} preview`}
                      />
                      <span className='absolute font-semibold left-1/2 -translate-x-1/2  bottom-1 px-2 py-1 rounded-sm w-fit bg-amber-600 h-fit text-center my-1'>
                        {label}
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
