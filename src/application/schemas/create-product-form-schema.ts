import { z } from 'zod'
import { categorySchema } from './category-schema'
import { colorSchema } from './color-schema'
import { sizeSchema } from './size-schema'

export const createProductFormSchema = z.object({
  name: z
    .string({ message: 'Name is required' })
    .min(1, { message: 'Name is too short' }),
  price: z
    .number({ message: 'Price is required' })
    .min(0, { message: 'Price must be greater than 0' }),
  description: z
    .string({ message: 'Description is required' })
    .min(5, { message: 'Description is too short' }),
  imageUrl: z
    .string({ message: 'Image URL is required' })
    .min(1, { message: 'Image URL is too short' }),
  category: categorySchema,
  size: sizeSchema,
  color: colorSchema,
  oldPrice: z.number().nullable(),
  discount: z.number().nullable(),
})

export type CreateProductFormData = z.infer<typeof createProductFormSchema>
