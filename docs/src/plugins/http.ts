import { inject, type App, type InjectionKey } from 'vue'
import { createHttp } from '@uxda/nutshell'
import type { HttpInstance, HttpRequestConfig, ResponseRaw } from '@uxda/nutshell'
import axios from 'axios'

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
    return axios.request<ResponseRaw<T>>({
      url: config.url,
      method: config.method,
      baseURL: config.baseURL,
      headers: config.headers,
      data: config.data,
    }).then(res => res.data)
  }
}

const headers = {
  Token: ''
}

/**
 * 传入配置获取 Http instanse
 */
const $http = createHttp({
  vendor,
  baseURL: '/api',
  headers,
  response: {
    getCode: (raw: ResponseRaw) => raw.code,
    getMessage: (raw: ResponseRaw) => raw.message,
    getData: (raw: ResponseRaw) => raw.result,
  },
  interceptors: {
    auth: (raw: ResponseRaw) => raw.code == 401,
    server: (raw: ResponseRaw) => false
  },
  onAuthError () {
    console.log('auth error')
  },
  onServerError () {
    console.log('server error')
  }
})

const install = (app: App) => {
  app.config.globalProperties.$http = $http
  console.log('install() http', $http);
  app.provide(HttpSymbol, $http)
}

function useHttp () {
  const $http = inject(HttpSymbol)
  console.log('$http', $http)
  return $http
}

export {
  useHttp
}

export default {
  install
}
