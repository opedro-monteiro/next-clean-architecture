'use client'
import { formatPrice } from '@/helpers/formatPrice'
import { RangeSlider } from '../ui/range-slider'

interface SectionFilterPriceProps {
  priceRange: number[]
  handlePriceRangeChange: (value: number[]) => void
}

export function SectionFilterPrice({
  priceRange,
  handlePriceRangeChange,
}: SectionFilterPriceProps) {
  return (
    <div>
      <h2 className="text-2xl font-bold">Price</h2>
      <RangeSlider
        id="price-range"
        defaultValue={priceRange}
        max={1000}
        step={1}
        value={priceRange}
        onValueChange={handlePriceRangeChange}
        className="py-4"
      />
      <div className="flex justify-between">
        <p className="text-sm text-gray-500">{formatPrice(priceRange[0])}</p>
        <p className="text-sm text-gray-500">{formatPrice(priceRange[1])}</p>
      </div>
    </div>
  )
}
