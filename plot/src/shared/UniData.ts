
/**
 * 通用数据项
 * 强行定义所有遍历类组件
 */
export type UniDataItem = {
  // 字段
  // name/value 为强制字段 即使字段闲置
  // id 可以有可以没有
  // 允许添加其他任意字段
  // (<ns-table>中的列)
  name?: string,
  value: number | string,
  label?: string,
  id?: string,
  disabled?: boolean,
  [x: string]: any
}

export type Layer = {
  label: string,
  y?: string,
  data: UniDataItem[],
}

/**
 * 标准数据格式
 * // 两种形式
 * 1. 分 layer, 层之下有 series
 * 2. 没有 layer, 只有 series
 */
export type UniData = Layer[] | UniDataItem[][]

export function isLayer (d: UniData[number]): d is Layer {
  return Reflect.has(d, 'label')
}
