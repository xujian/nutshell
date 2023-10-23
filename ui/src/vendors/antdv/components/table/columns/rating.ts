import { NsRating, TableColumnRatingProps } from '../../../../../components'
import { Rate as AntdvRate } from 'ant-design-vue'
import { h } from 'vue'

/**
 * Table custom column: chip
 * @param column 
 * @param custom 
 */
export default function rating (props: TableColumnRatingProps) {
  const color = props.color
  const style = [
    color && `color:${props.color}`
  ].join(' ')
  return ({text, record, index}) => h(NsRating, {
    value: +text || 0,
    style,
  }, () => text)
}