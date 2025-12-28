import { getAllPosts } from '@/lib/features/posts/server/posts.repository'
import { PostCard } from '../posts/PostCard'
import { PostEmptyState } from './PostEmptyState'
import { NewsLetterCTA } from './NewsLetterCTA'

export async function PostSection({ search }: { search?: string }) {
  const posts = await getAllPosts(search)
  //Early return
  if (!posts.length) return <PostEmptyState />

  return (
    <section className='w-full flex flex-col px-2'>
      <div className='mb-8 flex items-center justify-between'>
        <h2 className='text-2xl font-bold'>All Articles</h2>
        <div className='text-sm text-muted-foreground'>
          Showing {posts.length} article{posts.length !== 1 ? 's' : ''}
        </div>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
        {posts.map((post) => (
          <PostCard key={post.id} postWithAuthor={post} />
        ))}
      </div>
      <NewsLetterCTA />
    </section>
  )
}
