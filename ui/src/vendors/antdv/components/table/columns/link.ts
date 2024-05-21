import { TableColumnData, TableColumnLinkProps } from '../../../../../components'
import { h } from 'vue'

/**
 * Table custom column: button
 * @param column
 * @param custom
 */
export default function button (
    props: TableColumnLinkProps,
  ) {
  // TableColumnButton 内部还是一个NsButtton
  // 需要传递出 click 事件
  return ({value, row, rowIndex}: TableColumnData) => h('a', {
      class: [
        'table-column-link'
      ],
      href: props.href ?? 'javascript:void(0);',
      onClick: (e) => {
        e.preventDefault()
        e.stopImmediatePropagation(),
        props.onClick?.({value, row, rowIndex})
      }
    },
    value
  )
}
