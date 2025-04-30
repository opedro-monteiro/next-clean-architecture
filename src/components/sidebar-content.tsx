import { FiltersSection } from './filters-section'
import { SheetContent } from './ui/sheet'

export function SidebarContent() {
  return (
    <SheetContent side={'bottom'}>
      <FiltersSection />
    </SheetContent>
  )
}
