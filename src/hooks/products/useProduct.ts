import { ProductDto } from '@/application/dtos/product.dto'
import { ResponseDto } from '@/application/dtos/response.dto'
import { QueryKeysProducts } from '@/application/query-keys/query-keys'
import { useQuery } from '@tanstack/react-query'

const fetchProducts = async (): Promise<ProductDto[]> => {
  const response = await fetch('/api/products')

  await new Promise((resolve) => setTimeout(resolve, 5000))

  if (!response.ok) {
    throw new Error('Erro ao buscar produtos')
  }

  const { data }: ResponseDto<ProductDto[]> = await response.json()

  if (!data) return []
  return data
}

export const useProducts = () =>
  useQuery<ProductDto[]>({
    queryKey: QueryKeysProducts.getAllProducts(),
    queryFn: fetchProducts,
  })
