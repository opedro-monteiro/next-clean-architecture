import { ProductRepository } from '@/domain/repositories/product-repository'

export class DeleteProduct {
  constructor(private readonly productRepository: ProductRepository) {}

  async execute(id: string) {
    await this.productRepository.delete(id)
  }
}
