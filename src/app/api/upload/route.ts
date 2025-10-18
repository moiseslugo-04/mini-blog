import { NextRequest, NextResponse } from 'next/server'
import cloudinary from '@lib/cloudinary'
import type { UploadApiResponse } from 'cloudinary'
export const POST = async (req: NextRequest) => {
  try {
    const formData = await req.formData()
    const file = formData.get('file') as Blob
    const oldPublicId = formData.get('oldPublicId') as string | null
    if (oldPublicId) {
      try {
        await cloudinary.uploader.destroy(oldPublicId)
        console.log(`Imagen anterior eliminada: ${oldPublicId}`)
      } catch (error) {
        console.error('Error eliminando imagen anterior:', error)
      }
    }

    if (!file) {
      return NextResponse.json({ error: 'No file provided' }, { status: 400 })
    }

    const buffer = Buffer.from(await file.arrayBuffer())
    const result = await new Promise<UploadApiResponse>((resolve, reject) => {
      cloudinary.uploader
        .upload_stream({ folder: 'uploads' }, (error, result) => {
          if (error) reject(error)
          else resolve(result as UploadApiResponse)
        })
        .end(buffer)
    })
    const { secure_url, public_id } = result
    return NextResponse.json({ url: secure_url, public_id })
  } catch (error) {
    console.error(error)
    return NextResponse.json(
      { error: 'Error subiendo imagen' },
      { status: 500 }
    )
  }
}
