import { create } from 'zustand'
import { ProfileDTO } from './types'

interface SessionStore {
  user: ProfileDTO | null
  isAuthenticated: boolean
  setSession: (user: ProfileDTO | null) => void
  clearSession: () => void
}

export const useSessionStore = create<SessionStore>((set) => ({
  user: null,
  isAuthenticated: false,
  setSession: (user) => set({ user, isAuthenticated: !!user }),
  clearSession: () => set({ user: null, isAuthenticated: false }),
}))
