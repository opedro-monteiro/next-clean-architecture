'use client'
import { RangeSlider } from '@/components/ui/range-slider'
import { SlidersVertical } from 'lucide-react'
import { useState } from 'react'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from './ui/card'

export function FiltersSection() {
  const [priceRange, setPriceRange] = useState<number[]>([25, 75])

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <h2 className="text-lg font-bold">Filters</h2>
          <SlidersVertical size={16} />
        </CardTitle>
        <CardDescription>Card Description</CardDescription>
      </CardHeader>
      <CardContent>
        <RangeSlider
          id="price-range"
          defaultValue={[25, 75]}
          max={100}
          step={1}
          value={priceRange}
          onValueChange={setPriceRange}
          className="py-4"
        />
      </CardContent>
      <CardFooter>
        <p>Card Footer</p>
      </CardFooter>
    </Card>
  )
}
