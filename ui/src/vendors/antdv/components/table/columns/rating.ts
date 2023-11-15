import { NsRating, TableColumnData, TableColumnRatingProps } from '../../../../../components'
import { h } from 'vue'

/**
 * Table custom column: chip
 * @param column 
 * @param custom 
 */
export default function rating (props: TableColumnRatingProps) {
  const color = props.color || 'primary'
  return ({value, row, rowIndex}: TableColumnData) => h(NsRating, {
    color: color,
  }, () => value)
}
