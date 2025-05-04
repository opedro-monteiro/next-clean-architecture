import { z } from 'zod'

export const sizeEnum = z.enum(['S', 'M', 'L', 'XL', 'XXL', 'XXXL'], {
  message: 'Size is required',
})

export const sizeSchema = sizeEnum
