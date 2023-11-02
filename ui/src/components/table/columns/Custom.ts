import { ObjectEmitsOptions } from 'vue'
import { define, MakePropsType } from '../../../utils'
import { useTableColumnProps } from '../TableColumn'

const props = {
  ...useTableColumnProps(),
}

export interface TableColumnCustomEmits extends ObjectEmitsOptions {
  click: () => void
}

const emits: TableColumnCustomEmits = {
  click: () => void 0
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
