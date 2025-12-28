import { Header } from '@/ui/components/blog/Header'
import { SearchBar } from '@/ui/components/blog/Search'
import { PostSection } from '@/ui/components/blog/PostSection'
import { Suspense } from 'react'
import { PostSectionSkeleton } from '@/ui/components/blog/PostSectionSkeleton'

type BLogPageProps = {
  searchParams: Promise<{ search?: string }>
}
export default async function BlogPage({ searchParams }: BLogPageProps) {
  const { search } = await searchParams
  return (
    <section className='w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10'>
      {/* Hero Header */}
      <Header />
      {/* Search and Filter Bar */}
      <SearchBar search={search} />
      {/* All Posts Grid */}
      <Suspense fallback={<PostSectionSkeleton />}>
        <PostSection search={search} />
      </Suspense>
    </section>
  )
}
