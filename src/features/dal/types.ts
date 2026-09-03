type User = { id: string; name: string; email: string; username: string }
type SessionResponse = {
  isAuth: boolean
  user: User | null
}

export type { User, SessionResponse }
