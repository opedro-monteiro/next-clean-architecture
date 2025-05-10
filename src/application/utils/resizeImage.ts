import sharp, { format } from 'sharp'

export const resizeImage = async (file: File): Promise<File> => {
  const inputBuffer = await file.arrayBuffer()

  const originalName = file.name
  const newName = originalName.replace(/\.[^/.]+$/, '') + Date.now() + '.webp'

  const outputBuffer = await sharp(Buffer.from(inputBuffer))
    .toFormat(format.webp, { quality: 80 })
    .toBuffer()

  const resizedFile = new File([outputBuffer], newName, {
    type: 'image/webp',
    lastModified: Date.now(),
  })

  console.log('@RESIZE', resizedFile)
  return resizedFile
}
