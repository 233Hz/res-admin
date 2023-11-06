const list = [
  {
    id: 1,
    loginName: 'admin',
    username: '管理员',
    gender: 1,
    phone: '13888888888',
    email: 'admin@example.com',
    deptId: 1,
    role: 1,
    validPeriod: 1,
    createTime: '2020-09-10 10:10:10',
  },
  {
    id: 2,
    loginName: 'test',
    username: '测试',
    gender: 2,
    phone: '13888888888',
    email: 'test@example.com',
    deptId: 2,
    role: 2,
    validPeriod: 0,
    createTime: '2020-09-10 10:10:10',
  },
  {
    id: 3,
    loginName: 'test1',
    username: '测试1',
    gender: 1,
    phone: '13888888888',
    email: 'test1@example.com',
    deptId: 3,
    role: 3,
    validPeriod: '2025-03-31',
    createTime: '2020-09-10 10:10:10',
  },
  {
    id: 4,
    loginName: 'test2',
    username: '测试2',
    gender: 2,
    phone: '13888888888',
    email: 'test2@example.com',
    deptId: 4,
    role: 4,
    validPeriod: 1,
    createTime: '2020-09-10 10:10:10',
  },
]

export default [
  {
    url: '/api/user/page',
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
