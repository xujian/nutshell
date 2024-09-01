import { reactive } from 'vue'
import { Paging } from './types'


export type UsePagingLoadFunction = (page?: number) => Promise<{paging: Paging, data: any[]}>

export type UsePaging = (load: UsePagingLoadFunction) => {
  paging: Paging,
  nextPage: UsePagingLoadFunction
}

/**
 * 用于统一处理上滑加载下一页功能
 * @param load 加载数据的函数
 * @returns
 */
export const usePaging: UsePaging = (load: UsePagingLoadFunction) => {

  const paging = reactive<Paging>({
    current: 0,
    totalRecords: 10,
    pageSize: 10,
    total: 0,
    loaded: false,
  })

  const nextPage = async (page?: number) => {
      // 强制回到第一页
    if (page) {
      paging.current = page
    }
    // 到达末页
    if (paging.loaded && paging.total === paging.current) {
      return Promise.resolve({
        paging,
        data: []
      })
    }
    paging.current ++
    return load(paging.current).then((result) => {
      paging.loaded = true
      paging.total = result.paging.total
      console.log('===load paging', paging)
      return { paging, data: result.data }
    })
  }

  return {
    paging,
    nextPage
  }
}
