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
  createdAt: Date
  updatedAt: Date
}
