import { CategoryEnumDto } from './category.dto'
import { ColorEnumDto } from './color.dto'
import { SizeEnumDto } from './size.dto'

export interface ProductDto {
  id: string
  name: string
  description: string
  price: number
  imageUrl: string
  category: CategoryEnumDto
  size: SizeEnumDto
  color: ColorEnumDto
  oldPrice: number | null
  discount: number | null
  createdAt: Date
  updatedAt: Date
}

export type CreateProductDto = Omit<
  ProductDto,
  'id' | 'createdAt' | 'updatedAt'
>

export type UpdateProductDto = Partial<
  Omit<ProductDto, 'id' | 'createdAt' | 'updatedAt'>
>
