import { Header } from '@/features/blog/components/Header'
import { SearchBar } from '@/features/blog/components/Search'
import { PostSection } from '@/features/blog/components/PostSection'
import { Suspense } from 'react'
import { PostSectionSkeleton } from '@/features/blog/components/PostSectionSkeleton'
import { getTotalCountPost } from '@/features/blog/blog.repository'
import { getPostList } from '@/features/blog/blog.service'
import { getTagsList, getTotalTags } from '@/features/tags/tags.repository'

export const revalidate = 3600

type BLogPageProps = {
  searchParams: Promise<{ search?: string }>
  params: Promise<{ tags: string[] }>
}
export default async function BlogPage({
  searchParams,
  params,
}: BLogPageProps) {
  const { search } = await searchParams
  const { tags } = await params
  const [posts, totalPost, totalTags] = await Promise.all([
    getPostList({ search, tags }),
    getTotalCountPost(),
    getTotalTags(),
  ])
  return (
    <section className='w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10'>
      {/* Hero Header */}
      <Suspense>
        <Header postQuantity={totalPost} tagsQuantity={totalTags} />
      </Suspense>
      {/* Search and Filter Bar */}
      <Suspense>
        <SearchBar search={search} />
      </Suspense>

      {/* All Posts Grid */}
      <Suspense fallback={<PostSectionSkeleton />}>
        <PostSection posts={posts} />
      </Suspense>
    </section>
  )
}
