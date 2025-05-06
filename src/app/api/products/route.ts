import { ProductDto } from '@/application/dtos/product.dto'
import { ResponseDto } from '@/application/dtos/response.dto'
import { createProductFormSchema } from '@/application/schemas/create-product-form-schema'
import { CreateProduct } from '@/application/useCases/products/createProduct'
import { GetProducts } from '@/application/useCases/products/getProducts'
import { productRepository } from '@/lib/infra/repositories'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  const body = await req.json()
  const newProduct = createProductFormSchema.parse(body)

  const createProduct = new CreateProduct(productRepository)
  const product = await createProduct.execute(newProduct)

  return NextResponse.json<ResponseDto<ProductDto>>({
    message: 'Product added successfully',
    status: 201,
    data: product,
  })
}

export async function GET() {
  const getProducts = new GetProducts(productRepository)
  const products = await getProducts.execute()

  return NextResponse.json<ResponseDto<ProductDto[]>>({
    message: 'Products fetched successfully',
    status: 200,
    data: products,
  })
}
