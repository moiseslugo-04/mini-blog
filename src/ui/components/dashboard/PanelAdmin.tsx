import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@components/shadcn/card'
import { TablePost } from '@/ui/components/dashboard/TablePost'
import { Search } from '@components/dashboard/Search'
import { Suspense } from 'react'
import { Spinner } from '../shadcn/spinner'
import { getAllPosts } from '@features/posts/server/posts.repository'
export async function PanelAdmin({
  searchParams,
}: {
  searchParams: Promise<{ query: string }>
}) {
  const { query } = await searchParams
  const posts = await getAllPosts(query)
  return (
    <Card className='mx-auto overflow-hidden max-w-200 w-full'>
      <CardHeader>
        <CardTitle>My Posts</CardTitle>
      </CardHeader>

      <CardContent className='overflow-x-auto'>
        {/* Search input */}
        <Search />
        {/* Table */}
        <Suspense
          fallback={
            <p className='flex gap-2 m-auto'>
              Loading Posts <Spinner />
            </p>
          }
        >
          <Suspense fallback={<p>Loading posts...</p>}>
            <TablePost posts={posts} />
          </Suspense>
        </Suspense>
      </CardContent>
    </Card>
  )
}
