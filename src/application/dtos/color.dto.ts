import { z } from 'zod'
import { colorEnum } from '../schemas/color-schema'

export type ColorEnumDto = z.infer<typeof colorEnum>
