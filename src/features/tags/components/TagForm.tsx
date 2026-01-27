import { Button } from '@/shared/ui/button'
import { Input } from '@/shared/ui/input'
import { Plus } from 'lucide-react'
import { useState } from 'react'

import {
  Dialog,
  DialogFooter,
  DialogHeader,
  DialogTrigger,
} from '@shared/ui/dialog'
import { Card, CardContent, CardHeader } from '@/shared/ui/card'
import { DialogClose, DialogContent } from '@radix-ui/react-dialog'
export function TagForm({
  handleAddNewTag,
}: {
  handleAddNewTag: (name: string) => void
}) {
  const [newTagInput, setNewTagInput] = useState('')
  const [tagError, setTagError] = useState('')
  const [open, setOpen] = useState(false)

  // Handle new Tag
  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value
    setNewTagInput(value)
  }
  const handleSubmit = () => {
    handleAddNewTag(newTagInput)
    setNewTagInput('')
    setOpen(false)
  }
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className='my-2'>
          Add Tag{' '}
          <span className='text-base'>
            <Plus size={18} />
          </span>
        </Button>
      </DialogTrigger>
      <DialogContent
        className=' absolute
  max-w-md
  rounded-xl
  bg-white
  p-6
  shadow-xl
'
      >
        <Card className='p-4 my-4 flex flex-col gap-3'>
          <DialogHeader className='mb-4'>
            <h3 className='text-lg font-semibold text-gray-400'>Add new tag</h3>
            <p className='text-sm text-gray-500'>
              Create a tag to organize your posts
            </p>
          </DialogHeader>
          <CardContent>
            <div>
              <div className='flex flex-col gap-4'>
                <Input
                  id={'tag'}
                  type='text'
                  value={newTagInput}
                  onChange={handleInput}
                  placeholder='Write a new tag (max. 15 characters)'
                  maxLength={15}
                  className='
    w-full
    px-4 py-2.5
    rounded-lg
    border border-gray-300
    bg-white!
    text-gray-900
    placeholder:text-gray-400

    focus:border-blue-500
    focus:ring-2 focus:ring-blue-500/20
    focus:outline-none

    transition-colors duration-200
  '
                />
                <DialogFooter>
                  <DialogClose>
                    <Button type='button' variant={'outline'}>
                      Cancel
                    </Button>
                  </DialogClose>
                  <Button onClick={handleSubmit}>create</Button>
                </DialogFooter>
              </div>
              {tagError && (
                <p className='text-red-500 text-sm mt-2'>{tagError}</p>
              )}
            </div>
          </CardContent>
        </Card>
      </DialogContent>
    </Dialog>
  )
}
