import { useRouter } from 'next/navigation'
import { LogOut } from 'lucide-react'
import { API_URL } from '@/app/config/env'

export function LogoutButton({ collapsed = false }: { collapsed?: boolean }) {
  const router = useRouter()
  const handleLogout = async () => {
    const response = await fetch(`${API_URL}/auth/logout`, {
      method: 'POST',
      credentials: 'include',
    })
    if (response.ok) router.push('/login')
  }
  return (
    <div className='border-t border-border p-3'>
      <button
        onClick={handleLogout}
        type='button'
        className='flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary/50 hover:text-foreground'
      >
        <LogOut className='h-5 w-5 shrink-0' />
        {!collapsed && <span>Log out</span>}
      </button>
    </div>
  )
}
