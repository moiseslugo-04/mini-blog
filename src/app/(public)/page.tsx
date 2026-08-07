//import { Banner } from '@components/Banner'
import { Skills } from '@features/home/Skills'
import { Hero } from '@/features/home/Hero'
export default function HomePage() {
  return (
    <section className='relative flex-1 flex flex-col items-center justify-around gap-5   px-4 sm:px-6 md:px-8'>
      <Hero />
      <Skills />
    </section>
  )
}
