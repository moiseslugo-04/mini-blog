'use client'
import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'
import { Button } from '@ui/button'
export function ModeToggle() {
  const { setTheme, theme } = useTheme()
  const toggleTheme = () => setTheme(theme === 'dark' ? 'light' : 'dark')
  return (
    <Button className='bg-blue-500/40' onClick={toggleTheme}>
      {theme === 'light' ? <Moon /> : <Sun />}
    </Button>
  )
}
