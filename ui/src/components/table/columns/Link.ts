import { MakePropsType } from '../../../utils/private/helpers'
import { TableColumnData, useTableColumnProps } from '../TableColumn'
import { define } from '../../../utils'

const props = {
  ...useTableColumnProps(),
  href: {
    type: String
  }
}

export type TableColumnLinkEmits = {
  click: ({value, row, rowIndex}: TableColumnData) => void
}

const emits: TableColumnLinkEmits = {
  click: ({value, row, rowIndex}: TableColumnData) => void 0
}

export type TableColumnLinkProps = MakePropsType<typeof props, TableColumnLinkEmits>

/**
 * 自定义的表格列样式
 */
export const NsTableColumnLink = define({
  name: 'NsTableColumnLink',
  props,
  emits,
  setup (props, ctx) {
    return {
    }
  }
})
