import { Github, Linkedin } from 'lucide-react'

export function Footer() {
  return (
    <footer className='w-full py-2'>
      <div className='container max-w-6xl mx-auto px-4'>
        <div className='flex justify-center items-center gap-6'>
          {/* Copyright */}
          <p className='text-xs text-muted-foreground text-center'>
            © {new Date().getFullYear()} Moises Lugo. All rights reserved.
          </p>

          {/* Social Links */}
          <div className='flex items-center gap-3'>
            <a
              href='https://github.com/moiseslugo-04'
              target='_blank'
              rel='noopener noreferrer'
              aria-label='GitHub'
              className='text-muted-foreground hover:text-primary transition-colors'
            >
              <Github className='w-5 h-5' />
            </a>

            <a
              href='https://linkedin.com/in/moises-lugo-352b892a4'
              target='_blank'
              rel='noopener noreferrer'
              aria-label='LinkedIn'
              className='text-muted-foreground hover:text-primary transition-colors'
            >
              <Linkedin className='w-5 h-5' />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
