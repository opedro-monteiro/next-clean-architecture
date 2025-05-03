'use client'

import { Checkbox } from '@/components/ui/checkbox'
import { ITEMS } from '@/constants/categories'

interface SectionFilterCategoriesProps {
  selectedCategories: string[]
  toggleCategory: (category: string) => void
}

export function SectionFilterCategories({
  selectedCategories,
  toggleCategory,
}: SectionFilterCategoriesProps) {
  return (
    <div className="p-4">
      <h2 className="mb-4 text-2xl font-bold">Categories</h2>
      <div className="flex flex-wrap gap-4">
        {Object.entries(ITEMS).map(([item, value]) => (
          <div key={item} className="flex items-center space-x-2">
            <Checkbox
              id={item}
              checked={selectedCategories.includes(item)}
              onCheckedChange={() => toggleCategory(item)}
            />
            <label
              htmlFor={item}
              className="text-sm leading-none font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              {value}
            </label>
          </div>
        ))}
      </div>
    </div>
  )
}
