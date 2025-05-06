'use client'
import { COLORS } from '@/shared/constants/colors'
import { Check } from 'lucide-react'
import { Button } from '../ui/button'

interface SectionFilterColorsProps {
  selectedColors: string[]
  toggleColor: (color: string) => void
}

export function SectionFilterColors({
  selectedColors,
  toggleColor,
}: SectionFilterColorsProps) {
  return (
    <div className="p-4">
      <h2 className="mb-4 text-2xl font-bold">Colors</h2>
      <div className="flex flex-wrap gap-4">
        {Object.entries(COLORS).map(([color, code]) => (
          <Button
            key={code}
            size={'icon'}
            variant={'outline'}
            onClick={() => toggleColor(color)}
            className="flex h-12 w-12 cursor-pointer items-center justify-center rounded-full transition-transform hover:scale-110"
            style={{
              backgroundColor: code,
              border: code === '#FFFFFF' ? '2px solid #E5E7EB' : 'none',
            }}
          >
            {selectedColors.includes(color) && (
              <Check
                className={`h-4 w-4 ${color === 'white' ? 'text-black' : 'text-white'}`}
                strokeWidth={6}
              />
            )}
          </Button>
        ))}
      </div>
    </div>
  )
}
