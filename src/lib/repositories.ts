// lib/repositories.ts
import { PrismaProductRepository } from '@/infrastructure/repositories/prisma/prisma-product-repository'

export const productRepository = new PrismaProductRepository()

// caso eu queria usar outro banco de dados, basta criar um novo repositório e exportar ele
// e depois basta alterar o import do productRepository para o novo repositório

// export const productRepository = new DrizzleProductRepository()
