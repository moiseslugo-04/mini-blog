'use server'

import { withAuth } from '@/lib/auth/with-auth'
import prisma from '@/lib/prisma'
import { revalidatePath } from 'next/cache'

interface DeletePostState {
  success: boolean
  error: null | string
}
export async function deletePost(
  prevState: DeletePostState,
  id: string
): Promise<DeletePostState> {
  return withAuth(async () => {
    await prisma.post.delete({ where: { id } })
    revalidatePath('/blog')
    revalidatePath('/dashboard')
    return { deletedId: id }
  })
}
