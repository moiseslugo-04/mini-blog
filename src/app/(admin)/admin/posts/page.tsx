import { PageHeader } from '@shared/PageHeader'
import { ContentTable } from '@features/dashboard/components/ContentTable'
import { getPostList } from '@/features/blog/blog.service'

export default async function PostsPage() {
  const posts = await getPostList()
  return (
    <div className='flex flex-1 flex-col overflow-hidden'>
      <main className='flex-1 overflow-y-auto'>
        <div className='mx-auto max-w-6xl px-4 py-8 lg:px-8'>
          <PageHeader
            title='Posts'
            description='Manage your blog posts and articles'
            action={{ label: 'New Post', href: '/admin/posts/new' }}
          />
          <div className='mt-8'>
            <ContentTable
              items={posts}
              emptyMessage='No posts yet. Create your first post!'
            />
          </div>
        </div>
      </main>
    </div>
  )
}
