import { env } from '@/configs/env'
import { S3Client } from '@aws-sdk/client-s3'

export const s3Client = new S3Client({
  region: env.AWS_REGION, // A região do seu bucket S3
  credentials: {
    accessKeyId: env.AWS_ACCESS_KEY_ID, // Sua chave de acesso
    secretAccessKey: env.AWS_SECRET_ACCESS_KEY, // Sua chave secreta
  },
})
