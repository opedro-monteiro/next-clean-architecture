export async function uploadImage(
  file: File,
  filename: string,
): Promise<string> {
  const formData = new FormData()
  formData.append('file', file)
  formData.append('filename', filename)

  const res = await fetch('/api/upload', {
    method: 'POST',
    body: formData,
  })

  if (!res.ok) throw new Error('Failed to upload image')

  const data = await res.json()
  return data.data.url
}

export async function deleteImage(filename: string): Promise<void> {
  await fetch(`/api/upload?name=${encodeURIComponent(filename)}`, {
    method: 'DELETE',
  })
}
