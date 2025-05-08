import { ProductDto } from '@/application/dtos/product.dto'
import { ResponseDto } from '@/application/dtos/response.dto'
import { QueryKeysProducts } from '@/application/query-keys/query-keys'
import { CreateProductFormData } from '@/application/schemas/create-product-form-schema'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import axios, { AxiosError } from 'axios'

const createProduct = async (
  product: CreateProductFormData,
): Promise<ProductDto> => {
  const queryClient = useQueryClient()

  try {
    const { data } = await axios.post<ResponseDto<ProductDto>>(
      '/api/products',
      product,
    )

    if (!data.data) {
      throw new Error('No product data received')
    }

    queryClient.setQueryData<ProductDto[]>(
      QueryKeysProducts.getAllProducts(),
      (oldData = []) => [...oldData, data.data],
    )

    return data.data
  } catch (error) {
    if (error instanceof AxiosError) {
      throw new Error(
        error.response?.data?.message || 'Failed to create product',
      )
    }
    throw new Error('An unexpected error occurred')
  }
}

export const useCreateProduct = () => {
  return useMutation({
    mutationKey: QueryKeysProducts.createProduct(),
    mutationFn: createProduct,
  })
}
