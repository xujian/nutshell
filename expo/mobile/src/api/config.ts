import type { HttpClientConfig, PagingParams, PagingData } from '@uxda/nutshell/taro'

const clientConfig: HttpClientConfig = {
  // baseUrl: 'http://localhost:2024',
  baseUrl: 'https://simple.shensi.tech',
  paging: {
    translate: (params: PagingParams) => ({
      pageNum: params.page,
      pageSize: params.pageSize || 10,
    }),
    transform (data: any): PagingData {
      const totalRecords = + data.total || 10,
        pageSize = + data.pageSize || 10,
        total = data.pages || Math.ceil(totalRecords / pageSize)
      return {
        total,
        totalRecords
      }
    },
  },
}

export default clientConfig
