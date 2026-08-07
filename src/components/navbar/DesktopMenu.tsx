import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { links } from '@lib/utils/constants'
import { cn } from '@lib/utils'
import { ModeToggle } from '@/features/theme/components/ModeToggle'
import { GithubIcon } from 'lucide-react'
export function DesktopMenu() {
  const pathname = usePathname()
  return (
    <div className=' hidden sm:flex container mx-auto  items-center justify-between py-2 px-6 gap-3'>
      <ul className=' hidden sm:flex items-center gap-8 text-sm'>
        {links.map(({ href, label }) => (
          <li key={href}>
            <Link
              href={href}
              aria-label={label}
              aria-current={pathname === href ? 'page' : undefined}
              className={cn(
                'transition-colors hover:text-primary relative ',
                pathname === href ? 'text-primary' : 'text-gray-400'
              )}
            >
              {label}
              <span
                className={cn(
                  pathname === href
                    ? 'bg-blue-600 absolute  size-1.5 rounded-2xl top-4.5 left-1/2 -translate-x-1/2 '
                    : ''
                )}
              ></span>
            </Link>
          </li>
        ))}
      </ul>
      <div className='flex  justify-center  items-center gap-3'>
        <ModeToggle />

        <Link
          href={'/'}
          className='hidden sm:block border border-white rounded-sm p-1'
        >
          <GithubIcon />
        </Link>
      </div>
    </div>
  )
}
