'use client'
import { BreadcrumbProducts } from '@/components/breadcrumb-products'
import { ProductGrid } from '@/components/product-grid'
import { SidebarContent } from '@/components/sidebar-content'
import { ProductItemDto } from '@/components/types/product-item.dto'
import { Button } from '@/components/ui/button'
import { Sheet, SheetTrigger } from '@/components/ui/sheet'
import { SlidersVerticalIcon } from 'lucide-react'

const products: ProductItemDto[] = [
  {
    title: 'Produto 1 muito top',
    price: 145,
    oldPrice: 242,
    discount: 20,
    imageUrl: '/assets/products/product-1.png',
  },
  {
    title: 'Produto 2 muito top',
    price: 167,
    oldPrice: 216,
    discount: 22,
    imageUrl: '/assets/products/product-2.png',
  },
  {
    title: 'Produto 3 muito top',
    price: 178,
    oldPrice: 333,
    discount: 26,
    imageUrl: '/assets/products/product-3.png',
  },
  {
    title: 'Produto 4 muito top',
    price: 145,
    oldPrice: 242,
    discount: 20,
    imageUrl: '/assets/products/product-4.png',
  },
  {
    title: 'Produto 5 muito top',
    price: 145,
    oldPrice: 242,
    discount: 20,
    imageUrl: '/assets/products/product-5.png',
  },
  {
    title: 'Produto 6 muito top',
    price: 145,
    oldPrice: 242,
    discount: 20,
    imageUrl: '/assets/products/product-6.png',
  },
  {
    title: 'Produto 7 muito top',
    price: 145,
    oldPrice: 242,
    discount: 20,
    imageUrl: '/assets/products/product-7.png',
  },
  {
    title: 'Produto 8 muito top',
    price: 145,
    oldPrice: 242,
    discount: 20,
    imageUrl: '/assets/products/product-8.png',
  },
  {
    title: 'Produto 9 muito top',
    price: 145,
    oldPrice: 242,
    discount: 20,
    imageUrl: '/assets/products/product-9.png',
  },
]

export default function Products() {
  return (
    <div className="mx-auto max-w-7xl px-4">
      <BreadcrumbProducts />
      <div className="mt-4 flex items-center justify-between">
        <h1 className="text-3xl font-bold">Products</h1>
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="secondary"
              className="hover:bg-primary rounded-full p-4 shadow-xs transition-all duration-300 hover:text-white"
            >
              <SlidersVerticalIcon />
            </Button>
          </SheetTrigger>
          <SidebarContent />
        </Sheet>
      </div>

      <ProductGrid products={products} />
    </div>
  )
}
