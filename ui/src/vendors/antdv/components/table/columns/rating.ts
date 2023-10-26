import { NsRating, TableColumnComponentProps, TableColumnRatingProps } from '../../../../../components'
import { Rate as AntdvRate } from 'ant-design-vue'
import { h } from 'vue'

/**
 * Table custom column: chip
 * @param column 
 * @param custom 
 */
export default function rating (props: TableColumnRatingProps) {
  const color = props.color || 'primary'
  return ({text, record, index}: TableColumnComponentProps) => h(NsRating, {
    color: color,
  }, () => text)
}
