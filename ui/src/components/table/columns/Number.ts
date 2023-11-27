import { define, MakePropsType } from '../../../utils'
import { useTableColumnProps } from '../..'

const props = {
  ...useTableColumnProps(),
}

export type TableColumnNumberEmits = {
  click: () => void
}

const emits: TableColumnNumberEmits = {
  click: () => void 0
}

export type TableColumnNumberProps = MakePropsType<typeof props, TableColumnNumberEmits>

/**
 * 自定义的表格列样式
 */
export const NsTableColumnNumber = define({
  name: 'NsTableColumnNumber',
  props,
  emits,
  setup (props, ctx) {
    return {
    }
  }
})
