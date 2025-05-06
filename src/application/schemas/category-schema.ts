import { z } from 'zod'

export const categoryEnum = z.enum(
  ['T_SHIRT', 'JEANS', 'SHIRTS', 'SHORTS', 'SWEATER', 'CAP'],
  { message: 'Category is required' },
)

export const categorySchema = categoryEnum
