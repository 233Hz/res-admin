const list = [
  {
    id: 1,
    name: '六校联盟创新创业大赛',
    pid: 0,
  },
  {
    id: 2,
    name: '创新创业在线学习资源',
    pid: 0,
  },
  {
    id: 3,
    name: '创新创业社团',
    pid: 0,
  },
  {
    id: 4,
    name: '创新创业典型案例',
    pid: 0,
  },
  {
    id: 5,
    name: '产教融合企业',
    pid: 0,
  },

  {
    id: 6,
    name: '上海市医药学校',
    pid: 1,
  },
  {
    id: 7,
    name: '上海市医药学校',
    pid: 1,
  },
  {
    id: 8,
    name: '上海市贸易学校',
    pid: 1,
  },
  {
    id: 9,
    name: '上海市贸易学校',
    pid: 1,
  },
  {
    id: 10,
    name: '上海市第二轻工业学校',
    pid: 1,
  },
  {
    id: 11,
    name: '上海市第二轻工业学校',
    pid: 1,
  },
  {
    id: 12,
    name: '联盟运营管理',
    pid: 1,
  },
  {
    id: 13,
    name: '泼猴信息技术（上海）有限公司',
    pid: 5,
  },
]

export default [
  {
    url: '/api/column/page',
    method: 'get',
    response: request => {
      return {
        code: 200,
        msg: '成功',
        data: {
          total: 4,
          page: 1,
          pageSize: 10,
          list: list
            .filter(item => item.pid === (request.query.pid || 0))
            .map(item => {
              return {
                ...item,
                pColumn: list.find(_item => _item.id === item.pid)?.name || '根目录',
              }
            }),
        },
      }
    },
  },
]
