export interface TokenVO {
  tokenName: string
  tokenValue: string
  isLogin: boolean
  loginId: string
  loginType: string
  tokenTimeout: number
  sessionTimeout: number
  tokenSessionTimeout: number
  tokenActiveTimeout: number
  loginDevice: string
  tag?: any
}

export interface ResponseResult<T> {
  code: number
  msg: string
  data: T
  tokenInfo: TokenVO
}

export interface PageResult<T> {
  total: number
  page: number
  pageSize: number
  list: T[]
}

export type CustomModalType = 'add' | 'update'
