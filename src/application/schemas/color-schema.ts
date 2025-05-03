import { z } from 'zod'

export const colorEnum = z.enum([
  'GREEN',
  'RED',
  'YELLOW',
  'ORANGE',
  'CYAN',
  'BLUE',
  'PURPLE',
  'PINK',
  'WHITE',
  'BLACK',
])

export type ColorEnum = z.infer<typeof colorEnum>
export const colorSchema = colorEnum
