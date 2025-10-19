'use client'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from '@components/shadcn/dialog'
import { Button } from '@components/shadcn/button'
export function Modal({
  open,
  onOpenChange,
  actions,
}: {
  open: boolean
  onOpenChange: () => void
  actions: () => void
}) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Confirm Delete</DialogTitle>
        </DialogHeader>
        <p>
          Are you sure you want to delete this post? This action cannot be
          undone.
        </p>
        <DialogFooter className='flex gap-2 justify-end'>
          <Button variant='outline' onClick={() => onOpenChange()}>
            Cancel
          </Button>
          <Button variant='destructive' onClick={actions}>
            Delete
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
