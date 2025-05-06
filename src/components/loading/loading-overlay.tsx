'use client'
import { useEffect, useState } from 'react'
import { Mosaic } from 'react-loading-indicators'
import { loading } from './loading-controller'

export function LoadingOverlay() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const unsubscribe = loading.subscribe(setIsVisible)
    return unsubscribe
  }, [])

  if (!isVisible) return null

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/50">
      <Mosaic color="#000" size="large" text="Loading..." textColor="#fff" />
    </div>
  )
}
