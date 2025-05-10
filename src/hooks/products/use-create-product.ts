import { createProduct } from '@/application/api-clients/productService'
import { ProductDto } from '@/application/dtos/product.dto'
import { QueryKeysProducts } from '@/application/query-keys/query-keys'
import { useMutation, useQueryClient } from '@tanstack/react-query'

export const useCreateProduct = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationKey: QueryKeysProducts.createProduct(),
    mutationFn: createProduct,
    onSuccess: (newProduct) => {
      queryClient.setQueryData<ProductDto[]>(
        QueryKeysProducts.getAllProducts(),
        (old = []) => [...old, newProduct],
      )

      queryClient.invalidateQueries({
        queryKey: QueryKeysProducts.getAllProducts(),
      })
    },
    onError: (error: Error) => {
      console.error('Erro ao criar produto:', error.message)
    },
  })
}
