import {
  CreateProductDto,
  ProductDto,
  UpdateProductDto,
} from '@/application/dtos/product.dto'

export interface ProductRepository {
  create(product: CreateProductDto): Promise<ProductDto>
  findById(id: string): Promise<ProductDto | null>
  findAll(): Promise<ProductDto[]>
  update(id: string, product: UpdateProductDto): Promise<ProductDto>
  delete(id: string): Promise<void>
}
