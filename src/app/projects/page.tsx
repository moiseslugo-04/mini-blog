export default function ProjectPage() {
  return (
    <section className='w-full h-full mt-60 flex items-center justify-center'>
      <div className='max-w-md text-center space-y-6'>
        {/* Icon / Visual */}
        <div className='mx-auto h-16 w-16 rounded-full bg-muted flex items-center justify-center'>
          <span className='text-2xl'>🚧</span>
        </div>

        {/* Title */}
        <h1 className='text-2xl font-semibold tracking-tight'>
          Page under development
        </h1>

        {/* Description */}
        <p className='text-muted-foreground text-sm leading-relaxed'>
          I’m currently working on this section.
          <br />
          The final version will be available soon.
        </p>

        {/* Subtle divider */}
        <div className='h-px w-24 bg-border mx-auto' />

        {/* Footer note */}
        <p className='text-xs text-muted-foreground'>
          Thank you for your patience.
        </p>
      </div>
    </section>
  )
}
