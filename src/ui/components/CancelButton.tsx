'use client'
import { useRouter } from 'next/navigation'
import { Button } from '@/ui/components/shadcn/button'

export function CancelButton() {
  const router = useRouter()

  return (
    <Button type='button' onClick={() => router.push('/dashboard')}>
      Cancel
    </Button>
  )
}
