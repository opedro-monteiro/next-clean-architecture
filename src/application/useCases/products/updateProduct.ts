import { UpdateProductDto } from '@/application/dtos/product.dto'
import { ProductRepository } from '@/domain/repositories/product-repository'

export class UpdateProduct {
  constructor(private readonly productRepository: ProductRepository) {}

  async execute(id: string, data: UpdateProductDto) {
    const product = await this.productRepository.update(id, data)
    return product
  }
}
