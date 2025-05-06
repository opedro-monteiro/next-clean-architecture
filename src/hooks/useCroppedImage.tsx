import { useCallback, useRef, useState } from 'react'
import { Area } from 'react-easy-crop'

export function useCroppedImage() {
  const [croppedAreaPixels, setCroppedAreaPixels] = useState<Area | null>(null)
  const [crop, setCrop] = useState({ x: 0, y: 0 })
  const [zoom, setZoom] = useState(1)
  const [isCropping, setIsCropping] = useState(false)
  const [rotation, setRotation] = useState(0)
  const [croppedImage, setCroppedImage] = useState<string | null>(null)
  const [imageSrc, setImageSrc] = useState<string | null>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0]
      const reader = new FileReader()
      reader.addEventListener('load', () => {
        setImageSrc(reader.result as string)
        setIsCropping(true)
        setCroppedImage(null)
      })
      reader.readAsDataURL(file)
    }
  }

  const onCropComplete = useCallback(
    (_croppedArea: Area, croppedAreaPixels: Area) => {
      setCroppedAreaPixels(croppedAreaPixels)
    },
    [],
  )

  return {
    croppedAreaPixels,
    setCroppedAreaPixels,
    crop,
    setCrop,
    zoom,
    setZoom,
    isCropping,
    setIsCropping,
    rotation,
    setRotation,
    croppedImage,
    setCroppedImage,
    imageSrc,
    setImageSrc,
    fileInputRef,
    onFileChange,
    onCropComplete,
  }
}
