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
    if (page) {
      // 强制回到第一页
      paging.current = page
      paging.loaded = false
    } else {
      paging.current ++
    }
    // 到达末页
    if (paging.loaded && paging.current > paging.total) {
      paging.current = paging.total
      return Promise.resolve({
        paging,
        data: []
      })
    }
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
