import { Mail } from 'lucide-react'
export function PostEmptyState() {
  return (
    <div className='text-center py-20'>
      <div className='w-24 h-24 mx-auto mb-6 rounded-full bg-muted flex items-center justify-center'>
        <Mail className='w-12 h-12 text-muted-foreground' />
      </div>
      <h3 className='text-2xl font-bold mb-4'>No articles yet</h3>
      <p className='text-muted-foreground max-w-md mx-auto mb-8'>
        I am currently working on some exciting content. Subscribe to be the
        first to know when I publish!
      </p>
      <button
        disabled
        className='px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition-opacity cursor-not-allowed!'
      >
        Get Notified
      </button>
    </div>
  )
}
