import { z } from 'zod'
import { categoryEnum } from '../schemas/category-schema'

export type CategoryEnumDto = z.infer<typeof categoryEnum>
