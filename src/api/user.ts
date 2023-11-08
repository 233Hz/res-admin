import request from '@/utils/request'
import type { ResponseResult, PageResult } from '@/types/global'
import type { UserItem } from '@/types/user'

enum API {
  PAGE = '/user/page'
}

export const pageUser = () =>
  request.get<ResponseResult<PageResult<UserItem>>>(API.PAGE)
