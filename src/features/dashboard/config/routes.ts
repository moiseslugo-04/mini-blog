import {
  LayoutDashboard,
  FileText,
  FolderKanban,
  Settings,
  HomeIcon,
} from 'lucide-react'

export const adminNavigation = [
  { name: 'Home', href: '/', icon: HomeIcon },
  { name: 'Dashboard', href: '/admin', icon: LayoutDashboard },
  { name: 'Posts', href: '/admin/posts', icon: FileText },
  { name: 'Projects', href: '/admin/projects', icon: FolderKanban },
  { name: 'Settings', href: '/admin/settings', icon: Settings },
] as const
