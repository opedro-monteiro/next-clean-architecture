import { z } from 'zod'

export const categoryEnum = z.enum([
  'T-SHIRT',
  'JEANS',
  'SHIRTS',
  'SHORTS',
  'SWEATER',
  'CAP',
])

export type CategoryEnum = z.infer<typeof categoryEnum>
export const categorySchema = categoryEnum
