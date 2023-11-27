import { MakePropsType } from '../../../utils/private/helpers'
import { TableColumnData, useTableColumnProps } from '../../table/TableColumn'
import { useButtonProps } from '../../../components/button'
import { define } from '../../../utils'

const props = {
  ...useTableColumnProps(),
  ...useButtonProps(),
}

export type TableColumnButtonEmits = {
  click: ({value, row, rowIndex}: TableColumnData) => void
}

const emits: TableColumnButtonEmits = {
  click: ({value, row, rowIndex}: TableColumnData) => void 0
}

export type TableColumnButtonProps = MakePropsType<typeof props, TableColumnButtonEmits>

/**
 * 自定义的表格列样式
 */
export const NsTableColumnButton = define({
  name: 'NsTableColumnButton',
  props,
  emits,
  setup (props, ctx) {
    return {
    }
  }
})
