import { TableColumnRatingProps } from '../../../../../components'
import { Rate as AntdvRate } from 'ant-design-vue'
import { h } from 'vue'

/**
 * Table custom column: chip
 * @param column 
 * @param custom 
 */
export default function rating (custom: TableColumnRatingProps) {
  const color = custom.color
  const style = [
    color && `color:${custom.color}`
  ].join(' ')
  return ({text, record, index}) => h(AntdvRate, {
    value: +text || 0,
    style,
  }, () => text)
}