'use client'

import { useState } from 'react'
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
import { usePostForm } from '@features/blog/hooks/usePostForm'
import { PostDTO } from '@features/blog/types'
import { PostInput } from '../post.schema'

type PostFromProps =
  | {
      mode: 'edit'
      post: PostDTO
      label: string
      action: (postId: string, data: PostInput) => void
      tags?: TagDTO[]
    }
  | {
      mode: 'create'
      label: string
      action: (data: PostInput) => void
      tags?: TagDTO[]
    }
import TagManager from '@features/tags/components/TagManager'
import { InputControl } from '@shared/InputControl'
import { MarkEditor } from './MarkEditor'
import { LoadingFallback } from '@shared/LoadingFallback'
import { TagDTO } from '@features/tags/types'
import { TextAreaControl } from '@/shared/TextAreaControl'
export function PostForm(props: PostFromProps) {
  const { mode, action, label, tags = [] } = props
  const [imageLoading, setImageLoading] = useState(false)
  const { form, onSubmit, loading } = usePostForm({
    post: mode === 'edit' ? props.post : undefined,
  })

  const imageLoad = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return
    setImageLoading(true)
    try {
      const formData = new FormData()
      formData.append('file', file)
      const res = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      })
      const data = await res.json()
      form.setValue('imageUrl', data.url, {
        shouldValidate: true,
        shouldDirty: true,
      })
    } catch (error) {
      console.error(error)
    } finally {
      setImageLoading(false)
    }
  }
  const onSubmitForm = async (data: PostInput) => {
    if (mode === 'edit') {
      await action(props.post.id, data)
      return
    }
    await action(data)
  }
  return (
    <CardContent>
      {!loading && <LoadingFallback text='Creating Post....' />}
      <Form {...form}>
        <form onSubmit={onSubmit(onSubmitForm)} className='space-y-6'>
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
            initialSelectedTags={mode === 'edit' ? props.post.tags : []}
            maxTags={10}
          />
          <FormField
            name='imageUrl'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Image del post</FormLabel>
                <FormControl>
                  <Input type='file' accept='image/*' onChange={imageLoad} />
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
                      onChange={(e) => field.onChange(+e.target.value)}
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
                <Loader2 className='h-4 w-4 animate-spin' /> Saving...
              </>
            ) : (
              <>
                <Check className='h-4 w-4' />
                {label}
              </>
            )}
          </Button>
        </form>
      </Form>
    </CardContent>
  )
}
