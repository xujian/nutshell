import { inject, type App, type InjectionKey } from 'vue'
import { createHttp } from '@uxda/nutshell'
import type { HttpInstance, HttpRequestConfig, ResponseRaw, PagingParams } from '@uxda/nutshell'
import axios, { type Method } from 'axios'

/**
 * 用于 inject 的 symbol
 */
export const HttpSymbol: InjectionKey<HttpInstance>
  = Symbol.for('$http')

/**
 * 桌面端的 HTTP 实现
 * 使用 Axios
 */
const vendor = {
  async request <T>(config: HttpRequestConfig) {
    return axios.request({
      url: config.url,
      method: config.method as Method,
      baseURL: config.baseUrl,
      headers: config.headers,
      data: config.data,
    }).then(res => ({
      status: res.status,
      message: res.statusText,
      data: res.data
    }) as ResponseRaw<T> )
  }
}

const headers = {
}

/**
 * 传入配置获取 Http instanse
 */
const $http = createHttp({
  vendor,
  baseUrl: '/api',
  headers,
  interceptors: [
    raw => raw.status == 401,
  ],
})

const install = (app: App) => {
  app.config.globalProperties.$http = $http
  app.provide(HttpSymbol, $http)
}

function useHttp () {
  const $http = inject(HttpSymbol)
  return $http
}

export {
  useHttp
}

export default {
  install
}
