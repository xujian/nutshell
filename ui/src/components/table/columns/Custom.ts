import { ExtractPublicPropTypes, ObjectEmitsOptions, PropType } from 'vue'
import { define } from '../../../utils'
import { EmitsToProps } from '../../../utils/private/helpers'
import { TableColumnStyleDefination, useTableColumnProps } from '../../'

const props = {
  ...useTableColumnProps(),
}

export interface TableColumnCustomEmits extends ObjectEmitsOptions {
  click: () => void
}

const emits: TableColumnCustomEmits = {
  click: () => void 0
}

export type TableColumnCustomProps = ExtractPublicPropTypes<typeof props> & EmitsToProps<TableColumnCustomEmits>

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
