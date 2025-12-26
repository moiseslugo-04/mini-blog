//import { Banner } from '@components/Banner'
import { Skills } from '@/ui/components/Skills'
import { WaveBackground } from '@/ui/components/WaveBackground'
import { Hero } from '@components/Hero'
export default function HomePage() {
  return (
    <section className='relative flex-1 flex flex-col items-center justify-center gap-5  py-12 px-4 sm:px-6 md:px-8 overflow-hidden'>
      <WaveBackground />
      <Hero />
      <Skills />
    </section>
  )
}
