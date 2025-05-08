import { ProductDto } from '@/application/dtos/product.dto'
import { ProductItem } from './product-item'

interface ProductGridProps {
  products: ProductDto[]
}

export function ProductGrid({ products }: ProductGridProps) {
  return (
    <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-2 sm:gap-6 md:grid-cols-3 md:gap-8 lg:grid-cols-4 lg:gap-10">
      {products.map((product) => (
        <ProductItem key={product.id} {...product} />
      ))}
    </div>
  )
}
