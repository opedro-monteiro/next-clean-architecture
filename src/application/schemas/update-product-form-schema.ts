import { z } from 'zod'
import { createProductFormSchema } from './create-product-form-schema'

export const updateProductFormSchema = createProductFormSchema.partial()

export type UpdateProductFormData = z.infer<typeof updateProductFormSchema>
