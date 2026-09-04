type User = {
  id: string
  name: string
  email: string
  username: string
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
  user: ProfileDTO | null
}

export type { User, ProfileDTO, SessionResponse }
