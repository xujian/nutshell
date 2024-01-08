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
  const c = {
    ...clientConfig,
    ...config,
  }
  return new Promise<T>((resolve, reject) => {
    const data = config.data
      && clientConfig.translates
      && clientConfig.translates[c.url]
        ? clientConfig.translates[c.url]?.(c.data || {})
        : c.data
    console.log(`[][][][][]HTTP.${c.method}, ${c.baseUrl}${c.url}`, data)
    clientConfig.vendor?.request({
      url: `${c.baseUrl}${c.url}`,
      data,
      headers: c.headers,
      method: c.method,
    }).then((raw: ResponseRaw) => {
      // 按顺序执行拦截器
      console.log(`===HTTP==`, raw)
      for (const interc of c.interceptors || []) {
        const r = interc(raw)
        if (r) {
          // 某拦截器命中时
          // 按拦截结果 决定是否继续执行
          reject('===INTERCEPTED===')
          return false
        }
      }
      if (raw.data) {
        // 当用户配置含有 transforms 时, 使用用户提供的 transform
        resolve(clientConfig.transforms
          && clientConfig.transforms[c.url]
            ? clientConfig.transforms[c.url]?.(raw.data) as T
            : data as T)
      } else {
        reject(`未知错误`)
      }
    }).catch((e: any) => {
      console.log('request.catch===', e)
    })
  })
}

const get: HttpInstance['get'] = <T = ResponseData>(url: string, data?: RequestData) => {
  return request<T>({
    url,
    data,
    method: HttpMethod.get
  })
}

const post: HttpInstance['post'] = <T = ResponseData>(url: string, data: RequestData) => {
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
  baseUrl: '/',
  interceptors: [
    (raw) => raw.status == 401,
    (raw) => false,
  ]
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
