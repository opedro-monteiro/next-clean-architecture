import { ProductDto } from '@/application/dtos/product.dto'
import { ProductItem } from './product-item'

interface ProductGridProps {
  products: ProductDto[]
}

export function ProductGrid({ products }: ProductGridProps) {
  return (
    <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {products.map((product) => (
        <ProductItem key={product.id} {...product} />
      ))}
    </div>
  )
}
