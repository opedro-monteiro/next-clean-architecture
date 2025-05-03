import { z } from 'zod'
import { categorySchema } from './category-schema'
import { colorSchema } from './color-schema'
import { sizeSchema } from './size-schema'

export const createProductFormSchema = z.object({
  name: z.string().min(1),
  price: z.number().min(0),
  description: z.string().min(1),
  imageUrl: z.string().min(1),
  category: categorySchema,
  size: sizeSchema,
  color: colorSchema,
})

export type CreateProductForm = z.infer<typeof createProductFormSchema>
