'use client'

import { useState, useEffect } from 'react'
import { getPosts } from '@lib/posts/actions'
import Link from 'next/link'
import { Button } from '@components/shadcn/button'
import { Spinner } from '@components/shadcn/spinner'
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@components/shadcn/card'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@components/shadcn/table'
import { Input } from '@components/shadcn/input'
import { Plus, Pencil, Trash2 } from 'lucide-react'

export default function DashboardPage() {
  const [posts, setPosts] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [filter, setFilter] = useState('')

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await getPosts()
        setPosts(res)
      } catch (err) {
        console.error('Error fetching posts:', err)
        setError('Failed to load posts.')
      } finally {
        setLoading(false)
      }
    }

    fetchPosts()
  }, [])

  const handleDelete = (id: number) => {
    setPosts((prev) => prev.filter((post) => post.id !== id))
  }

  const filteredPosts = posts.filter((p) =>
    p.title.toLowerCase().includes(filter.toLowerCase())
  )

  return (
    <div className='flex flex-col gap-6 p-4 sm:p-6 max-w-6xl mx-auto w-full'>
      {/* Header */}
      <div className='flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3'>
        <h1 className='text-2xl font-semibold'>Dashboard</h1>
        <Link href='/dashboard/blog/new'>
          <Button className='flex items-center gap-2 w-full sm:w-auto'>
            <Plus size={16} />
            New Post
          </Button>
        </Link>
      </div>

      {/* Content */}
      {loading ? (
        <div className='flex items-center gap-2 text-sm text-muted-foreground'>
          <Spinner /> Loading posts...
        </div>
      ) : error ? (
        <p className='text-red-500 text-sm'>{error}</p>
      ) : (
        <Card className='mx-auto overflow-hidden max-w-[800px] w-full'>
          <CardHeader>
            <CardTitle>My Posts</CardTitle>
          </CardHeader>

          <CardContent className='overflow-x-auto'>
            {/* Search input */}
            <div className='flex items-center justify-between mb-4'>
              <Input
                placeholder='Search by title...'
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
                className='max-w-sm w-full'
              />
            </div>

            {/* Table */}
            {filteredPosts.length > 0 ? (
              <Table className='w-full'>
                <TableHeader>
                  <TableRow>
                    <TableHead className='w-[60px]'>ID</TableHead>
                    <TableHead className='w-[60%]'>Title</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead className='text-right'>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredPosts.map((post) => (
                    <TableRow key={post.id}>
                      <TableCell className='truncate max-w-[60px]'>
                        {post.id}
                      </TableCell>
                      <TableCell className='font-medium truncate max-w-[250px]'>
                        <Link
                          href={`/blog/${post.slug}`}
                          className='hover:underline text-blue-600'
                        >
                          {post.title}
                        </Link>
                      </TableCell>
                      <TableCell className='whitespace-nowrap'>
                        {post.date}
                      </TableCell>
                      <TableCell className='text-right flex justify-end gap-1'>
                        <Link href={`/dashboard/blog/${post.id}/edit`}>
                          <Button
                            variant='outline'
                            size='sm'
                            className='flex gap-1'
                          >
                            <Pencil size={14} /> Edit
                          </Button>
                        </Link>
                        <Button
                          variant='destructive'
                          size='sm'
                          onClick={() => handleDelete(post.id)}
                          className='flex gap-1'
                        >
                          <Trash2 size={14} /> Delete
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            ) : (
              <p className='text-sm text-muted-foreground text-center py-6'>
                No posts found.
              </p>
            )}
          </CardContent>
        </Card>
      )}
    </div>
  )
}
