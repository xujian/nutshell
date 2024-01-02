import { Http, HttpClientConfig,
  HttpMethod, HttpRequestConfig,
  RequestData, ResponseData,
  ResponseRaw } from './types'
/**
 * Useage:
 * const $http = useHttp()
 * $http.get('/url').then(data => {
 *
 * })
 */

/**
 * 统一请求过程
 * @param config
 * @returns
 */
const request: Http['request'] = <T>(config: HttpRequestConfig) => {
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
    console.log(`===HTTP.${config.method}, ${clientConfig.baseUrl}${config.url}`, data)
    clientConfig.vendor?.request({
      url: `${clientConfig.baseUrl}${config.url}`,
      data,
      header: clientConfig.header,
      method: config.method,
    }).then((res: ResponseRaw) => {
      if (!isSuccess(res)) {
        reject(`接口报错`)
      }
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
    }).fail((error: any) => {
      console.log(error)
    })
  })
}

const get: Http['get'] = <T>(url: string, data?: RequestData) => {
  return request<T>({
    url,
    data,
    method: HttpMethod.get
  })
}

const post: Http['post'] = <T>(url: string, data: RequestData) => {
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
  response: {
    getCode: (data: ResponseRaw) => data.code,
    getMessage: (data: ResponseRaw) => data.msg,
    getData: (data: ResponseRaw) => data.result
  },
  interceptors: {
    auth: (data) => data.code == '401',
    server: (data) => false,
  }
}

let clientConfig = {
  ...defaultClientConfig
}

/**
 * 写入配置并
 * @param config
 * @returns
 */
export function useHttp (config: HttpClientConfig): Http {

  const clientConfig = {
    ...defaultClientConfig,
    ...config
  }

  return {
    request,
    get,
    post
  }
}


function isSuccess (res: ResponseRaw) {
  return /^2/.test(res.statusCode.toString())
}
