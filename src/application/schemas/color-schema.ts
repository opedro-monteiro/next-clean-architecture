import { z } from 'zod'

export const colorEnum = z.enum(
  [
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
  ],
  { message: 'Color is required' },
)

export const colorSchema = colorEnum
