import { useState, useActionState } from 'react'
import { deletePostAction } from '@features/posts/server/post.actions'

export function useDeletePost() {
  const [deleteId, setDeleteId] = useState<string | null>(null)
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [state, deletePost, isDeleting] = useActionState(deletePostAction, {
    error: null,
    success: false,
  })
  const handleDeleteClick = (id: string) => {
    setDeleteId(id)
    setIsDialogOpen(true)
  }
  const toggleDialog = () => setIsDialogOpen((prev) => !prev)
  // In your TablePost component
  const handleConfirmDelete = async () => {
    if (!deleteId) return
    deletePost(deleteId as string)
    setDeleteId(null)
    setIsDialogOpen(false)
  }

  return {
    toggleDialog,
    handleConfirmDelete,
    handleDeleteClick,
    isDialogOpen,
    isDeleting,
    state,
  }
}
