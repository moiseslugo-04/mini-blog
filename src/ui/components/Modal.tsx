'use client'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogDescription,
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
      <DialogContent aria-describedby='it'>
        <DialogHeader>
          <DialogTitle>Confirm Delete</DialogTitle>
          <DialogDescription className='text-sm'>
            This action cannot be undone. It will permanently delete the post.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className='flex flex-row   justify-center gap-5'>
          <Button
            variant='outline'
            onClick={() => onOpenChange()}
            className='size-fit block '
          >
            Cancel
          </Button>
          <Button
            variant='destructive'
            onClick={actions}
            className='size-fit  !bg-red-500 block'
          >
            Delete
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
