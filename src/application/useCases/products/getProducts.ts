import { ProductRepository } from '@/domain/repositories/product-repository'

export class GetProducts {
  constructor(private readonly productRepository: ProductRepository) {}

  async execute() {
    const products = await this.productRepository.findAll()
    return products
  }
}
