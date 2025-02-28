import { computed, ComputedRef, type PropType } from 'vue'
import { buildProps } from '../utils/private/props'


export type GroupFunction<T = any> = (item: T) => string

export const groupingProps = {
  groupBy: {
    type: [String, Function] as PropType<GroupFunction>,
  }
}
export const useGroupingProps = buildProps(groupingProps)

/**
 * 分组后的数据格式
 */
export type GroupedData<T = any> = {
  name: string,
  items: T[]
}[]

/**
 * Add grouping to list like components
 * 能对列表数据进行分组
 * <ns-list group-by="category" />
 * <ns-list :group-by="item => { const date = new Date(item.date); return date.getFullYear() }" />
 * @param data 
 * @param grouping 
 * @returns 
 */
export function useGrouping<T = any>(
  data: T[] | undefined,
  grouping: GroupFunction | undefined
): {
  groups: ComputedRef<GroupedData<T> | null>,
  hasGroups: ComputedRef<boolean>
} {
  const groups: ComputedRef<GroupedData<T> | null> = computed(() => {
    if (!data || !grouping) {
      return null
    }

    const getGroupKey = typeof grouping === 'string'
      ? (item: T) => (item as any)[grouping]
      : grouping

    // 按照 grouping 的规则对数据进行分组
    // 规则可以是限定字符串、函数
    // groupBy 函数需要对某个字段进行计算，返回有限的字符串
    const result = data.reduce((acc, item) => {
      const key = getGroupKey(item)
      if (!acc[key]) {
        acc[key] = []
      }
      acc[key].push(item)
      return acc
    }, {} as Record<string, T[]>)

    return Object.entries(result).map(([name, items]) => ({
      name,
      items
    }))
  })

  // 返回分组后的数据
  // 由组件确定显示方式
  return {
    groups,
    hasGroups: computed(() => groups.value !== null)
  }
} 