import { define, MakePropsType } from '../../../utils'
import { TableColumnData, useTableColumnProps } from '../TableColumn'

export const props: Record<string, any> = {
  ...useTableColumnProps(),
  format: {
    type: String,
    default: "YYYY-MM-DD HH:mm",
  },
}

export type TableColumnDatetimeEmits = {
  click: ({value, row, rowIndex}: TableColumnData) => void
}

const emits: TableColumnDatetimeEmits = {
  click: ({value, row, rowIndex}: TableColumnData) => void 0
}

export type TableColumnDatetimeProps = MakePropsType<typeof props, TableColumnDatetimeEmits>

/**
 * 显示日期时间的表格列
 */
export const NsTableColumnDatetime = define({
  name: 'NsTableColumnDatetime',
  props,
  emits,
  setup (props, ctx) {
    return {
    }
  }
})
