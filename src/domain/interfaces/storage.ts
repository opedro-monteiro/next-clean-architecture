import { StorageDto } from '@/application/dtos/storage.dto'

export interface StorageService {
  upload(file: File | Blob, filename: string): Promise<StorageDto> // retorna URL
  delete(filename: string): Promise<void>
}
