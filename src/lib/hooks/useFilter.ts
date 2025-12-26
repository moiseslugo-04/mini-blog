'use client'

import { usePathname, useSearchParams } from 'next/navigation'
import { useRouter } from 'next/navigation'
import { ChangeEvent } from 'react'
import { useDebouncedCallback } from 'use-debounce'

export function useFilter() {
  const searchParams = useSearchParams()
  const pathname = usePathname()
  const { replace } = useRouter()
  const handleSearch = useDebouncedCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const params = new URLSearchParams(searchParams) // get the previous params
      const search = e.target.value
      if (search) {
        params.set('search', search)
      } else {
        params.delete('search')
      }
      replace(`${pathname}?${params.toString()}`)
    },
    500
  )
  const handleFilter = (filter: string | undefined) => {
    const params = new URLSearchParams(searchParams) // get the previous params
    if (filter) {
      params.set('category', filter)
    } else {
      params.delete('category')
    }
    replace(`${pathname}?${params.toString()}`)
  }
  console.log(searchParams.get('search'))
  return {
    handleFilter,
    handleSearch,
    defaultSearch: searchParams.get('search') ?? '',
  }
}
