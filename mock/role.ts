const list = [
  {
    id: 1,
    roleName: '企业管理员',
    roleDesc: '上传查看资源',
  },
  {
    id: 2,
    roleName: '超级管理员',
    roleDesc: '拥有所有功能的管理权限',
  },
  {
    id: 3,
    roleName: '普通管理员',
    roleDesc: '拥有一般管理权限',
  },
  {
    id: 4,
    roleName: '学校管理员',
    roleDesc: '拥有指定栏目下的信息发布权限',
  },
  {
    id: 5,
    roleName: '学生用户',
    roleDesc: '普通学生用户，只允许查看',
  },
]

export default [
  {
    url: '/api/role/page',
    method: 'get',
    response: () => {
      return {
        code: 200,
        msg: '成功',
        data: {
          total: 5,
          page: 1,
          pageSize: 10,
          list,
        },
      }
    },
  },
]
