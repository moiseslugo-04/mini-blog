export const mockProjects = [
  {
    projectName: 'Gechis E-commerce',
    description:
      'Full-stack e-commerce platform with product management,authentication, shopping cart, and admin dashboard.',
    details: `This project was built with a real-world market mindset. My goal was not just to create a demo, but to develop an e-commerce application that reflects how modern products are structured and built in production.

As a frontend developer, I focused on clean UI, scalable architecture, and good user experience, using modern tools like Next.js, React, and Tailwind CSS.

This is also a full-stack project, where I practiced the integration between frontend and backend, working with data modeling, API communication, and real application flows. Through this project, I aimed to demonstrate my technical skills, decision-making, and understanding of how real products are built.`,
    imageUrl: '/gechis-picture.png',
    slug: 'gechis-e-commerce',
    technologies: [
      {
        name: 'Next.js',
        icon: '/icons/nextjs.svg',
        description:
          'Framework used for routing, server components, and performance optimization.',
      },
      {
        name: 'React',
        icon: '/icons/react.svg',
        description:
          'Component-based UI development for a scalable and maintainable frontend.',
      },
      {
        name: 'TypeScript',
        icon: '/icons/ts.svg',
        description:
          'Strong typing to improve code quality and developer experience.',
      },
      {
        name: 'Tailwind CSS',
        icon: '/icons/tailwindcss.svg',
        description:
          'Utility-first CSS framework for building responsive and consistent UI.',
      },
      {
        name: 'Prisma',
        icon: '/icons/prisma.svg',
        description: 'ORM used for database access and data modeling.',
      },
    ],
    liveDemoUrl: 'https://www.gechis.com/',
    repoUrl: 'https://github.com/moiseslugo-04/nextjs-ecommerce',
  },
  {
    projectName: 'Alianza Elite',

    description:
      'Responsive multilingual landing page for a leadership community, focused on presenting the organization, attracting prospects, and providing an engaging user experience.',

    details: `Alianza Elite is a responsive landing page developed for a leadership community within LiveGood. The main goal was to create a professional and engaging digital presence that communicates the group's value proposition, presents relevant information, and helps attract new prospects.

The project was built with React, focusing on reusable components, responsive design, and a clean and maintainable application structure.

One of the main features of the project is its multilingual experience, supporting three languages: English, Spanish, and Portuguese. I implemented an internationalization system that allows users to switch between languages while preserving their selected language across sessions.

I also used n8n to automate part of the translation workflow, helping manage and process the content required for the different supported languages.

The application uses React Context API for shared state management and localStorage to persist the user's language preference between sessions. I also implemented custom hooks to separate and reuse application logic, including language management, contact form handling, gallery functionality, and scroll behavior.

The landing page also includes an image gallery, carousel interactions, contact functionality, responsive layouts, and reusable UI components.

This project allowed me to practice building a complete production-oriented landing page while working with component architecture, state management, internationalization, workflow automation, responsive design, and reusable application logic.`,

    imageUrl: '/alianza-elite.png',
    slug: 'alianza-elite',

    technologies: [
      {
        name: 'React',
        icon: '/icons/react.svg',
        description:
          'Library used to build the interface with a reusable and component-based architecture.',
      },
      {
        name: 'JavaScript',
        icon: '/icons/js.svg',
        description:
          'Main programming language used to implement application logic, interactions, and reusable functionality.',
      },
      {
        name: 'Tailwind CSS',
        icon: '/icons/tailwindcss.svg',
        description:
          'Utility-first CSS framework used to build the responsive and consistent visual interface.',
      },
      {
        name: 'n8n',
        icon: '/icons/n8n.svg',
        description:
          'Workflow automation tool used to automate part of the multilingual translation and content workflow.',
      },
    ],

    liveDemoUrl: 'https://alianzaelite.netlify.app/',

    repoUrl: 'https://github.com/moiseslugo-04/Alianza_Elite',
  },

  {
    projectName: 'Personal Portfolio',

    description:
      'Full-stack developer portfolio built with Next.js, React, and TypeScript, featuring a Python backend with FastAPI and Pydantic.',

    details: `This portfolio was built as a personal platform to showcase my skills, projects, and experience as a full-stack developer.

The frontend is built with Next.js, React, and TypeScript, focusing on a clean, responsive, and modern user experience. Tailwind CSS is used for styling and maintaining a consistent design system across the application.

The project also includes a dedicated backend built with Python and FastAPI. I am using Pydantic for request validation and schema definition, allowing the API to handle structured and validated data.

This project is also part of my learning process as I continue developing my backend skills, working with API architecture, HTTP methods, request and response handling, validation, and database integration.

The goal is not only to present my work, but also to make the portfolio itself a demonstration of how I build and structure full-stack applications.`,

    imageUrl: '/portfolio-picture.png',

    slug: 'personal-portfolio',

    technologies: [
      {
        name: 'Next.js',
        icon: '/icons/nextjs.svg',
        description:
          'React framework used to build the frontend, routing, and application architecture.',
      },
      {
        name: 'React',
        icon: '/icons/react.svg',
        description:
          'Library used to build reusable and component-based user interfaces.',
      },
      {
        name: 'TypeScript',
        icon: '/icons/ts.svg',
        description:
          'Typed programming language used to improve code quality, maintainability, and developer experience.',
      },
      {
        name: 'Python',
        icon: '/icons/python.svg',
        description:
          'Programming language used to build the backend and API logic.',
      },
      {
        name: 'FastAPI',
        icon: '/icons/fastapi.svg',
        description:
          'Python framework used to build the backend REST API and handle HTTP requests and responses.',
      },
      {
        name: 'Pydantic',
        icon: '/icons/pydantic.svg',
        description:
          'Validation library used to define API schemas and validate incoming data.',
      },
      {
        name: 'Tailwind CSS',
        icon: '/icons/tailwindcss.svg',
        description:
          'Utility-first CSS framework used to build the responsive and consistent visual interface.',
      },
    ],

    liveDemoUrl: 'https://www.moiseslugo.com/',

    repoUrl: 'https://github.com/moiseslugo-04/portfolio',
  },
]
