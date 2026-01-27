export const TAG_STYLES = {
  blue: {
    base: 'bg-blue-100 text-blue-800 border-blue-200',
    hover: 'hover:bg-blue-200',
    text: 'text-blue-600 hover:text-blue-800',
  },
  red: {
    base: 'bg-red-100 text-red-800 border-red-200',
    hover: 'hover:bg-red-200',
    text: 'text-red-600 hover:text-red-800',
  },
  yellow: {
    base: 'bg-yellow-100 text-yellow-800 border-yellow-200',
    hover: 'hover:bg-yellow-200',
    text: 'text-yellow-600 hover:text-yellow-800',
  },
  green: {
    base: 'bg-green-100 text-green-800 border-green-200',
    hover: 'hover:bg-green-200',
    text: 'text-green-600 hover:text-green-800',
  },
  purple: {
    base: 'bg-purple-100 text-purple-800 border-purple-200',
    hover: 'hover:bg-purple-200',
    text: 'text-purple-600 hover:text-purple-800',
  },
  pink: {
    base: 'bg-pink-100 text-pink-800 border-pink-200',
    hover: 'hover:bg-pink-200',
    text: 'text-pink-600 hover:text-pink-800',
  },
  indigo: {
    base: 'bg-indigo-100 text-indigo-800 border-indigo-200',
    hover: 'hover:bg-indigo-200',
    text: 'text-indigo-600 hover:text-indigo-800',
  },
  orange: {
    base: 'bg-orange-100 text-orange-800 border-orange-200',
    hover: 'hover:bg-orange-200',
    text: 'text-orange-600 hover:text-orange-800',
  },
  teal: {
    base: 'bg-teal-100 text-teal-800 border-teal-200',
    hover: 'hover:bg-teal-200',
    text: 'text-teal-600 hover:text-teal-800',
  },
  cyan: {
    base: 'bg-cyan-100 text-cyan-800 border-cyan-200',
    hover: 'hover:bg-cyan-200',
    text: 'text-cyan-600 hover:text-cyan-800',
  },
  rose: {
    base: 'bg-rose-100 text-rose-800 border-rose-200',
    hover: 'hover:bg-rose-200',
    text: 'text-rose-600 hover:text-rose-800',
  },
} as const

export const TAG_COLORS = Object.keys(TAG_STYLES) as Array<
  keyof typeof TAG_STYLES
>

export function getTagColor(tagName: string) {
  if (!tagName) return TAG_COLORS[0]
  let hash = 0

  for (let i = 0; i < tagName.length; i++) {
    hash = tagName.charCodeAt(i) + ((hash << 5) - hash)
  }

  const index = Math.abs(hash) % TAG_COLORS.length
  return TAG_COLORS[index]
}

export const tagsMock = [
  {
    id: '1',
    name: 'react',
    slug: 'react-2343',
    isPublic: true,
  },
  {
    id: '2',
    name: 'frontend',
    slug: 'frontend-9821',
    isPublic: true,
  },
  {
    id: '3',
    name: 'backend',
    slug: 'backend-7124',
    isPublic: true,
  },
  {
    id: '4',
    name: 'javascript',
    slug: 'javascript-5532',
    isPublic: true,
  },
  {
    id: '5',
    name: 'tailwind',
    slug: 'tailwind-8841',
    isPublic: true,
  },
  {
    id: '6',
    name: 'css',
    slug: 'css-1209',
    isPublic: true,
  },
  {
    id: '7',
    name: 'webdev',
    slug: 'webdev-4317',
    isPublic: true,
  },
  {
    id: '8',
    name: 'ui',
    slug: 'ui-6672',
    isPublic: true,
  },
  {
    id: '9',
    name: 'ux',
    slug: 'ux-9054',
    isPublic: true,
  },
  {
    id: '10',
    name: 'tutorial',
    slug: 'tutorial-3486',
    isPublic: false,
  },
]
