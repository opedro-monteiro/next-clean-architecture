'use client'

import { SIZES } from '@/constants/sizes'

interface SectionFilterSizesProps {
  selectedSizes: string[]
  toggleSize: (size: string) => void
}

export function SectionFilterSizes({
  selectedSizes,
  toggleSize,
}: SectionFilterSizesProps) {
  return (
    <div className="p-4">
      <h2 className="mb-4 text-2xl font-bold">Sizes</h2>
      <div className="flex flex-wrap gap-4">
        {Object.entries(SIZES).map(([size, value]) => (
          <button
            key={size}
            onClick={() => toggleSize(size)}
            className={`flex h-12 items-center justify-center rounded-full px-6 transition-colors dark:text-white ${
              selectedSizes.includes(value)
                ? 'bg-primary text-white'
                : 'bg-secondary text-black'
            }`}
          >
            {size}
          </button>
        ))}
      </div>
    </div>
  )
}
