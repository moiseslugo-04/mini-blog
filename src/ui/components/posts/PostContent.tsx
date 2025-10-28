import ReactMarkdown from 'react-markdown'
import rehypeHighlight from 'rehype-highlight'
import remarkGfm from 'remark-gfm'
import 'highlight.js/styles/github-dark.css'

export function PostContent({ content }: { content: string }) {
  return (
    <div className='prose max-w-none text-sm sm:text-base prose-zinc dark:prose-invert'>
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeHighlight]}
        components={{
          h2: ({ node, ...props }) => (
            <h2
              className='mt-8 mb-2 text-xl font-bold text-gray-800 dark:text-gray-300'
              {...props}
            />
          ),
          h3: ({ node, ...props }) => (
            <h3
              className='mt-4 p-2 mb-2 text-lg font-semibold text-gray-800 dark:text-white'
              {...props}
            />
          ),
          code: ({ className, children, ...props }) => {
            const match = /language-(\w+)/.exec(className || '')
            return match ? (
              <pre className='rounded-xl bg-zinc-100 dark:bg-zinc-900 p-4 overflow-x-auto my-3 border border-zinc-200 dark:border-zinc-800'>
                <code className={className}>{children}</code>
              </pre>
            ) : (
              <code className='bg-zinc-200 dark:bg-zinc-800 px-1 py-0.5 rounded-md text-zinc-800 dark:text-zinc-200'>
                {children}
              </code>
            )
          },
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  )
}
