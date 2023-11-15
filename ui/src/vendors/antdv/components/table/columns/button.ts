import { NsButton, TableColumnButtonProps, TableColumnData } from '../../../../../components'
import { h } from 'vue'

/**
 * Table custom column: button
 * @param column 
 * @param custom 
 */
export default function button (
    props: TableColumnButtonProps,
  ) {
  // TableColumnButton 内部还是一个NsButtton
  // 需要传递出 click 事件
  return ({value, row, rowIndex}: TableColumnData) => h(NsButton, {
    label: props.label,
    size: props.size || 'sm',
    color: 'primary',
    onClick: () => {
      props.onClick?.({value, row, rowIndex})
    }
  }, () => value)
}