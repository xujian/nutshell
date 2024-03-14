import { define, MakePropsType } from '../../../utils'
import { useTableColumnProps } from '../..'

const props = {
  ...useTableColumnProps(),
}

export type TableColumnNumberEmits = {
}

const emits: TableColumnNumberEmits = {
}

export type TableColumnNumberProps = MakePropsType<typeof props, TableColumnNumberEmits>

/**
 * 序号列
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
