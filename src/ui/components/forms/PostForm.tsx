'use client'

import { useState } from 'react'
import { UseFormReturn } from 'react-hook-form'
import { Input } from '@components/shadcn/input'
import { Textarea } from '@components/shadcn/textarea'
import { Button } from '@components/shadcn/button'
import { Card, CardContent } from '@components/shadcn/card'
import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from '@components/shadcn/tabs'
import 'highlight.js/styles/github-dark.css'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@components/shadcn/form'
import { Loader2, Check } from 'lucide-react'
import matter from 'gray-matter'
import { PostSchema } from '@/lib/schemas/posts'
import Image from 'next/image'
import { PostContent } from '../posts/PostContent'
interface PostFromProps {
  form: UseFormReturn<PostSchema>
  OnSubmit: (data: PostSchema) => void
  loading: boolean
  action: string
}
export function PostForm({ form, OnSubmit, loading, action }: PostFromProps) {
  const [imageLoading, setImageLoading] = useState(false)
  const contentValue = form.watch('content')
  const { content: markdownContent } = matter(contentValue || '')
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

  return (
    <CardContent>
      {loading || (imageLoading && <p>Loading...</p>)}
      <Form {...form}>
        <form onSubmit={form.handleSubmit(OnSubmit)} className='space-y-6'>
          <FormField
            name='title'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Title</FormLabel>
                <FormControl>
                  <Input
                    placeholder='Ex: How to use Next.js with Prisma'
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Tabs defaultValue='write'>
            <TabsList className='grid grid-cols-2 w-fit mb-2'>
              <TabsTrigger value='write'>Write</TabsTrigger>
              <TabsTrigger value='preview'>Preview</TabsTrigger>
            </TabsList>

            {/* Writing tab*/}
            <TabsContent value='write'>
              <FormField
                name='content'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Content</FormLabel>
                    <FormControl>
                      <Textarea
                        {...field}
                        className='h-80 bg-zinc-900 border-zinc-800 resize-none'
                        placeholder={`Write your post in Markdown...
                
Example:

## How I structured NextAuth v5

\`\`\`ts
export const authConfig = { /* ... */ }
\`\`\`
`}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </TabsContent>

            {/* Preview tab*/}
            <TabsContent value='preview'>
              <Card className='bg-zinc-900 border-zinc-800 p-4 text-sm prose prose-invert max-w-none'>
                <PostContent
                  content={
                    markdownContent || 'Start typing to see the preview...'
                  }
                />
              </Card>
            </TabsContent>
          </Tabs>

          <FormField
            name='category'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Categoría</FormLabel>
                <FormControl>
                  <Input placeholder='Tecnología, Diseño, etc...' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
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
                  <p>Loading image...</p>
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

          <Button
            type='submit'
            disabled={loading}
            className='w-full flex items-center gap-2'
          >
            {loading ? (
              <>
                <Loader2 className='h-4 w-4 animate-spin' /> Saving...
              </>
            ) : (
              <>
                <Check className='h-4 w-4' />
                {action}
              </>
            )}
          </Button>
        </form>
      </Form>
    </CardContent>
  )
}
