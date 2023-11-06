export default [
  {
    url: '/api/test/get',
    method: 'get',
    response: () => {
      return {
        code: 200,
        msg: '成功',
        data: '张三',
      }
    },
  },
  {
    url: '/api/test/post',
    method: 'post',
    response: () => {
      return {
        code: 200,
        msg: '成功',
        data: [1, 2, 3],
      }
    },
  },
]
