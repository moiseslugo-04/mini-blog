export default function AboutPage() {
  return (
    <section className='max-w-3xl mx-auto px-4 py-12 space-y-6 text-center sm:text-left'>
      <h1 className='text-3xl sm:text-4xl font-bold text-primary mb-4'>
        About Me
      </h1>

      <div className='space-y-4 text-muted-foreground leading-relaxed text-sm sm:text-base'>
        <p>
          I'm <span className='font-semibold text-foreground'>Moises Lugo</span>
          , an aspiring frontend developer passionate about building clean,
          fast, and well-structured interfaces. This blog is my space to share
          my learning journey, personal projects, and experiments while
          exploring the world of web development.
        </p>

        <p>
          I love diving deep into <strong>Next.js</strong>,{' '}
          <strong>React</strong>, <strong>TailwindCSS</strong>, and other modern
          frontend tools — always looking for ways to refine my workflow and
          craft better user experiences.
        </p>

        <p>
          Beyond coding, I’m naturally curious — I like experimenting, breaking
          things, and figuring out how to fix them. This blog reflects that
          mindset: learning by doing, sharing what works (and what doesn’t), and
          continuously growing as a developer.
        </p>
      </div>
    </section>
  )
}
