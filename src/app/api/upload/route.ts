import { uploadFileToS3 } from '@/lib/aws-s3'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  const formData = await req.formData()
  const file = formData.get('file') as File

  if (!file) {
    return NextResponse.json({ error: 'No file provided' }, { status: 400 })
  }

  console.log('FormData', formData)
  console.log('File', file)

  const fileBuffer = Buffer.from(await file.arrayBuffer())

  const result = await uploadFileToS3({
    name: file.name,
    type: file.type,
    buffer: fileBuffer,
  })

  if (!result.success) {
    return NextResponse.json({ error: result.message }, { status: 500 })
  }

  return NextResponse.json({ url: result.url })
}
