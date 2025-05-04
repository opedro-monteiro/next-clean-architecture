import { z } from 'zod'

const envSchema = z.object({
  AWS_REGION: z.string().default('us-east-1'),
  AWS_BUCKET_NAME: z.string().default('my-first-bucket'),
  AWS_ACCESS_KEY_ID: z.string(),
  AWS_SECRET_ACCESS_KEY: z.string(),
  DATABASE_URL: z
    .string()
    .url()
    .default('postgres://docker:docker@localhost:5432/postgres'),
})

export const env = envSchema.parse(process.env)
