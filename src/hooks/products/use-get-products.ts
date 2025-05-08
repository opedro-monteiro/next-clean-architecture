import { ProductDto } from '@/application/dtos/product.dto'
import { ResponseDto } from '@/application/dtos/response.dto'
import { QueryKeysProducts } from '@/application/query-keys/query-keys'
import { useQuery } from '@tanstack/react-query'
import axios, { AxiosError } from 'axios'

const fetchProducts = async (): Promise<ProductDto[]> => {
  try {
    const { data } = await axios.get<ResponseDto<ProductDto[]>>('/api/products')

    if (!data.data) {
      throw new Error('No product data received')
    }

    await new Promise((resolve) => setTimeout(resolve, 3000))

    return data.data
  } catch (error) {
    if (error instanceof AxiosError) {
      throw new Error(
        error.response?.data?.message || 'Failed to get all products',
      )
    }
    throw new Error('An unexpected error occurred')
  }
}

export const useProducts = () => {
  return useQuery<ProductDto[]>({
    queryKey: QueryKeysProducts.getAllProducts(),
    queryFn: fetchProducts,
  })
}
