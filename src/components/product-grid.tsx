import { ProductItem } from './product-item'
import { ProductItemDto } from './types/product-item.dto'

interface ProductGridProps {
  products: ProductItemDto[]
}

export function ProductGrid({ products }: ProductGridProps) {
  return (
    <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {products.map((product) => (
        <ProductItem key={product.title} {...product} />
      ))}
    </div>
  )
}
