import { postCount } from '@/lib/posts/queries'
import { stats } from '@/lib/utils/constants'

export async function Header() {
  const count = await postCount()
  return (
    <div className='text-center max-w-4xl mx-auto'>
      <h1 className='text-4xl md:text-6xl font-bold tracking-tight mb-6'>
        Blog & <span className='text-primary'>Articles</span>
      </h1>

      <p className='text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed'>
        Deep dives into frontend development, modern tooling, and practical
        experiments from real projects. Learn with me.
      </p>

      {/* Stats */}
      <div className='flex flex-wrap justify-center gap-8 md:gap-12 mb-8'>
        <div className='text-center'>
          <div className='text-3xl font-bold text-primary'>{count}</div>
          <div className='text-sm text-muted-foreground uppercase tracking-wider'>
            Articles
          </div>
        </div>
        {stats.map((stat, index) => (
          <div key={index} className='text-center'>
            <div className='text-3xl font-bold text-primary'>{stat.number}</div>
            <div className='text-sm text-muted-foreground uppercase tracking-wider'>
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
