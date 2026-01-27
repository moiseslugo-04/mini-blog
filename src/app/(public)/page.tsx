//import { Banner } from '@components/Banner'
import { Skills } from '@/shared/Skills'
import { WaveBackground } from '@/shared/WaveBackground'
import { Hero } from '@/shared/Hero'
export default function HomePage() {
  return (
    <section className='relative flex-1 flex flex-col items-center justify-center gap-5  py-12 px-4 sm:px-6 md:px-8'>
      <WaveBackground />
      <Hero />
      <Skills />
    </section>
  )
}
