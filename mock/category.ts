const list = [
  {
    id: 1,
    name: '一级分类1',
    pid: 0,
  },
  {
    id: 2,
    name: '二级分类1-1',
    pid: 1,
  },
  {
    id: 3,
    name: '三级分类1-1-1',
    pid: 2,
  },
  {
    id: 4,
    name: '三级分类1-1-2',
    pid: 2,
  },
  {
    id: 5,
    name: '二级分类1-2',
    pid: 1,
  },
  {
    id: 6,
    name: '三级分类1-2-1',
    pid: 5,
  },
  {
    id: 7,
    name: '三级分类1-2-2',
    pid: 5,
  },
  {
    id: 8,
    name: '一级分类2',
    pid: 0,
  },
  {
    id: 9,
    name: '二级分类2-1',
    pid: 8,
  },
  {
    id: 10,
    name: '三级分类2-1-1',
    pid: 9,
  },
  {
    id: 11,
    name: '三级分类2-1-2',
    pid: 9,
  },
  {
    id: 12,
    name: '二级分类2-2',
    pid: 8,
  },
  {
    id: 13,
    name: '三级分类2-2-1',
    pid: 12,
  },
  {
    id: 14,
    name: '三级分类2-2-2',
    pid: 12,
  },
  {
    id: 15,
    name: '一级分类3',
    pid: 0,
  },
  {
    id: 16,
    name: '二级分类3-1',
    pid: 15,
  },
  {
    id: 17,
    name: '三级分类3-1-1',
    pid: 16,
  },
  {
    id: 18,
    name: '三级分类3-1-2',
    pid: 16,
  },
  {
    id: 19,
    name: '二级分类3-2',
    pid: 15,
  },
  {
    id: 20,
    name: '三级分类3-2-1',
    pid: 19,
  },
  {
    id: 21,
    name: '三级分类3-2-2',
    pid: 19,
  },
  {
    id: 22,
    name: '一级分类4',
    pid: 0,
  },
  {
    id: 23,
    name: '二级分类4-1',
    pid: 22,
  },
  {
    id: 24,
    name: '三级分类4-1-1',
    pid: 23,
  },
  {
    id: 25,
    name: '三级分类4-1-2',
    pid: 23,
  },
  {
    id: 26,
    name: '二级分类4-2',
    pid: 22,
  },
  {
    id: 27,
    name: '三级分类4-2-1',
    pid: 26,
  },
  {
    id: 28,
    name: '三级分类4-2-2',
    pid: 26,
  },
  {
    id: 29,
    name: '二级分类4-3',
    pid: 26,
  },
]

export default [
  {
    url: '/api/category/list',
    method: 'get',
    response: (request: any) => {
      return {
        code: 200,
        msg: '成功',
        data: list.filter((item: any) => item.pid === (+request.query.id || 0)),
      }
    },
  },
]
