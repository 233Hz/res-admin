const list = [
  {
    id: 1,
    name: '泼猴信息企业介绍.pptx',
    size: 100,
    auth: 1,
    download: 1,
    columnId: '泼猴信息技术（上海）有限公司',
    categoryId: 'PDF',
    state: 1,
    createUser: '李四',
    createTime: '2021-01-01 12:12:12',
  },
  {
    id: 2,
    name: '白族刺绣',
    size: 100,
    auth: 2,
    download: 2,
    columnId: '上海船厂技工学校',
    categoryId: 'MP4',
    state: 2,
    createUser: '李四',
    createTime: '2021-01-01 12:12:12',
  },
]

export default [
  {
    url: '/api/resources/page',
    method: 'get',
    response: () => {
      return {
        code: 200,
        msg: '成功',
        data: {
          total: list.length,
          page: 1,
          pageSize: 10,
          list,
        },
      }
    },
  },
]
