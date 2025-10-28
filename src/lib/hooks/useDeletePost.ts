import { useState, useActionState, startTransition } from 'react'
import { deletePost } from '@/lib/posts/actions/delete'

export function useDeletePost() {
  const [deleteId, setDeleteId] = useState<string | null>(null)
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [state, deletePostAction, isDeleting] = useActionState(deletePost, {
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
    startTransition(() => deletePostAction(deleteId as string))

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
