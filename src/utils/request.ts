import { ResponseResult } from '@/types/global'
import { message } from 'antd'
import axios from 'axios'

const request = axios.create({
  baseURL: '/api',
  timeout: 5000
})

//请求拦截器
request.interceptors.request.use((config) => {
  return config
})
//响应拦截器
request.interceptors.response.use(
  (response) => {
    const {
      data: { code, msg }
    } = response

    if (code !== 0) {
      message.error(msg)
      return Promise.reject(msg)
    }

    return response
  },
  (error) => {
    //处理网络错误
    let msg = ''
    const status = error.response.status
    switch (status) {
      case 401:
        msg = 'token过期'
        break
      case 403:
        msg = '无权访问'
        break
      case 404:
        msg = '请求地址错误'
        break
      case 500:
        msg = '服务器出现问题'
        break
      default:
        msg = '无网络'
    }
    console.log(msg)
    return Promise.reject(error)
  }
)
export default request

export async function get<T>(url: string, params?: any) {
  const response = await request.get<ResponseResult<T>>(url, params)
  return response.data
}
export async function post<T>(url: string, data?: any) {
  const response = await request.post<ResponseResult<T>>(url, data)
  return response.data
}
export async function put<T>(url: string, data?: any) {
  const response = await request.put<ResponseResult<T>>(url, data)
  return response.data
}
export async function del<T>(url: string, params?: any) {
  const response = await request.put<ResponseResult<T>>(url, params)
  return response.data
}
