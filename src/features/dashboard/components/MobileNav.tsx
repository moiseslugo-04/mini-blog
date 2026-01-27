import Link from 'next/link'
import { LogOut, Menu } from 'lucide-react'
import { Button } from '@shared/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@shared/ui/sheet'
import { cn } from '@/lib/utils'
import { adminNavigation } from '../config/routes'

interface MobileNavProps {
  currentPath?: string
}

export function MobileNav({ currentPath = '/' }: MobileNavProps) {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant='ghost' size='icon' className='lg:hidden'>
          <Menu className='h-5 w-5' />
          <span className='sr-only'>Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side='left' className='w-64 p-0'>
        <div className='flex h-16 items-center gap-3 border-b border-border px-4'>
          <div className='flex h-8 w-8 items-center justify-center rounded-lg bg-foreground'>
            <span className='text-sm font-bold text-background'>P</span>
          </div>
          <span className='text-lg font-semibold text-foreground'>
            Portfolio
          </span>
        </div>
        <nav className='space-y-1 p-3'>
          {adminNavigation.map((item) => {
            const isActive = currentPath === item.href
            return (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  'flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors',
                  isActive
                    ? 'bg-secondary text-foreground'
                    : 'text-muted-foreground hover:bg-secondary/50 hover:text-foreground'
                )}
              >
                <item.icon className='h-5 w-5' />
                <span>{item.name}</span>
              </Link>
            )
          })}
        </nav>

        <div className='border-t border-border p-3 mt-auto'>
          <button
            type='button'
            className='flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary/50 hover:text-foreground'
          >
            <LogOut className='h-5 w-5 shrink-0' />
            <span>Log out</span>
          </button>
        </div>
      </SheetContent>
    </Sheet>
  )
}
