
export const mockProjects = [
  {
    projectName: 'Gechis E-commerce',
    description:
      'Plataforma de e-commerce Full Stack com gerenciamento de produtos, autenticação, carrinho de compras e painel administrativo.',

    details: `Este projeto foi desenvolvido com uma visão voltada para um cenário real de mercado. Meu objetivo não foi apenas criar uma demonstração, mas desenvolver uma aplicação de e-commerce que refletisse como produtos modernos podem ser estruturados e desenvolvidos em um ambiente de produção.

Como desenvolvedor, trabalhei na construção da interface, buscando uma UI limpa, uma arquitetura organizada e uma boa experiência do usuário, utilizando ferramentas modernas como Next.js, React e Tailwind CSS.

O projeto também envolve desenvolvimento Full Stack, permitindo trabalhar na integração entre front-end e back-end, modelagem de dados, comunicação com APIs e fluxos comuns de uma aplicação real. Durante o desenvolvimento, pude praticar decisões relacionadas à arquitetura, organização do código e implementação de funcionalidades de uma aplicação completa.`,

    imageUrl: '/gechis-picture.png',
    slug: 'gechis-e-commerce',
    technologies: [
      {
        name: 'Next.js',
        icon: '/icons/nextjs.svg',
        description:
          'Framework utilizado para roteamento, Server Components e otimização de performance.',
      },
      {
        name: 'React',
        icon: '/icons/react.svg',
        description:
          'Utilizado para o desenvolvimento da interface baseada em componentes reutilizáveis e uma arquitetura de front-end organizada.',
      },
      {
        name: 'TypeScript',
        icon: '/icons/ts.svg',
        description:
          'Utilizado para tipagem estática, contribuindo para a qualidade do código e uma melhor experiência durante o desenvolvimento.',
      },
      {
        name: 'Tailwind CSS',
        icon: '/icons/tailwindcss.svg',
        description:
          'Framework CSS utility-first utilizado para construir uma interface responsiva e visualmente consistente.',
      },
      {
        name: 'Prisma',
        icon: '/icons/prisma.svg',
        description:
          'ORM utilizado para acesso ao banco de dados e modelagem dos dados.',
      },
    ],

    liveDemoUrl: 'https://www.gechis.com/',
    repoUrl: 'https://github.com/moiseslugo-04/nextjs-ecommerce',
  },

  {
    projectName: 'Alianza Elite',

    description:
      'Landing page responsiva e multilíngue para uma comunidade de liderança, desenvolvida para apresentar a organização, atrair novos contatos e proporcionar uma experiência de usuário envolvente.',

    details: `Alianza Elite é uma landing page responsiva desenvolvida para uma comunidade de liderança dentro da LiveGood. O principal objetivo foi criar uma presença digital profissional e envolvente, capaz de apresentar a proposta da comunidade, disponibilizar informações relevantes e ajudar na atração de novos contatos.

O projeto foi desenvolvido com React, com foco na criação de componentes reutilizáveis, design responsivo e uma estrutura de aplicação organizada e fácil de manter.

Um dos principais recursos do projeto é a experiência multilíngue, com suporte para três idiomas: inglês, espanhol e português. Implementei um sistema de internacionalização que permite ao usuário alternar entre os idiomas e manter sua preferência entre diferentes sessões.

Também utilizei n8n para automatizar parte do fluxo de tradução, facilitando o gerenciamento e o processamento do conteúdo utilizado nos diferentes idiomas.

A aplicação utiliza React Context API para gerenciamento de estado compartilhado e localStorage para persistir a preferência de idioma do usuário entre sessões. Também implementei custom hooks para separar e reutilizar lógicas da aplicação, incluindo gerenciamento de idioma, formulário de contato, funcionalidades da galeria e comportamento de rolagem.

A landing page também conta com galeria de imagens, interações de carrossel, funcionalidade de contato, layouts responsivos e componentes de interface reutilizáveis.

Este projeto me permitiu praticar a construção de uma aplicação orientada a um cenário real, trabalhando com arquitetura de componentes, gerenciamento de estado, internacionalização, automação de workflows, design responsivo e reutilização de lógica.`,

    imageUrl: '/alianza-elite.png',
    slug: 'alianza-elite',

    technologies: [
      {
        name: 'React',
        icon: '/icons/react.svg',
        description:
          'Biblioteca utilizada para construir a interface por meio de uma arquitetura baseada em componentes reutilizáveis.',
      },
      {
        name: 'JavaScript',
        icon: '/icons/js.svg',
        description:
          'Linguagem principal utilizada para implementar a lógica da aplicação, interações e funcionalidades reutilizáveis.',
      },
      {
        name: 'Tailwind CSS',
        icon: '/icons/tailwindcss.svg',
        description:
          'Framework CSS utility-first utilizado para construir uma interface responsiva e visualmente consistente.',
      },
      {
        name: 'n8n',
        icon: '/icons/n8n.svg',
        description:
          'Ferramenta de automação de workflows utilizada para automatizar parte do processo de tradução e gerenciamento de conteúdo multilíngue.',
      },
    ],

    liveDemoUrl: 'https://alianzaelite.netlify.app/',

    repoUrl: 'https://github.com/moiseslugo-04/Alianza_Elite',
  },

  {
    projectName: 'Personal Portfolio',

    description:
      'Portfólio de desenvolvedor Full Stack desenvolvido com Next.js, React e TypeScript, com um back-end em Python utilizando FastAPI e Pydantic.',

    details: `Este portfólio foi desenvolvido como uma plataforma pessoal para apresentar minhas habilidades, projetos e experiência como desenvolvedor Full Stack.

O front-end foi desenvolvido com Next.js, React e TypeScript, com foco em uma experiência de usuário limpa, responsiva e moderna. Tailwind CSS é utilizado para estilização e para manter um sistema visual consistente em toda a aplicação.

O projeto também possui um back-end desenvolvido com Python e FastAPI. Utilizo Pydantic para validação de dados e definição de schemas, permitindo que a API trabalhe com dados estruturados e validados.

Este projeto também faz parte do meu processo de aprendizado enquanto continuo desenvolvendo minhas habilidades de back-end, trabalhando com arquitetura de APIs, métodos HTTP, tratamento de requisições e respostas, validação e integração com banco de dados.

O objetivo não é apenas apresentar meu trabalho, mas também utilizar o próprio portfólio como uma demonstração prática de como desenvolvo e estruturo aplicações Full Stack.`,

    imageUrl: '/portfolio-picture.png',

    slug: 'personal-portfolio',

    technologies: [
      {
        name: 'Next.js',
        icon: '/icons/nextjs.svg',
        description:
          'Framework React utilizado para desenvolver o front-end, roteamento e arquitetura da aplicação.',
      },
      {
        name: 'React',
        icon: '/icons/react.svg',
        description:
          'Biblioteca utilizada para construir interfaces de usuário reutilizáveis e baseadas em componentes.',
      },
      {
        name: 'TypeScript',
        icon: '/icons/ts.svg',
        description:
          'Linguagem tipada utilizada para melhorar a qualidade, manutenção e experiência de desenvolvimento do código.',
      },
      {
        name: 'Python',
        icon: '/icons/python.svg',
        description:
          'Linguagem de programação utilizada no desenvolvimento do back-end e da lógica da API.',
      },
      {
        name: 'FastAPI',
        icon: '/icons/fastapi.svg',
        description:
          'Framework Python utilizado para desenvolver a API REST do back-end e trabalhar com requisições e respostas HTTP.',
      },
      {
        name: 'Pydantic',
        icon: '/icons/pydantic.svg',
        description:
          'Biblioteca utilizada para definir schemas da API e validar os dados recebidos.',
      },
      {
        name: 'Tailwind CSS',
        icon: '/icons/tailwindcss.svg',
        description:
          'Framework CSS utility-first utilizado para construir a interface responsiva e manter um sistema visual consistente.',
      },
    ],

    liveDemoUrl: 'https://www.moiseslugo.com/',

    repoUrl: 'https://github.com/moiseslugo-04/portfolio',
  },
]
