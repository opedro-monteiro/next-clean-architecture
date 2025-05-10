import { StorageService } from '@/domain/interfaces/storage'
import { ProductRepository } from '@/domain/repositories/product-repository'

export class DeleteProduct {
  constructor(
    private readonly productRepository: ProductRepository,
    private readonly storageService: StorageService,
  ) {}

  async execute(id: string) {
    const product = await this.productRepository.findById(id)
    if (!product) throw new Error('Product not found')

    const filename = product.imageUrl?.split('/').pop()
    if (!filename) throw new Error('Product image not found')

    await this.productRepository.delete(id)
    await this.storageService.delete(filename)
  }
}
