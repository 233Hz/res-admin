import request from '@/utils/request'
import type { ResponseResult } from '@/types/global'
import type { CategoryItem } from '@/types/category'

enum API {
  QUERY_CATEGORY_LEVEL = '/category/list'
}

export const queryCategoryLevel = (id?: number) =>
  request.get<ResponseResult<CategoryItem[]>>(API.QUERY_CATEGORY_LEVEL, { params: { id } })
