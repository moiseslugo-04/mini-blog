'use client'

import { Input } from '@shared/ui/input'
import { Button } from '@shared/ui/button'
import { CardContent } from '@shared/ui/card'
import 'highlight.js/styles/github-dark.css'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/shared/ui/form'
import { Loader2, Check } from 'lucide-react'
import Image from 'next/image'
import { PostDTO } from '@features/blog/types'
import { PostInput } from '../post.schema'

type CreateForm = {
  mode: 'create'
  defaultValues?: undefined
  tags: TagDTO[]
  onSubmit: (data: PostInput) => Promise<void>
}

type EditForm = {
  mode: 'edit'
  tags: TagDTO[]
  defaultValues?: PostDTO
  onSubmit: (postId: string, updates: PostInput) => Promise<void>
}
type FormProps = CreateForm | EditForm

import TagManager from '@features/tags/components/TagManager'
import { InputControl } from '@shared/InputControl'
import { MarkEditor } from './MarkEditor'
import { LoadingFallback } from '@shared/LoadingFallback'
import { TagDTO } from '@features/tags/types'
import { TextAreaControl } from '@/shared/TextAreaControl'
import { usePostController } from '../hooks/usePostController'

export function PostForm({ onSubmit, tags, mode, defaultValues }: FormProps) {
  const { selectedTags, imageLoading, uploadImage, loading, form } =
    usePostController({ defaultValues })
  const handleSubmit = async (data: PostInput) => {
    const postId = defaultValues?.id as string
    if (mode === 'edit' && postId) {
      await onSubmit(postId, data)
    } else if (mode === 'create') {
      await onSubmit(data)
    }
  }

  return (
    <CardContent>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)} className='space-y-6'>
          <InputControl
            label='Title'
            placeholder='Ex: How to use Next.js with Prisma'
            name='title'
          />
          <TextAreaControl
            high={200}
            placeholder='sow'
            name='description'
            label='Description'
          />

          <MarkEditor />
          <TagManager
            availableTags={tags}
            selectedTags={selectedTags}
            maxTags={10}
          />
          <FormField
            name='imageUrl'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Image del post</FormLabel>
                <FormControl>
                  <Input type='file' accept='image/*' onChange={uploadImage} />
                </FormControl>
                <FormMessage />
                {imageLoading ? (
                  <LoadingFallback text='Loading Image...' />
                ) : (
                  field.value && (
                    <div className='mt-2'>
                      <Image
                        alt='preview'
                        src={field.value}
                        width={200}
                        height={120}
                        className='rounded-md border mx-auto'
                      />
                    </div>
                  )
                )}
              </FormItem>
            )}
          />
          <div className='grid grid-cols-2 gap-4'>
            <FormField
              name='readTime'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Reading time (min)</FormLabel>
                  <FormControl>
                    <Input
                      type='number'
                      placeholder='Ej: 5'
                      {...field}
                      onChange={(e) => {
                        const time = Number(e.target.value)
                        if (time <= 0) return
                        form.setValue('readTime', time, {
                          shouldDirty: true,
                          shouldValidate: true,
                        })
                      }}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <Button type='submit' className='w-full flex items-center gap-2'>
            {loading ? (
              <>
                <Loader2 className='h-4 w-4 animate-spin' />
                {mode === 'create' ? 'Creating post...' : 'Updating posts...'}
              </>
            ) : (
              <>
                <Check className='h-4 w-4' />
                {mode === 'create' ? 'Create new Post' : 'Update post'}
              </>
            )}
          </Button>
        </form>
      </Form>
    </CardContent>
  )
}
