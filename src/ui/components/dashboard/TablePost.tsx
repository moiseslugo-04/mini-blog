'use client'

import { startTransition, useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@components/shadcn/table'
import Link from 'next/link'
import { Button } from '@components/shadcn/button'
import { Pencil, Trash2 } from 'lucide-react'
import { getPosts, deletePost } from '@/lib/posts/actions'
import { useActionState } from 'react'
import { Spinner } from '../shadcn/spinner'
import { Modal } from '../Modal'
export function TablePost() {
  const searchParams = useSearchParams()
  const search = searchParams?.get('search') ?? ''

  const [posts, getPostsAction, isPending] = useActionState(async () => {
    return await getPosts(search)
  }, [])

  const [deleteId, setDeleteId] = useState<string | null>(null)
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  useEffect(() => {
    startTransition(() => {
      getPostsAction()
    })
  }, [search])

  const handleDeleteClick = (id: string) => {
    setDeleteId(id)
    setIsDialogOpen(true)
    console.log('lola')
  }
  const toggleDialog = () => setIsDialogOpen((prev) => !prev)
  const handleConfirmDelete = async () => {
    if (!deleteId) return
    try {
      await deletePost(deleteId) // Server action
      getPostsAction() // Refresh posts
    } catch (err) {
      console.error(err)
      alert('Failed to delete post')
    } finally {
      setDeleteId(null)
      setIsDialogOpen(false)
    }
  }

  return (
    <>
      {isPending ? (
        <div className='flex items-center justify-center py-4 gap-1 w-full'>
          <Spinner />
          Loading posts....
        </div>
      ) : (
        <>
          {posts.length > 0 ? (
            <Table className='w-full'>
              <TableHeader>
                <TableRow>
                  <TableHead>ID</TableHead>
                  <TableHead>Title</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead className='text-right'>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {posts.map((post) => {
                  const formattedDate = new Date(
                    post.createdAt
                  ).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'short',
                    day: 'numeric',
                  })
                  return (
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
                      <TableCell>{formattedDate}</TableCell>
                      <TableCell className='text-right flex gap-1 justify-end'>
                        <Link href={`/dashboard/blog/${post.id}/edit`}>
                          <Button variant='outline' size='sm'>
                            <Pencil size={14} /> Edit
                          </Button>
                        </Link>
                        <Button
                          variant='destructive'
                          size='sm'
                          onClick={() => handleDeleteClick(post.id)}
                        >
                          <Trash2 /> Delete
                        </Button>
                      </TableCell>
                    </TableRow>
                  )
                })}
              </TableBody>
            </Table>
          ) : (
            <p className='text-sm text-muted-foreground text-center py-6'>
              No posts found.
            </p>
          )}
        </>
      )}

      {/* Confirmation modal */}
      <Modal
        actions={handleConfirmDelete}
        open={isDialogOpen}
        onOpenChange={toggleDialog}
      />
    </>
  )
}
