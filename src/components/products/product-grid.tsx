import { ProductDto } from '@/application/dtos/product.dto'
import { useDeleteProduct } from '@/hooks/products/use-delete-product'
import { useRouter } from 'next/navigation'
import { ProductItem } from './product-item'

interface ProductGridProps {
  products: ProductDto[]
  showActions?: boolean
}

export function ProductGrid({
  products,
  showActions = false,
}: ProductGridProps) {
  const { mutate: deleteProduct } = useDeleteProduct()
  const router = useRouter()

  const editProduct = (productId: string) => {
    router.push(`/products/${productId}`)
  }

  return (
    <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-2 sm:gap-6 md:grid-cols-3 md:gap-8 lg:grid-cols-4 lg:gap-10">
      {products.map((product) => (
        <ProductItem
          key={product.id}
          {...product}
          showActions={showActions}
          onEdit={() => editProduct(product.id)}
          onDelete={() => deleteProduct(product.id)}
        />
      ))}
    </div>
  )
}
