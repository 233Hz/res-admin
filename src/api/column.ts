import request from '@/utils/request'
import type { ResponseResult, PageResult } from '@/types/global'
import type { ColumnItem } from '@/types/column'

enum API {
  PAGE = '/column/page'
}

export const pageColumn = (pid?: number) =>
  request.get<ResponseResult<PageResult<ColumnItem>>>(API.PAGE, { params: { pid } })
