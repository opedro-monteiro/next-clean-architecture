import { env } from '@/configs/env'
import { PutObjectCommand, S3Client } from '@aws-sdk/client-s3'

const s3Client = new S3Client()

interface UploadParams {
  name: string
  type: string
  buffer: Buffer
}

export const uploadFileToS3 = async ({ name, buffer, type }: UploadParams) => {
  /* @annotations
  
  we need to upload the file to the S3 bucket using buffer
  File.arrayBuffer() as Buffer
  */

  try {
    const command = new PutObjectCommand({
      Bucket: env.AWS_BUCKET_NAME,
      Key: `products/${name}`,
      Body: buffer,
      ContentType: type,
      ACL: 'public-read', // ou private, se quiser controlar
    })

    await s3Client.send(command)

    return {
      success: true,
      url: `https://${env.AWS_BUCKET_NAME}.s3.${env.AWS_REGION}.amazonaws.com/${name}`,
    }
  } catch (error) {
    console.error('Erro ao enviar arquivo para o S3:', error)
    return {
      success: false,
      message: 'Erro ao enviar arquivo para o S3',
    }
  }
}
