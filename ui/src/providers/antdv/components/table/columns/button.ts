import { NsButton, TableColumnButtonEmits, TableColumnButtonProps } from '../../../../../components'
import { h } from 'vue'

/**
 * Table custom column: button
 * @param column 
 * @param custom 
 */
export default function button (
    props: TableColumnButtonProps,
    component: TableColumnButton
  ) {
  // TableColumnButton 内部还是一个NsButtton
  // 需要传递出 click 事件
  return ({text, record, index}) => h(NsButton, {
    label: props.label,
    size: props.size || 'sm',
    type: 'primary',
    onClick: () => {
      const value = text,
        row = record
      console.log('table/columns/button..............', value, component)
      props.onClick({value, row})
    }
  }, () => text)
}