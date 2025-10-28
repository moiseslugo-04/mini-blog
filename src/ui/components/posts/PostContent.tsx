import ReactMarkdown from 'react-markdown'
import rehypeHighlight from 'rehype-highlight'
import rehypeRaw from 'rehype-raw'
import 'highlight.js/styles/github-dark.css'
export function PostContent({ content }: { content: string }) {
  return (
    <div className='w-full prose prose-invert prose-zinc max-w-none leading-relaxed text-sm sm:text-base'>
      <ReactMarkdown rehypePlugins={[rehypeHighlight, rehypeRaw]}>
        {content}
      </ReactMarkdown>
    </div>
  )
}
