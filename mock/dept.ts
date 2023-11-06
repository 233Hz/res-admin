const list = [
  {
    id: 1,
    deptName: '双创合作单位1',
    createTime: '2023-02-20 16:23',
  },
  {
    id: 2,
    deptName: '上海船厂技工学校',
    createTime: '2022-08-18 14:28',
  },
  {
    id: 3,
    deptName: '上海科技管理学校',
    createTime: '2022-08-18 14:28',
  },
  {
    id: 4,
    deptName: '上海市环境学校',
    createTime: '上海市环境学校',
  },
]

export default [
  {
    url: '/api/dept/page',
    method: 'get',
    response: () => {
      return {
        code: 200,
        msg: '成功',
        data: {
          total: 4,
          page: 1,
          pageSize: 10,
          list,
        },
      }
    },
  },
]
