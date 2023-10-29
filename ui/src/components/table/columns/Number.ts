import { ExtractPublicPropTypes, ObjectEmitsOptions, PropType } from 'vue'
import { define } from '../../../utils'
import { EmitsToProps } from '../../../utils/private/helpers'
import { TableColumnStyleDefination, useTableColumnProps } from '../..'

const props = {
  ...useTableColumnProps(),
}

export interface TableColumnNumberEmits extends ObjectEmitsOptions {
  click: () => void
}

const emits: TableColumnNumberEmits = {
  click: () => void 0
}

export type TableColumnNumberProps = ExtractPublicPropTypes<typeof props> & EmitsToProps<TableColumnNumberEmits>

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
