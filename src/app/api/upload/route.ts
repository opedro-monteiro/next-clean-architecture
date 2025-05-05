import { ResponseDto } from '@/application/dtos/response.dto'
import { StorageDto } from '@/application/dtos/storage.dto'
import { storageService } from '@/lib/storage'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  const formData = await req.formData()
  const file = formData.get('file') as File

  if (!file) {
    return NextResponse.json({ error: 'No file provided' }, { status: 400 })
  }

  const result = await storageService.upload(file, file.name)

  if (!result) {
    return NextResponse.json({ error: result }, { status: 500 })
  }

  return NextResponse.json<ResponseDto<StorageDto>>({
    message: 'File uploaded successfully',
    status: 200,
    data: result,
  })
}

// Chamada: DELETE /api/upload?name=imagem.jpg
export async function DELETE(req: NextRequest) {
  const { searchParams } = new URL(req.url)
  const name = searchParams.get('name')

  console.log('@DELETE name=', name)

  if (!name) {
    return NextResponse.json(
      { error: 'filename not provided' },
      { status: 400 },
    )
  }

  await storageService.delete(name)

  console.log('@DELETE after delete')

  return NextResponse.json<ResponseDto<void>>({
    message: 'File deleted successfully',
    status: 200,
    data: undefined,
  })
}
