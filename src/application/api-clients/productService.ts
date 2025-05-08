import axios from 'axios'
import { ProductDto } from '../dtos/product.dto'
import { ResponseDto } from '../dtos/response.dto'
import { CreateProductFormData } from '../schemas/create-product-form-schema'

export async function createProduct(
  productData: CreateProductFormData,
): Promise<ProductDto> {
  const { data } = await axios.post<ResponseDto<ProductDto>>(
    '/api/products',
    productData,
  )

  if (!data.data) throw new Error('Failed to create product')

  return data.data
}
