'use client'

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
import { Modal } from '../Modal'
import { formattedDate } from '@/lib/utils/formattedDate'
import { useDeletePost } from '@/lib/hooks/useDeletePost'
import { PostDTO } from '@/lib/features/posts/types'
export function TablePost({ posts }: { posts: PostDTO[] }) {
  const { handleConfirmDelete, handleDeleteClick, isDialogOpen, toggleDialog } =
    useDeletePost()
  return (
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
              const date = formattedDate(post.createdAt)
              return (
                <TableRow key={post.id}>
                  <TableCell className='truncate max-w-15'>{post.id}</TableCell>
                  <TableCell className='font-medium truncate max-w-62.5'>
                    <Link
                      href={`/blog/${post.slug}`}
                      className='hover:underline text-blue-600'
                    >
                      {post.title}
                    </Link>
                  </TableCell>
                  <TableCell>{date}</TableCell>
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
      {/* Confirmation modal */}
      <Modal
        actions={handleConfirmDelete}
        open={isDialogOpen}
        onOpenChange={toggleDialog}
      />
    </>
  )
}
