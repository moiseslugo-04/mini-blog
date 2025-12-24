import { PostCard } from '@components/posts/PostCard'
import { getAllPosts } from '@lib/posts/queries'
import { cache } from 'react'
const getPostsCache = cache(async () => getAllPosts())
export default async function BlogPage() {
  try {
    const posts = await getPostsCache()
    return (
      <section className='w-full max-w-6xl mx-auto px-4 sm:px-6 md:px-8 py-10'>
        {/* Header */}
        <div className='text-center max-w-2xl mx-auto mb-14 space-y-3'>
          <h1 className='text-3xl sm:text-4xl font-semibold text-primary'>
            Blog
          </h1>

          <p className='text-muted-foreground text-sm sm:text-base'>
            Articles about frontend development, tools, and real-world
            experiments.
          </p>
        </div>

        {/* Content */}
        {posts.length > 0 ? (
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
            {posts.map((post) => (
              <PostCard key={post.id} postWithAuthor={post} />
            ))}
          </div>
        ) : (
          <p className='text-sm text-muted-foreground text-center py-20'>
            No articles yet. I’ll be publishing soon.
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
