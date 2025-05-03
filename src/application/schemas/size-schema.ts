import { z } from 'zod'

export const sizeEnum = z.enum(['S', 'M', 'L', 'XL', 'XXL', 'XXXL'])

export const sizeSchema = sizeEnum
