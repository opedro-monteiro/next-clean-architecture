import { CreateProductDto } from '@/application/dtos/product.dto'
import { ProductRepository } from '@/domain/repositories/product-repository'

export class CreateProduct {
  constructor(private readonly productRepository: ProductRepository) {}

  async execute(data: CreateProductDto) {
    const product = await this.productRepository.create(data)
    return product
  }
}
