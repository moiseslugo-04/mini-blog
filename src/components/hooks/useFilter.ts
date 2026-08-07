'use client'

import { usePathname, useSearchParams } from 'next/navigation'
import { useRouter } from 'next/navigation'
import { useDebouncedCallback } from 'use-debounce'

export function useFilter() {
  const searchParams = useSearchParams()
  const pathname = usePathname()
  const { replace } = useRouter()
  const handleSearch = useDebouncedCallback((search: string) => {
    const params = new URLSearchParams(searchParams) // get the previous params
    if (search) {
      params.set('search', search)
    } else {
      params.delete('search')
    }
    replace(`${pathname}?${params.toString()}`)
  }, 500)
  const handleFilter = (filter: string | undefined) => {
    const params = new URLSearchParams(searchParams) // get the previous params
    if (filter) {
      params.set('category', filter)
    } else {
      params.delete('category')
    }
    replace(`${pathname}?${params.toString()}`)
  }
  return {
    handleFilter,
    handleSearch,
  }
}
