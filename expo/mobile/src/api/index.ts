import Taro from '@tarojs/taro'
import { HttpRequestConfig, Paging, PagingParams, ResponseRaw, createHttp } from '@uxda/nutshell/taro'
import { translates, transforms } from './endpoints'
// import { useAppKitOptions } from '../../Appkit'
import clientConfig from './config'

/**
 * 小程序端 Http
 * 使用 Taro.request 实现
 */
const vendor = {
  async request<T>(config: HttpRequestConfig) {
    return new Promise<ResponseRaw<T>>((resolve, reject) => {
      Taro.request({
          url: config.url,
          // @ts-ignore
          method: config.method,
          header: config.headers,
          data: config.data,
        })
        .then(({ data }) => {
          console.log('===request data', data)
          resolve({
            status: data.code,
            message: data.msg,
            data: data.result.list || data.result as T,
            paging: data.result.pageNum !== void 0
              ? clientConfig.paging?.transform(data.result)
              : void 0
          })
        })
        .catch((e: any) => {
          console.log('===e', e)
          reject('$http error')
        })
    })
  },
}

const paging = {
  translate: (params: PagingParams) => ({
    pageNum: params.page,
    pageSize: params.pageSize
  }),
  transform (data: any): Paging {
    return {
      current: data.pageNum,
      pageSize: data.pageSize,
      totalRecords: data.total,
      total: data.totalPages,
    }
  }
}

function useHttp () {
  const headers = {
  }
  const $http = createHttp({
    vendor,
    baseUrl: clientConfig.baseUrl,
    headers,
    interceptors: [
      (raw) => {
        if (raw.status == 401) {
          return true
        }
        return false
      },
      (raw) => {
        if (raw.status > 500 && raw.status != 1100028) {
          return true
        }
        return false
      },
    ],
    translates,
    transforms,
    paging,
  })
  return $http
}

export { useHttp }

export * from './endpoints'
