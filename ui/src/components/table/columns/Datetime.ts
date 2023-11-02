import { ObjectEmitsOptions } from 'vue'
import { define, MakePropsType } from '../../../utils'
import { useTableColumnProps } from '../TableColumn'

export const props: Record<string, any> = {
  ...useTableColumnProps(),
  format: {
    type: String,
    default: "YYYY-MM-DD HH:mm",
  },
}

export interface TableColumnDatetimeEmits extends ObjectEmitsOptions {
  click: () => void
}

const emits: TableColumnDatetimeEmits = {
  click: () => void 0
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
