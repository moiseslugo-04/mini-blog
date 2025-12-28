// components/blog/BlogPage.tsx
import { PostCard } from '@components/posts/PostCard'
import { getAllPosts } from '@features/posts/server/posts.repository'
import { Mail } from 'lucide-react'
import { Header } from '@/ui/components/blog/Header'
import { SearchBar } from '@/ui/components/blog/Search'

type BLogPageProps = {
  searchParams: Promise<{ search: string }>
}
export default async function BlogPage({ searchParams }: BLogPageProps) {
  const { search } = await searchParams
  const posts = await getAllPosts(search)
  return (
    <section className='w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10'>
      {/* Hero Header */}
      <Header />
      {/* Search and Filter Bar */}
      <SearchBar />

      {/* All Posts Grid */}
      {posts.length > 0 ? (
        <>
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
        </>
      ) : (
        <div className='text-center py-20'>
          <div className='w-24 h-24 mx-auto mb-6 rounded-full bg-muted flex items-center justify-center'>
            <Mail className='w-12 h-12 text-muted-foreground' />
          </div>
          <h3 className='text-2xl font-bold mb-4'>No articles yet</h3>
          <p className='text-muted-foreground max-w-md mx-auto mb-8'>
            I am currently working on some exciting content. Subscribe to be the
            first to know when I publish!
          </p>
          <button
            disabled
            className='px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition-opacity hover:cursor-not-allowed'
          >
            Get Notified
          </button>
        </div>
      )}

      {/* Newsletter CTA */}
      {posts.length > 0 && (
        <div className='mt-20 p-8 md:p-12 bg-linear-to-br from-primary/5 to-secondary/5 rounded-2xl border border-border text-center'>
          <h2 className='text-2xl md:text-3xl font-bold mb-4'>
            Stay in the loop
          </h2>
          <p className='text-muted-foreground mb-8 max-w-2xl mx-auto'>
            Join developers who read my articles. Get notified about new posts,
            frontend tips, and exclusive content. No spam, ever.
          </p>
          <form className='flex flex-col sm:flex-row gap-4 max-w-md mx-auto'>
            <input
              type='email'
              placeholder='Your email address'
              className='grow px-4 py-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary'
              required
            />
            <button
              disabled
              type='submit'
              className='  px-6 py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:opacity-90 transition-opacity hover:cursor-not-allowed'
            >
              Subscribe
            </button>
          </form>
          <p className='text-sm text-muted-foreground mt-4'>
            Unsubscribe anytime.
          </p>
        </div>
      )}
    </section>
  )
}
