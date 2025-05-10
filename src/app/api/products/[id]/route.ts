import { ProductDto } from '@/application/dtos/product.dto'
import { ResponseDto } from '@/application/dtos/response.dto'
import { updateProductFormSchema } from '@/application/schemas/update-product-form-schema'
import { DeleteProduct } from '@/application/useCases/products/deleteProduct'
import { GetProductById } from '@/application/useCases/products/getProductById'
import { UpdateProduct } from '@/application/useCases/products/updateProduct'
import { storageService } from '@/lib/aws/storage'
import { productRepository } from '@/lib/infra/repositories'
import { NextResponse } from 'next/server'

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  const { id } = await params

  const getProductById = new GetProductById(productRepository)
  const product = await getProductById.execute(id)

  return NextResponse.json<ResponseDto<ProductDto | null>>({
    message: 'Product fetched successfully',
    status: 200,
    data: product,
  })
}

export async function PUT(
  request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  const { id } = await params
  const body = await request.json()
  const updateProductDto = updateProductFormSchema.parse(body)

  const updateProduct = new UpdateProduct(productRepository)
  const product = await updateProduct.execute(id, updateProductDto)

  return NextResponse.json<ResponseDto<ProductDto>>({
    message: 'Product updated successfully',
    status: 200,
    data: product,
  })
}

export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  const { id } = await params

  const deleteProduct = new DeleteProduct(productRepository, storageService)
  await deleteProduct.execute(id)

  return NextResponse.json<ResponseDto<void>>({
    message: 'Product deleted successfully',
    status: 200,
    data: undefined,
  })
}
