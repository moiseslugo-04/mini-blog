import { Code2, Sparkles } from 'lucide-react'

export function Banner() {
  return (
    <div className='relative w-full overflow-hidden rounded-2xl border border-border bg-gradient-to-br from-primary/10 via-background to-background p-10 shadow-sm backdrop-blur-sm'>
      <div className='absolute -top-10 -right-10 text-primary/30'>
        <Sparkles size={140} />
      </div>
      <div className='relative z-10 flex flex-col items-center text-center gap-3'>
        <div className='flex items-center gap-2 text-primary'>
          <Code2 size={26} />
          <span className='font-semibold tracking-wide uppercase text-sm'>
            MoisesDev Blog
          </span>
        </div>
        <h1 className='text-4xl font-bold tracking-tight'>
          Continuous learning, real code
        </h1>
        <p className='max-w-2xl text-muted-foreground text-sm md:text-base'>
          <q>“Build, break, learn and share — that is the developer is way.”</q>
        </p>
      </div>
    </div>
  )
}
