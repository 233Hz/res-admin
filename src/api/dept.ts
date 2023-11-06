import request from '@/utils/request'
import type { ResponseResult, PageResult } from '@/types/global'
import type { DeptItem } from '@/types/dept'

enum API {
  PAGE = '/dept/page'
}

export const pageDept = () => request.get<ResponseResult<PageResult<DeptItem>>>(API.PAGE)
