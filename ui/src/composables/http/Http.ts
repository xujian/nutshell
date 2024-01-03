import { HttpInstance, HttpClientConfig,
  HttpMethod, HttpRequestConfig,
  RequestData, ResponseData,
  ResponseRaw } from './types'
/**
 * Useage:
 * const $http = createHttp({
 *
 * })
 * $http.get('/url').then(data => {
 *
 * })
 */

/**
 * 统一请求过程
 * @param config
 * @returns
 */
const request: HttpInstance['request'] = <T>(config: HttpRequestConfig) => {
  clientConfig = {
    ...clientConfig,
    ...config,
  }
  return new Promise<T>((resolve, reject) => {
    const data = config.data
      && clientConfig.translates
      && clientConfig.translates[config.url]
        ? clientConfig.translates[config.url](config.data)
        : config.data
    console.log(`===HTTP.${config.method}, ${clientConfig.baseURL}${config.url}`, data)
    clientConfig.vendor?.request({
      url: `${clientConfig.baseURL}${config.url}`,
      data,
      headers: clientConfig.headers,
      method: config.method,
    }).then((res: ResponseRaw) => {
      const { data: raw } = res
      if (clientConfig.interceptors?.auth(raw)) {
        clientConfig.onAuthError?.()
        reject('--- 401 ---')
      }
      if (clientConfig.interceptors?.server(raw)) {
        clientConfig.onServerError?.()
        reject('server error')
      }
      const response = clientConfig.response?.getData(raw)
      if (response) {
        // 当用户配置含有 transforms 时, 使用用户提供的 transform
        resolve(clientConfig.transforms
          && clientConfig.transforms[config.url]
            ? clientConfig.transforms[config.url](response) as T
            : response as T)
      } else {
        reject(`未知错误`)
      }
    }).catch((e: any) => {
      console.log('request.catch===', e)
    })
  })
}

const get: HttpInstance['get'] = <T>(url: string, data?: RequestData) => {
  return request<T>({
    url,
    data,
    method: HttpMethod.get
  })
}

const post: HttpInstance['post'] = <T>(url: string, data: RequestData) => {
  return request<T>({
    url,
    data,
    method: HttpMethod.post
  })
}

/**
 * 场景配置
 * 本地后台团队统一返回值外层
 */
const defaultClientConfig: HttpClientConfig = {
  baseURL: '/',
  response: {
    getCode: (raw: ResponseRaw) => raw.code,
    getMessage: (raw: ResponseRaw) => raw.msg,
    getData: (raw: ResponseRaw) => raw.result
  },
  interceptors: {
    auth: (raw) => raw.code == '401',
    server: (raw) => false,
  }
}

let clientConfig = {
  ...defaultClientConfig
}

/**
 * 写入配置并返回 HTTP instance
 * @param config
 * @returns
 */
export function createHttp (config: HttpClientConfig): HttpInstance {

  clientConfig = {
    ...defaultClientConfig,
    ...config
  }

  return {
    request,
    get,
    post
  }
}
