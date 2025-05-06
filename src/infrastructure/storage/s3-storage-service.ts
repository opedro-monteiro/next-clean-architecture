import { StorageDto } from '@/application/dtos/storage.dto'
import { env } from '@/configs/env'
import { StorageService } from '@/domain/interfaces/storage'
import { s3Client } from '@/lib/aws/aws-s3'
import { DeleteObjectCommand, PutObjectCommand } from '@aws-sdk/client-s3'

export class S3StorageService implements StorageService {
  async upload(file: File, filename: string): Promise<StorageDto> {
    const buffer = await file.arrayBuffer()
    const command = new PutObjectCommand({
      Bucket: env.AWS_BUCKET_NAME,
      Key: `products/${filename}`,
      Body: Buffer.from(buffer),
      ContentType: file.type,
      ACL: 'public-read',
    })

    await s3Client.send(command)

    return {
      url: `https://${env.AWS_BUCKET_NAME}.s3.${env.AWS_REGION}.amazonaws.com/products/${filename}`,
    }
  }

  async delete(filename: string): Promise<void> {
    const command = new DeleteObjectCommand({
      Bucket: env.AWS_BUCKET_NAME,
      Key: `products/${filename}`,
    })

    await s3Client.send(command)
  }
}
