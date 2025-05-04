import { z } from 'zod'

export const categoryEnum = z.enum(
  ['T-SHIRT', 'JEANS', 'SHIRTS', 'SHORTS', 'SWEATER', 'CAP'],
  { message: 'Category is required' },
)

export const categorySchema = categoryEnum
