'use client'
import Link from 'next/link'
import { DesktopMenu } from '@components/navbar/DesktopMenu'
import { MobileMenu } from './MobileMenu'
import { NavLogo } from './NavLogo'
import { usePathname } from 'next/navigation'
export function Navbar() {
  //don't show this menu in details project
  const pathname = usePathname()
  const isProjectDetails = /^\/projects\/[^/]+$/.test(pathname)
  if (isProjectDetails) return null

  return (
    <div className='relative pb-10'>
      <nav className='fixed flex sm:fixed z-100 sm:w-11/12 w-full top-0 sm:top-4  bg-navbar-background sm:rounded-md  backdrop-blur-md shadow-lg sm:left-1/2 sm:-translate-x-1/2 justify-between p-2 sm:p-0 max-w-3xl mb-15'>
        <div className='flex items-center justify-center  px-6 py-2'>
          <Link href={'/'}>
            <NavLogo />
          </Link>
        </div>
        <DesktopMenu />
        <MobileMenu />
      </nav>
    </div>
  )
}
