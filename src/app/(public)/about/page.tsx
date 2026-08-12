export default function AboutPage() {
  return (
    <section className='mx-auto w-full max-w-4xl px-4 py-12 sm:px-6 sm:py-16'>
      <div className='space-y-10'>
        {/* Header */}
        <div className='max-w-2xl space-y-4'>
          <p className='text-sm font-medium uppercase tracking-wider text-primary'>
            About me
          </p>

          <h1 className='text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl'>
            Building web applications from idea to implementation.
          </h1>

          <p className='text-base leading-7 text-muted-foreground sm:text-lg'>
            I&apos;m Moises Lugo, a junior full stack developer focused on
            building modern, responsive, and maintainable web applications with
            React, Next.js, and TypeScript.
          </p>
        </div>

        {/* About */}
        <div className='max-w-3xl space-y-6 text-sm leading-7 text-muted-foreground sm:text-base'>
          <p>
            My journey into web development started with frontend development,
            where I became interested in creating interfaces that are not only
            visually clean, but also intuitive, responsive, and well structured.
            Over time, I started exploring the backend side of applications and
            became interested in understanding how the different parts of a
            product work together.
          </p>

          <p>
            Today, I work with technologies such as{' '}
            <strong className='font-medium text-foreground'>
              JavaScript, TypeScript, React, Next.js, Tailwind CSS, PostgreSQL,
              and Prisma
            </strong>
            . I enjoy working across the stack, from building reusable
            components and responsive interfaces to designing data models,
            integrating APIs, implementing authentication, and connecting
            applications to databases.
          </p>

          <p>
            Most of my experience comes from building personal projects that
            simulate real-world applications. For example, I have developed a
            full stack e-commerce application with authentication, CRUD
            operations, product management, database integration, and an
            administrative dashboard. These projects have helped me develop not
            only technical skills, but also a better understanding of
            architecture, problem solving, and the decisions involved in
            building maintainable applications.
          </p>

          <p>
            I believe the best way to improve as a developer is by building,
            breaking, investigating, and rebuilding. I&apos;m constantly
            learning new concepts, improving existing projects, and looking for
            better ways to solve problems rather than simply making something
            work.
          </p>
        </div>

        {/* Current goal */}
        <div className='max-w-3xl rounded-xl border bg-muted/30 p-6 sm:p-8'>
          <p className='text-sm font-medium uppercase tracking-wider text-primary'>
            What I&apos;m looking for
          </p>

          <h2 className='mt-3 text-xl font-semibold tracking-tight sm:text-2xl'>
            My next step is to grow through real-world experience.
          </h2>

          <p className='mt-3 text-sm leading-7 text-muted-foreground sm:text-base'>
            I&apos;m currently looking for an internship or junior position in
            web development where I can work alongside experienced developers,
            contribute to real products, and continue developing my skills
            across the stack. I&apos;m especially interested in environments
            where I can take responsibility, solve real problems, receive
            feedback, and keep growing as a developer.
          </p>
        </div>

        {/* Tech stack */}
        <div className='border-t pt-8'>
          <h2 className='text-lg font-semibold'>Current stack</h2>

          <div className='mt-4 flex flex-wrap gap-2'>
            {[
              'JavaScript',
              'TypeScript',
              'React',
              'Next.js',
              'Tailwind CSS',
              'PostgreSQL',
              'Prisma',
              'Git & GitHub',
            ].map((technology) => (
              <span
                key={technology}
                className='rounded-md border bg-background px-3 py-1.5 text-sm text-muted-foreground'
              >
                {technology}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
