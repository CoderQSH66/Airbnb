/**
 * @author: coderqsh
 * @description: 通用Rquest请求(JS)
 * @date: 2024-07-25 14:38:10
 * @lastEditTime: 2024-07-25 14:38:10
 */

import axios from "axios"
// const ERROR_UNKNOWN = "未知错误"

class Request {
  constructor(baseURL, timeout = 6000) {
    // 创建axios实例
    this.instance = axios.create({
      baseURL,
      timeout
    })

    // 请求拦截器
    this.instance.interceptors.request.use(
      (config) => {
        return config
      },
      (err) => {
        return Promise.reject(err)
      }
    )
    // 响应拦截器
    this.instance.interceptors.response.use(
      (response) => {
        // if (response.data.code && response.data.code !== 200) {
        //   $message.error(response.data.msg || this.ERROR_UNKNOWN)
        //   return Promise.reject(response.data)
        // }
        return response
      },
      (err) => {
        // $message.error(err.response.data.msg || err.message || this.ERROR_UNKNOWN)
        return Promise.reject(err)
      }
    )
  }

  /**
   * @description 通用base请求方法
   * @param { Object } config = AxiosRequestConfig & {isShowSuccess: boolean, isShowData: boolean, successMsg: string}
   * @returns {Promise<any>}
   */
  request(config) {
    const { isShowData = true, successMsg, ...requestConfig } = config
    return new Promise((reslove, reject) => {
      this.instance
        .request(requestConfig)
        .then((res) => {
          // if (isShowSuccess) {
          //   $message.success(successMsg || res.data.msg || "操作成功")
          // }
          if (isShowData) {
            reslove(res.data)
          }
          reslove(res)
        })
        .catch((err) => {
          reject(err)
        })
    })
  }

  get(url, config) {
    return this.request({ url, method: "get", ...config })
  }
}

export default Request
