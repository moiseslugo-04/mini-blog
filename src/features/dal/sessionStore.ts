import { create } from 'zustand'
import { User } from './types'

interface SessionStore {
  user: User | null
  isAuthenticated: boolean
  setSession: (user: User | null) => void
  clearSession: () => void
}

export const useSessionStore = create<SessionStore>((set) => ({
  user: null,
  isAuthenticated: false,
  setSession: (user) => set({ user, isAuthenticated: !!user }),
  clearSession: () => set({ user: null, isAuthenticated: false }),
}))
