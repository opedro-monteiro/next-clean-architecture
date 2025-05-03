import { z } from 'zod'

export const sizeEnum = z.enum(['S', 'M', 'L', 'XL', 'XXL', 'XXXL'])

export type SizeEnum = z.infer<typeof sizeEnum>
export const sizeSchema = sizeEnum
