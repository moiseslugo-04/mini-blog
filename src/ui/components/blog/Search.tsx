'use client'

import { useFilter } from '@/lib/hooks/useFilter'
import { Search } from 'lucide-react'

export function SearchBar() {
  const { handleSearch, defaultSearch } = useFilter()
  return (
    //bg-card rounded-2xl border border-border shadow-sm
    <div className='mb-4 p-6 '>
      <div className='flex flex-col  md:flex-row gap-4 items-center justify-center'>
        {/* Filter Tags 
        <div className='flex flex-wrap gap-2'>
          <button
            onClick={() => handleFilter('All')}
            className='px-4 py-2 rounded-full bg-primary text-primary-foreground text-sm font-medium flex items-center gap-2'
          >
            <Filter className='w-3 h-3' />
            All
          </button>
          <button
            onClick={() => handleFilter('React')}
            className='px-4 py-2 rounded-full bg-secondary text-secondary-foreground text-sm font-medium hover:bg-accent transition-colors'
          >
            React
          </button>
          <button
            onClick={() => handleFilter('Next.js')}
            className='px-4 py-2 rounded-full bg-secondary text-secondary-foreground text-sm font-medium hover:bg-accent transition-colors'
          >
            Next.js
          </button>
          <button
            onClick={() => handleFilter('DevOps')}
            className='px-4 py-2 rounded-full bg-secondary text-secondary-foreground text-sm font-medium hover:bg-accent transition-colors'
          >
            DevOps
          </button>
          <button
            onClick={() => handleFilter('UI/UX')}
            className='px-4 py-2 rounded-full bg-secondary text-secondary-foreground text-sm font-medium hover:bg-accent transition-colors'
          >
            UI/UX
          </button>
        </div>
*/}
        {/* Search Box */}
        <div className='flex justify-center items-center relative w-full md:w-auto'>
          <Search className='absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4' />
          <input
            onChange={(e) => handleSearch(e.target.value)}
            type='search'
            defaultValue={defaultSearch}
            placeholder='Search articles...'
            className='w-full md:w-100 pl-12 pr-4 py-3 rounded-xl border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent'
          />
        </div>
      </div>
    </div>
  )
}
