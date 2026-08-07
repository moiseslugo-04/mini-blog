import Image from 'next/image'
import { Code2, Terminal, Zap } from 'lucide-react'

export function ImageSection() {
  return (
    <div className='relative row-start-2 row-end-2  sm:col-start-2 sm:col-end-3 sm:place-items-center sm:row-start-1 sm:row-end-4 sm:-top-6  min-w-full -top-[20%] left-[20%] -z-30 max-[500px]:-top-[6%] max-[500px]:-left-[14%] max-[500px]:z-20'>
      <div className='sm:relative flex items-start  sm:justify-center sm:items-center lg:w-1/2 min-h-90'>
        {/* Glow principal */}
        <div className='absolute  w-105 h-105 rounded-full bg-primary/20 blur-3xl' />

        {/* card */}
        <div className='  relative  sm:top-0  sm:left-0 rotate-6 group'>
          {/* Glow exterior */}
          <div className='absolute -inset-1 rounded-4xl bg-primary/30 blur-xl' />

          {/* Card */}
          <div
            className='
            relative
            w-[50vw]
            max-w-75
            aspect-3/4
            overflow-hidden
            rounded-4xl
            border
            border-primary/40
            bg-card/50
            backdrop-blur-xl
            shadow-[0_0_50px_rgba(59,130,246,.25)]
          '
          >
            <Image
              src='/hero-img.png'
              alt='Moises Lugo'
              fill
              priority
              className='
              object-contain
              transition-transform
              duration-700
              group-hover:scale-105
            '
            />
          </div>

          {/* Botón inferior */}
          <div
            className='
         flex
            absolute
            bottom-4
            right-4
            w-12
            h-12
            rounded-full
            border
            border-primary/40
            bg-card/70
            backdrop-blur
            items-center
            justify-center
            shadow-lg
          '
          >
            <Zap className='w-5 h-5 text-primary' />
          </div>
        </div>

        {/* Icono izquierda superior */}
        <div
          className='
          flex
          absolute
          sm:left-8
          sm:top-24
          left-[10%]
          rounded-xl
          bg-card/60
          backdrop-blur
          border
          border-border
          shadow-xl
          max-[500px]:size-12
          size-13
          justify-center
          items-center

        '
        >
          <Code2 className='text-primary' />
        </div>

        {/* Icono izquierda inferior */}
        <div
          className='
          absolute
          bottom-1/4
          sm:left-0
          sm:bottom-24
          rounded-xl
          bg-card/60
          backdrop-blur
          border
          border-border
          shadow-xl
          max-[500px]:size-12
          flex 
          justify-center
          items-center
          size-13

        '
        >
          <Terminal className='text-primary' />
        </div>

        {/* Código de fondo */}
        <pre
          className='
          absolute
          -right-12
          top-35
          sm:top-18
          text-xs
          text-primary/20
          max-[500]:hidden
        '
        >
          {`const developer = {
  passion: "Code",
  focus: "Building",
  goal: "Create impact"
}`}
        </pre>

        {/* Decoración */}
        <div className='absolute right-10 bottom-24 opacity-40 hidden lg:block'>
          <svg width='120' height='120' fill='none'>
            <circle cx='10' cy='10' r='3' className='fill-primary' />
            <circle cx='60' cy='50' r='3' className='fill-primary' />
            <circle cx='100' cy='90' r='3' className='fill-primary' />

            <path
              d='M10 10L60 50L100 90'
              stroke='currentColor'
              className='text-primary'
              strokeWidth='1.5'
            />
          </svg>
        </div>
      </div>
    </div>
  )
}
