import { deleteProduct } from '@/application/api-clients/deleteProduct'
import { QueryKeysProducts } from '@/application/query-keys/query-keys'
import { useMutation, useQueryClient } from '@tanstack/react-query'

export function useDeleteProduct() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationKey: QueryKeysProducts.deleteProduct(),
    mutationFn: deleteProduct,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: QueryKeysProducts.getAllProducts(),
      })
    },
  })
}
