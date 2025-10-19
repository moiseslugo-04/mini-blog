'use client'
import { useRouter, usePathname, useSearchParams } from 'next/navigation'
import { Input } from '@components/shadcn/input'
import { useState, useEffect } from 'react'
import { useDebounce } from 'use-debounce'

export function Search() {
  const { replace } = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  const [term, setTerm] = useState(searchParams.get('search') ?? '')
  const [debouncedTerm] = useDebounce(term, 500)
  // Effect to navigate when debouncedTerm changes
  useEffect(() => {
    const params = new URLSearchParams(searchParams)
    if (debouncedTerm) {
      params.set('search', debouncedTerm)
    } else {
      params.delete('search')
    }
    replace(`${pathname}?${params.toString()}`)
  }, [term, pathname, replace, searchParams])

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTerm(event.currentTarget.value)
  }

  return (
    <div className='flex items-center justify-between mb-4'>
      <Input
        value={term}
        placeholder='Search by title...'
        onChange={handleChange}
        className='max-w-sm w-full'
      />
    </div>
  )
}
