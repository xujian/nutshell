import { NsRating, TableColumnData, TableColumnRatingProps } from '../../../../../components'
import { h } from 'vue'

/**
 * Table custom column: chip
 * @param column
 * @param custom
 */
export default function rating (props: TableColumnRatingProps) {
  const color = props.color || 'primary'
  return ({value, row, rowIndex}: TableColumnData<number>) => h(NsRating, {
    color: color,
    value: value,
    onChange: (value) => {
      console.log('===rating in table column change: value', value, row)
      // @ts-ignore
      props.onChange?.(value, row)
    }
  })
}
