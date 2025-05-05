import { ProductRepository } from '@/domain/repositories/product-repository'

export class GetProductById {
  constructor(private readonly productRepository: ProductRepository) {}

  async execute(id: string) {
    const product = await this.productRepository.findById(id)
    return product
  }
}
