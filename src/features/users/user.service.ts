import 'server-only'
import { verifySession } from '../dal/session'
import { getUserById } from './server/user.repository'
import { ProfileDTO } from './types'
type ProfileResponse =
  | {
      user: ProfileDTO
      success: true
      error: null
    }
  | {
      user: null
      success: false
      error: any
    }
export async function getUserProfile(): Promise<ProfileResponse> {
  try {
    const session = await verifySession()
    const user = await getUserById(session.userId)
    if (user === null) throw new Error('User not found')
    const firstName = user?.name.split(' ')[0] || ''
    const lastName = user?.name.split(' ')[1] || ''

    const defaultBio =
      'Frontend developer passionate about building beautiful web experiences.'
    return {
      user: {
        id: user.id,
        firstName,
        lastName,
        avatarUrl: user.avatarUrl ?? '/default-user.jpg',
        email: user.email,
        bio: user.bio ?? defaultBio,
      },
      success: true,
      error: null,
    }
  } catch (error) {
    return { user: null, success: false, error: error }
  }
}
