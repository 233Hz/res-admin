import request from '@/utils/request'
import type { ResponseResult, PageResult } from '@/types/global'
import type { RoleItem } from '@/types/role'

enum API {
  PAGE = '/role/page'
}

export const pageRole = () =>
  request.get<ResponseResult<PageResult<RoleItem>>>(API.PAGE)
