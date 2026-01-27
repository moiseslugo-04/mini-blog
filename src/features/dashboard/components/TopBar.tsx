import { Bell, Search } from 'lucide-react'
import { Button } from '@shared/ui/button'
import { Input } from '@shared/ui/input'
import { Avatar, AvatarFallback, AvatarImage } from '@shared/ui/avatar'
import { MobileNav } from './MobileNav'
import { verifySession } from '@/features/dal/session'
import { getUserById } from '@/features/users/server/user.repository'

interface TopBarProps {
  currentPath?: string
}

export async function TopBar({ currentPath }: TopBarProps) {
  const session = await verifySession()
  const user = await getUserById(session.userId)
  if (user === null) {
    throw new Error('User not found')
  }
  return (
    <header className='flex h-16 items-center justify-between border-b border-border bg-card px-4 lg:px-6'>
      <div className='flex items-center gap-4'>
        <MobileNav currentPath={currentPath} />
        <div className='relative hidden sm:block'>
          <Search className='absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground' />
          <Input type='search' placeholder='Search...' className='w-64 pl-9' />
        </div>
      </div>

      <div className='flex items-center gap-3'>
        <Button variant='ghost' size='icon' className='relative'>
          <Bell className='h-5 w-5' />
          <span className='absolute right-1.5 top-1.5 h-2 w-2 rounded-full bg-red-500' />
          <span className='sr-only'>Notifications</span>
        </Button>
        <div className='h-6 w-px bg-border' />
        <div className='flex items-center gap-3'>
          <Avatar className='h-8 w-8'>
            <AvatarImage src='/favicon.png' alt={user.name} />
            <AvatarFallback className='bg-secondary text-xs font-medium'>
              ML
            </AvatarFallback>
          </Avatar>
          <div className='hidden sm:block'>
            <p className='text-sm font-medium text-foreground'>{user.name}</p>
            <p className='text-xs text-muted-foreground'>Frontend Developer</p>
          </div>
        </div>
      </div>
    </header>
  )
}
