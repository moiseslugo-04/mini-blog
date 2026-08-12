import { Home, User, FolderGit2, LogIn, Menu, X, Book } from 'lucide-react'

export const skills = [
  { name: 'Next.js', icon: 'nextjs', category: 'Framework' },
  { name: 'TypeScript', icon: 'ts', category: 'Language' },
  { name: 'JavaScript', icon: 'js', category: 'Language' },
  { name: 'React', icon: 'react', category: 'Language' },
  { name: 'HTML5', icon: 'html5', category: 'Markup' },
  { name: 'CSS3', icon: 'css', category: 'Styling' },
  { name: 'Tailwind CSS', icon: 'tailwindcss', category: 'CSS Framework' },
  { name: 'Node.js', icon: 'nodejs', category: 'Runtime' },
  { name: 'Prisma', icon: 'prisma', category: 'ORM' },
  { name: 'Zod', icon: 'zod', category: 'Validation' },
  { name: 'Git', icon: 'git', category: 'Version Control' },
  { name: 'Docker', icon: 'docker', category: 'Containerization' },
]

export const stats = [{ number: '3+', label: 'Years Learning' }]

export const links = [
  {
    href: '/',
    label: 'Home',
    icon: Home,
  },

  /*
  {
    href: '/blog',
    label: 'Blog',
    icon: Book,
  },
  */

  {
    href: '/projects',
    label: 'Projects',
    icon: FolderGit2,
  },
  {
    href: '/about',
    label: 'About',
    icon: User,
  },
  {
    href: '/login',
    label: 'Login',
    icon: LogIn,
  },
]
