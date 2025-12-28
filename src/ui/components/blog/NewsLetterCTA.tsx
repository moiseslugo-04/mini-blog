export function NewsLetterCTA() {
  return (
    <div className='mt-20 p-8 md:p-12 bg-linear-to-br from-primary/5 to-secondary/5 rounded-2xl border border-border text-center'>
      <h2 className='text-2xl md:text-3xl font-bold mb-4'>Stay in the loop</h2>
      <p className='text-muted-foreground mb-8 max-w-2xl mx-auto'>
        Join developers who read my articles. Get notified about new posts,
        frontend tips, and exclusive content. No spam, ever.
      </p>
      <form className='flex flex-col sm:flex-row gap-4 max-w-md mx-auto'>
        <input
          type='email'
          placeholder='Your email address'
          className='grow px-4 py-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary'
          required
        />
        <button
          disabled
          type='submit'
          className='  px-6 py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:opacity-90 transition-opacity cursor-not-allowed!'
        >
          Subscribe
        </button>
      </form>
      <p className='text-sm text-muted-foreground mt-4'>Unsubscribe anytime.</p>
    </div>
  )
}
