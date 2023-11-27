import { ObjectEmitsOptions } from 'vue'
import { define, MakePropsType } from '../../../utils'
import { TableColumnData, useTableColumnProps } from '../TableColumn'

const props = {
  ...useTableColumnProps(),
}

export type TableColumnCustomEmits = {
  click: ({value, row, rowIndex}: TableColumnData) => void
}

const emits: TableColumnCustomEmits = {
  click: ({value, row, rowIndex}: TableColumnData) => void 0

}

export type TableColumnCustomProps = MakePropsType<typeof props, TableColumnCustomEmits>

/**
 * 自定义的表格列样式
 */
export const NsTableColumnCustom = define({
  name: 'NsTableColumnCustom',
  props,
  emits,
  setup (props, ctx) {
    return {
    }
  }
})
