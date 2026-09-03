import {
  Home,
  User,
  FolderGit2,
  LogIn,
  Menu,
  X,
  Book,
  LayoutDashboard,
} from 'lucide-react'

export const skills = [
  { name: 'Next.js', icon: 'nextjs', category: 'Framework' },
  { name: 'React', icon: 'react', category: 'Frontend' },
  { name: 'TypeScript', icon: 'ts', category: 'Language' },
  { name: 'Tailwind CSS', icon: 'tailwindcss', category: 'Styling' },

  { name: 'Python', icon: 'python', category: 'Language' },
  { name: 'FastAPI', icon: 'fastapi', category: 'Backend' },
  { name: 'Pydantic', icon: 'pydantic', category: 'Validation' },

  { name: 'PostgreSQL', icon: 'postgresql', category: 'Database' },
  { name: 'Git', icon: 'git', category: 'Version Control' },
  { name: 'Docker', icon: 'docker', category: 'DevOps' },
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
  {
    href: '/admin',
    label: 'Dashboard',
    icon: LayoutDashboard,
  },
]
