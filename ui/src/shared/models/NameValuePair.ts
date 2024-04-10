
/**
 * 通用数据项
 * 强行定义所有遍历类组件
 */
export type NameValuePair = {
  // 字段
  // name/value 为强制字段 即使字段闲置
  // id 可以有可以没有
  // 允许添加其他任意字段
  // (<ns-table>中的列)
  name: string,
  value: number | string,
  id?: string,
  [x: string]: any
}
