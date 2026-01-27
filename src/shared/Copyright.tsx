'use client'
export function Copyright() {
  return (
    <p className='text-xs text-muted-foreground text-center'>
      © {new Date().getFullYear()} Moises Lugo. All rights reserved.
    </p>
  )
}
