import {
  CreateProductDto,
  ProductDto,
  UpdateProductDto,
} from '@/application/dtos/product.dto'
import { ProductRepository } from '@/domain/repositories/product-repository'
import { prisma } from '@/lib/infra/prisma'

export class PrismaProductRepository implements ProductRepository {
  async create(productData: CreateProductDto): Promise<ProductDto> {
    const product = await prisma.product.create({
      data: productData,
    })
    return product
  }

  async findById(id: string): Promise<ProductDto | null> {
    return prisma.product.findUnique({ where: { id } })
  }

  async findAll(): Promise<ProductDto[]> {
    return prisma.product.findMany()
  }

  async update(id: string, product: UpdateProductDto): Promise<ProductDto> {
    return prisma.product.update({
      where: { id },
      data: product,
    })
  }

  async delete(id: string): Promise<void> {
    await prisma.product.delete({ where: { id } })
  }
}
