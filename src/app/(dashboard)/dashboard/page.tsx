'use client'
import { loading } from '@/components/loading/loading-controller'
import { ProductGrid } from '@/components/products/product-grid'
import { useProducts } from '@/hooks/products/use-get-products'
import { useEffect } from 'react'

export default function Dashboard() {
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
