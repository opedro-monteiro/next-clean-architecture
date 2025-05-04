/**
 * This function creates a cropped image from the source image
 * using the cropping area and rotation provided
 */
export async function getCroppedImg(
  imageSrc: string,
  pixelCrop: { x: number; y: number; width: number; height: number },
  rotation = 0,
): Promise<string> {
  const image = await createImage(imageSrc)
  const canvas = document.createElement('canvas')
  const ctx = canvas.getContext('2d')

  if (!ctx) {
    throw new Error('No 2d context')
  }

  // Set canvas size to match the final image dimensions
  const maxSize = Math.max(image.width, image.height)
  const safeArea = 2 * ((maxSize / 2) * Math.sqrt(2))

  // Set dimensions of canvas to accommodate for rotation
  canvas.width = safeArea
  canvas.height = safeArea

  // Draw rotated image to the canvas
  ctx.translate(safeArea / 2, safeArea / 2)
  ctx.rotate((rotation * Math.PI) / 180)
  ctx.translate(-safeArea / 2, -safeArea / 2)

  // Draw the image in the center of the canvas
  ctx.drawImage(
    image,
    safeArea / 2 - image.width / 2,
    safeArea / 2 - image.height / 2,
  )

  // Extract the cropped image
  const data = ctx.getImageData(
    safeArea / 2 - image.width / 2 + pixelCrop.x,
    safeArea / 2 - image.height / 2 + pixelCrop.y,
    pixelCrop.width,
    pixelCrop.height,
  )

  // Set canvas width to final desired crop size
  canvas.width = pixelCrop.width
  canvas.height = pixelCrop.height

  // Place the cropped image data in the canvas
  ctx.putImageData(data, 0, 0)

  // Return the cropped image as a data URL
  return canvas.toDataURL('image/jpeg')
}

/**
 * Creates an image element from a source URL
 */
function createImage(url: string): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const image = new Image()
    image.addEventListener('load', () => resolve(image))
    image.addEventListener('error', (error) => reject(error))
    image.crossOrigin = 'anonymous' // This helps avoid CORS issues
    image.src = url
  })
}
