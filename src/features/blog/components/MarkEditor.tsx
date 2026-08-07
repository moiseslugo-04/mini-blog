import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs'
import { PostContent } from './PostContent'
import { Card } from '@/components/ui/card'
import matter from 'gray-matter'
import { useWatch } from 'react-hook-form'
import { TextAreaControl } from '../../../components/TextAreaControl'
export function MarkEditor() {
  const content = useWatch({ name: 'content' })
  const { content: markdown } = matter(content || '')

  return (
    <Tabs defaultValue='write'>
      <TabsList className='grid grid-cols-2 w-fit mb-2'>
        <TabsTrigger value='write'>Write</TabsTrigger>
        <TabsTrigger value='preview'>Preview</TabsTrigger>
      </TabsList>

      {/* Writing tab*/}
      <TabsContent value='write'>
        <TextAreaControl
          name='content'
          label='Content'
          placeholder={`Write your post in Markdown...Example:
                                          ## How I structured NextAuth v5
                                          \`\`\`ts export const authConfig = { /* ... */ }\`\`\``}
        />
      </TabsContent>

      {/* Preview tab*/}
      <TabsContent value='preview'>
        <Card className='bg-zinc-900 border-zinc-800 p-4 text-sm prose prose-invert max-w-none'>
          <PostContent
            content={markdown || 'Start typing to see the preview...'}
          />
        </Card>
      </TabsContent>
    </Tabs>
  )
}
