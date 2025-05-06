import { CreateProductFormData } from '../schemas/create-product-form-schema'

export async function createProduct(
  productData: CreateProductFormData,
): Promise<void> {
  const res = await fetch('/api/products', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(productData),
  })

  if (!res.ok) throw new Error('Failed to create product')
}
