'use client'
import { useRouter, usePathname, useSearchParams } from 'next/navigation'
import { Input } from '@components/shadcn/input'
import { useDebouncedCallback } from 'use-debounce'
export function Search() {
  const { replace } = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const defaultTerm = searchParams.get('query')?.toString()
  const handleChange = useDebouncedCallback((term) => {
    const params = new URLSearchParams(searchParams)
    if (term) {
      params.set('query', term)
    } else {
      params.delete('query')
    }
    replace(`${pathname}?${params.toString()}`)
  }, 0)
  return (
    <div className='flex items-center justify-between mb-4'>
      <Input
        defaultValue={defaultTerm}
        placeholder='Search by title...'
        onChange={(e) => handleChange(e.target.value)}
        className='max-w-sm w-full'
      />
    </div>
  )
}
