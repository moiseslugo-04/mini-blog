'use client'

import Link from 'next/link'
import { LogOut, Menu } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { cn } from '@/lib/utils'
import { adminNavigation } from '../config/routes'
import { usePathname } from 'next/navigation'
import { LogoutButton } from '@/features/auth/components/LogoutButton'

export function MobileNav() {
  const pathname = usePathname()
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant='ghost' size='icon' className='lg:hidden'>
          <Menu className='h-5 w-5' />
          <span className='sr-only'>Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side='left' className='w-64 p-0 lg:hidden'>
        <div className='flex h-16 items-center gap-3 border-b border-border px-4'>
          <div className='flex h-8 w-8 items-center justify-center rounded-lg bg-foreground'>
            <span className='text-sm font-bold text-background'>P</span>
          </div>
          <span className='text-lg font-semibold text-foreground'>
            Portfolio
          </span>
        </div>
        <nav className='space-y-1 p-3'>
          {adminNavigation.map((item, index) => {
            const isActive = pathname === item.href
            const isIndex = index == 0

            return (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  'flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors',
                  isActive
                    ? 'bg-primary text-foreground'
                    : 'text-muted-foreground hover:bg-primary/70 hover:text-foreground',
                  isIndex &&
                    'bg-secondary text-primary hover:bg-primary hover:text-secondary'
                )}
              >
                <item.icon className='h-5 w-5 shrink-0' />
                {<span>{item.name}</span>}
              </Link>
            )
          })}
        </nav>
        <LogoutButton />
      </SheetContent>
    </Sheet>
  )
}
