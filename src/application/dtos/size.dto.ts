import { z } from 'zod'
import { sizeEnum } from '../schemas/size-schema'

export type SizeEnumDto = z.infer<typeof sizeEnum>
