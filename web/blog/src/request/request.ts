import axios from 'axios'
import { errorMessage } from '@/components/mongo-ui/message/index'
import type { AxiosInstance, AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios'
const service: AxiosInstance = axios.create({
  timeout: 30000,
})

/* 请求拦截器 */
service.interceptors.request.use((config: AxiosRequestConfig) => {
  return config
}, (error: AxiosError) => {

  return Promise.reject(error)
})

/* 响应拦截器 */
service.interceptors.response.use((response: AxiosResponse) => {
  const { code, message, data } = response.data
  //响应正常
  if (code === 20000) {
    return data
  } else {
    //处理业务错误。
    errorMessage(message)
    return Promise.reject(new Error(message))
  }
}, (error: AxiosError) => {
  // 处理 HTTP 网络错误
  let message = ''
  // HTTP 状态码
  const status = error.response?.status
  switch (status) {
    case 403:
      message = '拒绝访问'
      break;
    case 404:
      message = '请求地址错误'
      break;
    case 500:
      message = '服务器故障'
      break;
    default:
      message = '网络连接故障'
  }

  return Promise.reject(error)
})

/* 导出封装的请求方法 */
export const http = {
  get<T = any>(url: string, config?: AxiosRequestConfig): Promise<T> {
    return service.get(url, config)
  },

  post<T = any>(url: string, data?: object, config?: AxiosRequestConfig): Promise<T> {
    return service.post(url, data, config)
  },

  put<T = any>(url: string, data?: object, config?: AxiosRequestConfig): Promise<T> {
    return service.put(url, data, config)
  },

  delete<T = any>(url: string, config?: AxiosRequestConfig): Promise<T> {
    return service.delete(url, config)
  }
}

