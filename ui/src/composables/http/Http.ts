import omit from 'lodash/omit'
import { HttpInstance, HttpClientConfig,
  HttpMethod, HttpRequestConfig,
  RequestData, ResponseData,
  ResponseRaw,
PagingParams} from './types'

export type DownloadFileParams = {
  data: string,
  contentType: string,
  fileName: string,
}

const downloadFile = ({data, contentType, fileName}: DownloadFileParams) => {
  const blob = new Blob([data], { type: contentType })
  const element = document.createElement('a')
  const href = window.URL.createObjectURL(blob)
  element.href = href
  element.download = fileName
  element.click()
  element.remove()
  window.URL.revokeObjectURL(href) // 主动释放
}

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
    let data = config.data
      && clientConfig.translates
      && clientConfig.translates[c.url]
        ? clientConfig.translates[c.url]?.(c.data || {})
        : c.data
    // 处理 分页
    if (clientConfig.paging && data && data.page) {
      const paging = clientConfig.paging.translate(data as PagingParams)
      data = omit({
        ...data,
        ...paging,
      }, 'page')
    }
    console.log(`[][][][][]HTTP.${c.method}, ${c.baseUrl}${c.url}`, data)
    clientConfig.vendor?.request({
      url: `${c.baseUrl}${c.url}`,
      data,
      headers: c.headers,
      method: c.method === HttpMethod.download || c.method === HttpMethod.stream
        ? HttpMethod.get
        : c.method,
      ...c.method === HttpMethod.download || c.method === HttpMethod.stream
        ? { responseType: 'blob' }
        : {}
    }).then((raw: ResponseRaw) => {
      // 按顺序执行拦截器
      const headers = raw.headers as any
      for (const interc of c.interceptors || []) {
        const r = interc(raw)
        if (r) {
          // 某拦截器命中时
          // 按拦截结果 决定是否继续执行
          reject('===INTERCEPTED===' + raw.status)
          return false
        }
      }
      const cd = headers.get('Content-Disposition') as string
      if (cd) {
        // 进入下载处理或 stream 处理
        // 丛 http headers 获取 文件名/content-type
        const [, fileName] = cd.split('filename='),
          contentType = headers.get('Content-Type') as string
        console.log('===c.method', contentType, fileName)
        if (c.method === HttpMethod.download) {
          downloadFile({

            // @ts-ignore
            data: raw.data,
            contentType,
            // contentType: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,application/vnd.ms-excel',
            fileName: decodeURIComponent(fileName)
          })
          resolve({
            file: fileName
          } as T)
        } else {
          // 处理非下载的 stream 请求
          // @ts-ignore
          const blob = new Blob([raw.data], {
            // type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=utf-8'
            // type: 'application/vnd.ms-excel'
            type: contentType
          })
          const file = new File([blob], 'm.xlsx')
          resolve (file as T)
        }
        return
      }
      if (raw.data) {
        // 当用户配置含有 transforms 时, 使用用户提供的 transform
        // 先 endpoints transform
        // 再组装分页数据
        const response = clientConfig.transforms
          && clientConfig.transforms[c.url]
            ? clientConfig.transforms[c.url]?.(raw.data) as T
            : data as T
        // 前端要求分页
        // 在 endpoints transform 之前格式化分页数据
        // 并拼装回原 raw 数据
        const paging = config.data?.page
          ? clientConfig.paging?.transform(raw.data)
          : void 0
        resolve(
          paging
            ? {
                ...paging,
                data: response
              } as T
            : response
        )
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
 * 下载文件
 */
const download: HttpInstance['download'] = (url: string, data: RequestData) => {
  return new Promise((resolve, reject) => {
    request({
      url,
      data,
      method: HttpMethod.download
    }).then((rsp) => {
      resolve()
    }).catch(() => {
      reject()
    })
  })
}

/**
 * 获取文件流
 */
const stream: HttpInstance['stream'] = (url: string, data: RequestData) => {
  return new Promise((resolve, reject) => {
    request<File>({
      url,
      data,
      method: HttpMethod.stream
    }).then((file) => {
      resolve(file)
    }).catch(() => {
      reject()
    })
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
    post,
    download,
    stream
  }
}
