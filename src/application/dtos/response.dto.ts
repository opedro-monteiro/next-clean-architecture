export interface ResponseDto<T> {
  data: T
  message: string
  status: number
}
