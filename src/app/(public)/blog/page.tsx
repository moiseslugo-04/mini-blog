import { PostCard } from '@components/posts/PostCard'
import { getAllPosts } from '@lib/posts/queries'
import { cache } from 'react'
const getPostsCache = cache(async () => getAllPosts())
export default async function BlogPage() {
  try {
    const posts = await getPostsCache()
    return (
      <section className=' max-w-3xl  w-full mx-auto px-4 sm:px-6 md:px-8 py-10 space-y-10'>
        {/* Header */}
        <div className='flex flex-col  sm:items-center sm:justify-between gap-4 text-center sm:text-left'>
          <h1 className='text-3xl sm:text-4xl font-bold text-primary'>
            Latest Posts
          </h1>
          <p className='text-muted-foreground text-sm sm:text-base'>
            Discover my latest articles and experiments in frontend development.
          </p>
        </div>
        {posts.length > 0 ? (
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-6 '>
            {posts.map((post) => (
              <PostCard key={post.id} postWithAuthor={post} />
            ))}
          </div>
        ) : (
          <p className='text-sm text-muted-foreground text-center py-16'>
            No posts were found.
          </p>
        )}
      </section>
    )
  } catch (error) {
    console.error(error)
    return (
      <section className='text-center py-16'>
        <p className='text-red-500'>
          Failed to load posts. Please try again later.
        </p>
      </section>
    )
  }
}
