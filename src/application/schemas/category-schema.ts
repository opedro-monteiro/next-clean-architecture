import { z } from 'zod'

export const categoryEnum = z.enum([
  'T-SHIRT',
  'JEANS',
  'SHIRTS',
  'SHORTS',
  'SWEATER',
  'CAP',
])

export const categorySchema = categoryEnum
