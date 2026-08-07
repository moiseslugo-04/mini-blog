import { url } from 'inspector'
import { useState } from 'react'
type ImageUpload = {
  onSuccess: (url: string) => void
}
export function useImageUpload({ onSuccess }: ImageUpload) {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>()
  const uploadImage = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return
    setLoading(true)
    try {
      const formData = new FormData()
      formData.append('file', file)
      const res = await fetch('/api/upload', { method: 'POST', body: formData })
      if (!res.ok) throw new Error('Upload failed')
      const result = await res.json()
      if (result.url) return onSuccess(result.url)
    } catch (error) {
      setError('Error uploading image')
      console.error(error)
    } finally {
      setLoading(false)
    }
  }

  return { uploadImage, loading, error }
}
