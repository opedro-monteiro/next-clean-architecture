'use client'
import { loading } from '@/components/loading/loading-controller'
import { BreadcrumbProducts } from '@/components/products/breadcrumb-products'
import { ProductGrid } from '@/components/products/product-grid'
import { SidebarContent } from '@/components/sidebar-content'
import { Button } from '@/components/ui/button'
import { Sheet, SheetTrigger } from '@/components/ui/sheet'
import { useProducts } from '@/hooks/products/use-get-products'
import { useAppSelector } from '@/hooks/redux.hook'
import { SlidersVerticalIcon } from 'lucide-react'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

export default function Products() {
  const [isOpen, setIsOpen] = useState(false)

  const { } = useAppSelector((rootReducer) => rootReducer.userReducer)
  const { setTheme } = useTheme()

  const { data: products, isLoading } = useProducts()

  useEffect(() => {
    if (isLoading) {
      loading.show()
    } else {
      loading.hide()
    }
  }, [isLoading])

  return (
    <main className="container mx-auto px-4 py-8 md:px-8 lg:px-16">
      <BreadcrumbProducts />
      <div className="mt-4 flex items-center justify-between">
        <h1 className="text-3xl font-bold">Products</h1>
        <Sheet open={isOpen} onOpenChange={() => setIsOpen(!isOpen)}>
          <SheetTrigger asChild>
            <Button
              variant="secondary"
              className="hover:bg-primary rounded-full p-4 shadow-xs transition-all duration-300 hover:text-white"
            >
              <SlidersVerticalIcon />
            </Button>
          </SheetTrigger>
          <SidebarContent setIsOpen={setIsOpen} />
        </Sheet>
      </div>
      {products ? (
        <ProductGrid products={products} />
      ) : (
        <div className="flex h-full items-center justify-center">
          <p className="text-2xl font-bold">No products found</p>
        </div>
      )}
    </main>
  )
}
