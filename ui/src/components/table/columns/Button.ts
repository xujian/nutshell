import { ExtractPublicPropTypes, ObjectEmitsOptions, PropType } from 'vue'
import { define } from '../../../utils'
import { EmitsToProps } from '../../../utils/private/helpers'
import { TableColumnStyleDefination, useButtonProps } from '../../../components'

const props = {
  /**
   * 列名
   */
  match: {
    type: String,
  },
  ...useButtonProps(),
  extraStyle: {
    type: [String, Function] as PropType<TableColumnStyleDefination>,
  }
}

export interface TableColumnButtonEmits extends ObjectEmitsOptions {
  click?: () => void
}

const emits: TableColumnButtonEmits = {
  click: undefined
}

export type TableColumnButtonProps = ExtractPublicPropTypes<typeof props> & EmitsToProps<TableColumnButtonEmits>

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
