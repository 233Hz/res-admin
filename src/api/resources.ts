import request from '@/utils/request'
import type { ResponseResult, PageResult } from '@/types/global'
import type { ResourcesItem } from '@/types/resources'

enum API {
  PAGE = '/resources/page'
}

export const resourcesPage = () =>
  request.get<ResponseResult<PageResult<ResourcesItem>>>(API.PAGE)
