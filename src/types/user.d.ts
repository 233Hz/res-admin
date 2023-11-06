export interface UserItem {
  id: number
  loginName: string
  username: string
  gender: number
  phone: string
  email: string
  deptId: number
  idCard: string
  role: number
  validPeriod: number | string
  address?: string
  createTime: string
}
