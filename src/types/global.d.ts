export interface ResponseResult<T> {
  code: number
  msg: string
  data: T
}

export interface PageResult<T> {
  total: number
  page: number
  pageSize: number
  list: T[]
}

export type CustomModalType = 'add' | 'update'
