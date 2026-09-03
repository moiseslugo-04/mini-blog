export default function AboutPage() {
  return (
    <section className='mx-auto w-full max-w-4xl px-4 py-12 sm:px-6 sm:py-16'>
      <div className='space-y-10'>
        {/* Header */}

        <div className='max-w-2xl space-y-4'>
          <p className='text-sm font-medium uppercase tracking-wider text-primary'>
            Sobre mim
          </p>

          <h1 className='text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl'>
            Transformando ideias em aplicações web completas.
          </h1>

          <p className='text-base leading-7 text-muted-foreground sm:text-lg'>
            Sou Moises Lugo, estudante e Desenvolvedor Full Stack Júnior,
            atualmente mais focado no desenvolvimento de back-end com Python e
            na construção de aplicações web modernas utilizando tecnologias
            como React, Next.js, TypeScript, FastAPI e PostgreSQL.
          </p>
        </div>

        {/* About */}

        <div className='max-w-3xl space-y-6 text-sm leading-7 text-muted-foreground sm:text-base'>
          <p>
            Minha jornada no desenvolvimento web começou pelo front-end, onde
            desenvolvi interesse por criar interfaces que fossem não apenas
            visualmente organizadas, mas também responsivas, intuitivas e bem
            estruturadas. Com o tempo, comecei a explorar o back-end para
            entender melhor como as diferentes partes de uma aplicação se
            conectam e como uma aplicação funciona além da interface.
          </p>

          <p>
            Atualmente, estou direcionando minha evolução para o desenvolvimento
            Full Stack, com maior foco no back-end utilizando{' '}
            <strong className='font-medium text-foreground'>
              Python, FastAPI e PostgreSQL
            </strong>
            , sem deixar de trabalhar com{' '}
            <strong className='font-medium text-foreground'>
              JavaScript, TypeScript, React e Next.js
            </strong>{' '}
            no front-end.
          </p>

          <p>
            Na prática, venho desenvolvendo aplicações completas que envolvem
            criação de APIs, integração com bancos de dados, autenticação,
            operações CRUD, modelagem de dados, validação, tratamento de erros
            e integração entre front-end e back-end. Também trabalho com
            componentes reutilizáveis, interfaces responsivas e organização de
            código buscando manter os projetos fáceis de entender e evoluir.
          </p>

          <p>
            Grande parte da minha experiência foi construída através de
            projetos próprios que simulam cenários de aplicações reais. Entre
            eles, desenvolvi uma aplicação de e-commerce Full Stack com
            autenticação, gerenciamento de produtos, operações CRUD,
            integração com banco de dados e painel administrativo. Esses
            projetos me ajudaram a desenvolver não apenas minhas habilidades
            técnicas, mas também minha capacidade de entender problemas,
            estruturar soluções e tomar decisões durante o desenvolvimento.
          </p>

          <p>
            Ainda estou em processo de aprendizado e evolução, mas já possuo uma
            base prática que me permite trabalhar na construção de aplicações
            reais e entender o fluxo de desenvolvimento de um produto de ponta
            a ponta. Meu objetivo agora é transformar essa experiência em
            experiência profissional, aprendendo com outros desenvolvedores,
            recebendo feedback e contribuindo para projetos reais.
          </p>

          <p>
            Acredito que a melhor forma de evoluir como desenvolvedor é
            construindo, testando, investigando problemas e buscando entender
            por que as coisas funcionam. Por isso, continuo estudando e
            aprimorando meus projetos enquanto busco constantemente maneiras
            melhores de resolver problemas.
          </p>
        </div>

        {/* Current goal */}

        <div className='max-w-3xl rounded-xl border bg-muted/30 p-6 sm:p-8'>
          <p className='text-sm font-medium uppercase tracking-wider text-primary'>
            O que estou buscando
          </p>

          <h2 className='mt-3 text-xl font-semibold tracking-tight sm:text-2xl'>
            Minha próxima etapa é crescer através de experiência profissional.
          </h2>

          <p className='mt-3 text-sm leading-7 text-muted-foreground sm:text-base'>
            Estou buscando minha primeira oportunidade profissional como
            estagiário ou Desenvolvedor Júnior na área de desenvolvimento web,
            onde possa aplicar meus conhecimentos em projetos reais, trabalhar
            ao lado de desenvolvedores mais experientes e continuar evoluindo
            como profissional.
          </p>

          <p className='mt-3 text-sm leading-7 text-muted-foreground sm:text-base'>
            Tenho interesse principalmente em oportunidades de desenvolvimento
            Full Stack, com foco em back-end utilizando Python e FastAPI, mas
            também estou preparado para atuar no front-end com React, Next.js e
            TypeScript. Busco um ambiente onde possa contribuir, assumir
            responsabilidades de forma gradual, aprender com feedback e
            desenvolver soluções que gerem valor para a equipe e para o
            produto.
          </p>
        </div>

        {/* Tech stack */}

        <div className='border-t pt-8'>
          <h2 className='text-lg font-semibold'>Stack atual</h2>

          <div className='mt-4 flex flex-wrap gap-2'>
            {[
              'JavaScript',
              'TypeScript',
              'React',
              'Next.js',
              'Python',
              'FastAPI',
              'PostgreSQL',
              'Prisma',
              'Tailwind CSS',
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

