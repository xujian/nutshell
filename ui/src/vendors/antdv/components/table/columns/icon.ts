import { NsIcon, TableColumnData, TableColumnIconProps } from '../../../../../components'
import { h } from 'vue'

/**
 * Table custom column: icon
 * @param column 
 * @param custom 
 */
export default function icon (
    props: TableColumnIconProps,
  ) {
  return ({value, row, index}: TableColumnData) => h(NsIcon, {
    source: props.source,
    color: props.color,
    onClick: () => {
      props.onClick?.({value, row, index})
    }
  }, () => value)
}