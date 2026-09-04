type User = {
  id: string
  name: string
  email: string
  username: string
  bio: string | null
  avatar_id: string | null
  avatar_url: string | null
  avatar_alt: string | null
}

type ProfileDTO = {
  id: string
  name: string
  email: string
  username: string
  bio: string | null
  avatar_id: string | null
  avatar_url: string | null
  avatar_alt: string | null
}
type SessionResponse = {
  isAuth: boolean
  user: User | null
}

export type { User, ProfileDTO, SessionResponse }
