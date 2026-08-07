export function HeroContent() {
  return (
    <div className='space-y-3 pl-4 col-span-2 sm:col-end-2 '>
      {/* Headline */}
      <div className='flex flex-col gap-2 w-full  text-start'>
        <h1 className='flex gap-2 text-3xl  lg:text-4xl font-bold tracking-tight mb-4'>
          <span className='block'>Hi I'm,</span>
          <span className='text-primary'>Moises Lugo</span>
        </h1>

        <p className='text-xl md:text-2xl text-muted-foreground max-w-xl'>
          Full Stack{' '}
          <span className='font-semibold text-foreground'>JavaScript</span>{' '}
          Developer
        </p>
      </div>

      {/* Mission Statement */}
      <div className=''>
        <p className='text-lg text-muted-foreground leading-relaxed text-left w-70 pb-2 '>
          I build scalable an user-friendly web application with React, Next Js,
          Node Js and PostgreSQL
        </p>

        {/* Quick Stats */}
        <div className='flex flex-wrap justify-center items-center lg:justify-start not-only-of-type: gap-4  border-t border-border'></div>
      </div>
    </div>
  )
}
