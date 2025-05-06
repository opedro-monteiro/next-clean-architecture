'use client'

import { useSearchParams } from 'next/navigation'
import { useState } from 'react'

export function useFilterPrice() {
  const searchParams = useSearchParams()

  const min = Number(searchParams.get('min')) || 0
  const max = Number(searchParams.get('max')) || 1000

  const [priceRange, setPriceRange] = useState([min, max])

  const handlePriceRangeChange = (range: number[]) => {
    setPriceRange(range)
  }

  return {
    priceRange,
    handlePriceRangeChange,
  }
}
