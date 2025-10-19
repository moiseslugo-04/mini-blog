export default function AboutPage() {
  return (
    <section className='max-w-3xl mx-auto px-4 py-12 space-y-8 sm:space-y-10'>
      <h1 className='text-3xl sm:text-4xl font-bold text-primary mb-6 text-center sm:text-left'>
        About Me
      </h1>

      <div className='space-y-6 text-muted-foreground leading-relaxed text-sm sm:text-base'>
        <p>
          Hi, I’m{' '}
          <span className='font-semibold text-foreground'>Moises Lugo</span>, an
          aspiring frontend developer with a passion for building clean, fast,
          and well-structured web interfaces. This blog is my space to share my
          learning journey, personal projects, and experiments while exploring
          modern web development.
        </p>

        <p>
          I enjoy working with <strong>Next.js</strong>, <strong>React</strong>,
          <strong>TailwindCSS</strong>, and other modern frontend tools. I’m
          always looking for ways to optimize my workflow, improve user
          experience, and craft elegant solutions.
        </p>

        <p>
          Beyond coding, I’m naturally curious and love experimenting — trying
          new things, breaking stuff, and figuring out how to fix it. This blog
          reflects my mindset: learning by doing, sharing both successes and
          lessons, and continuously growing as a developer.
        </p>

        <p className='text-center sm:text-left font-medium text-foreground'>
          I’m currently seeking opportunities to contribute, learn, and grow in
          frontend development. Let’s build something great together!
        </p>
      </div>
    </section>
  )
}
