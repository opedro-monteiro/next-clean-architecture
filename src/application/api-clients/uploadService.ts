import axios from 'axios'
import { ResponseDto } from '../dtos/response.dto'

export async function uploadImage(
  file: File,
  filename: string,
): Promise<string> {
  const formData = new FormData()
  formData.append('file', file)
  formData.append('filename', filename)

  const { data } = await axios.post<ResponseDto<{ url: string }>>(
    '/api/upload',
    formData,
  )

  if (!data.data.url) throw new Error('Failed to upload image')

  return data.data.url
}

export async function deleteImage(filename: string): Promise<number> {
  try {
    const { data } = await axios.delete<ResponseDto<void>>(
      `/api/upload?name=${encodeURIComponent(filename)}`,
    )

    if (data.status !== 200) throw new Error('Failed to delete image')

    return data.status
  } catch (error) {
    console.error('Error deleting image:', error)
    throw new Error('Failed to delete image')
  }
}
