import Link from 'next/link'
import { LogOut, ChevronLeft } from 'lucide-react'
import { cn } from '@lib/utils'
import { adminNavigation } from '../config/routes'
interface SidebarProps {
  collapsed?: boolean
}

export function Sidebar({ collapsed = false }: SidebarProps) {
  return (
    <aside
      className={cn(
        'relative flex h-screen flex-col border-r border-border bg-card transition-all duration-300',
        collapsed ? 'w-16' : 'w-64'
      )}
    >
      {/* Logo */}
      <div className='flex h-15 items-center gap-3 border-b border-border px-4'>
        <div className='flex h-8 w-8 items-center justify-center rounded-lg bg-foreground'>
          <span className='text-sm font-bold text-background'>P</span>
        </div>
        {!collapsed && (
          <span className='text-lg font-semibold text-foreground'>
            Portfolio
          </span>
        )}
      </div>

      {/* Navigation */}
      <nav className='flex-1 space-y-1 p-3'>
        {adminNavigation.map((item, index) => {
          const isActive = index === 0
          return (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                'flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors',
                isActive
                  ? 'bg-primary text-foreground'
                  : 'text-muted-foreground hover:bg-secondary/50 hover:text-foreground'
              )}
            >
              <item.icon className='h-5 w-5 shrink-0' />
              {!collapsed && <span>{item.name}</span>}
            </Link>
          )
        })}
      </nav>

      {/* Footer */}
      <div className='border-t border-border p-3'>
        <button
          type='button'
          className='flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary/50 hover:text-foreground'
        >
          <LogOut className='h-5 w-5 shrink-0' />
          {!collapsed && <span>Log out</span>}
        </button>
      </div>

      {/* Collapse Toggle */}
      <div className='absolute -right-3 top-20'>
        <button
          type='button'
          className='flex h-6 w-6 items-center justify-center rounded-full border border-border bg-card shadow-sm transition-colors hover:bg-secondary'
        >
          <ChevronLeft
            className={cn(
              'h-4 w-4 text-muted-foreground transition-transform',
              collapsed && 'rotate-180'
            )}
          />
        </button>
      </div>
    </aside>
  )
}
