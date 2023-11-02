import { ObjectEmitsOptions } from 'vue'
import { define } from '../../../utils'
import { EmitsToProps, MakePropsType } from '../../../utils/private/helpers'
import { TableColumnData, useTableColumnProps } from '../../table/TableColumn'
import { useButtonProps } from '../../../components/button'

const props = {
  ...useTableColumnProps(),
  ...useButtonProps(),
}

export interface TableColumnButtonEmits extends ObjectEmitsOptions {
  click: ({value, row, index}: TableColumnData) => void
}

const emits: TableColumnButtonEmits = {
  click: ({value, row, index}: TableColumnData) => void 0
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
