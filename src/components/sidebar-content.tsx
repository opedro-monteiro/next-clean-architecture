'use client'

import { useFilterCategories } from '@/hooks/useFilterCategories'
import { useFilterColors } from '@/hooks/useFilterColors'
import { useFilterPrice } from '@/hooks/useFilterPrice'
import { useFilterSizes } from '@/hooks/useFilterSizes'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { SectionFilterCategories } from './filters/section-filter-categories'
import { SectionFilterColors } from './filters/section-filter-colors'
import { SectionFilterPrice } from './filters/section-filter-price'
import { SectionFilterSizes } from './filters/section-filter-sizes'
import { Button } from './ui/button'
import { Separator } from './ui/separator'
import { SheetContent, SheetFooter, SheetHeader, SheetTitle } from './ui/sheet'

interface SidebarContentProps {
  setIsOpen: (isOpen: boolean) => void
}

export function SidebarContent({ setIsOpen }: SidebarContentProps) {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  const { selectedSizes, toggleSize } = useFilterSizes()
  const { selectedColors, toggleColor } = useFilterColors()
  const { priceRange, handlePriceRangeChange } = useFilterPrice()
  const { selectedCategories, toggleCategory } = useFilterCategories()

  const handleApplyFilters = () => {
    const params = new URLSearchParams(searchParams.toString())

    params.set('min', priceRange[0].toString())
    params.set('max', priceRange[1].toString())

    router.push(`${pathname}?${params.toString()}`)
    setIsOpen(false)
  }

  const handleResetFilters = () => {
    router.push(`${pathname}`)
    setIsOpen(false)
  }

  return (
    <SheetContent side={'bottom'} className="rounded-t-lg px-5">
      <SheetHeader className="pb-0">
        <SheetTitle className="flex items-center justify-between text-xl font-bold">
          Filters
        </SheetTitle>
      </SheetHeader>
      {/* Filters */}
      <Separator />
      <SectionFilterCategories
        selectedCategories={selectedCategories}
        toggleCategory={toggleCategory}
      />
      {/* filtro imediato */}
      <Separator />
      <SectionFilterPrice
        priceRange={priceRange}
        handlePriceRangeChange={handlePriceRangeChange}
      />
      {/* filtro pelo apply */}
      <Separator />
      <SectionFilterColors
        selectedColors={selectedColors}
        toggleColor={toggleColor}
      />
      {/* filtro imediato */}
      <Separator />
      <SectionFilterSizes
        selectedSizes={selectedSizes}
        toggleSize={toggleSize}
      />
      <SheetFooter className="flex flex-col gap-2 pt-4">
        <Button className="h-12 rounded-full" onClick={handleApplyFilters}>
          Apply Filters
        </Button>
        <Button
          className="h-12 rounded-full"
          variant={'outline'}
          onClick={handleResetFilters}
        >
          Reset Filters
        </Button>
      </SheetFooter>
    </SheetContent>
  )
}
