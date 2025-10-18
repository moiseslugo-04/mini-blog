import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export async function saveAction<T>(
  prev: T,
  optimistic: (prev: T) => T,
  serverAction: () => Promise<void>
) {
  const next = optimistic(prev)
  try {
    await serverAction()
    return next
  } catch {
    return prev
  }
}
