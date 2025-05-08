'use client'

import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { Mosaic } from 'react-loading-indicators'
import { loading } from './loading-controller'

export function LoadingOverlay() {
  const [isVisible, setIsVisible] = useState(false)
  const [isMounted, setIsMounted] = useState(false)
  const { theme } = useTheme()

  // Garante que o componente só renderize após montar no client
  useEffect(() => {
    setIsMounted(true)
    const unsubscribe = loading.subscribe(setIsVisible)
    return unsubscribe
  }, [])

  if (!isMounted || !isVisible) return null

  const color = theme === 'dark' ? '#fff' : '#000'

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/50">
      <Mosaic color={color} size="large" text="Loading..." textColor={color} />
    </div>
  )
}
