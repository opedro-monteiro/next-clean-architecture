import axios from 'axios'
import { ProductDto } from '../dtos/product.dto'
import { ResponseDto } from '../dtos/response.dto'
import { CreateProductFormData } from '../schemas/create-product-form-schema'

export const createProduct = async (
  product: CreateProductFormData,
): Promise<ProductDto> => {
  const { data } = await axios.post<ResponseDto<ProductDto>>(
    '/api/products',
    product,
  )

  if (!data.data) {
    throw new Error('No product data received')
  }

  return data.data
}

export const deleteProduct = async (productId: string) => {
  const { data } = await axios.delete(`api/products/${productId}`)
  return data
}
