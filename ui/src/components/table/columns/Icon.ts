import { ExtractPublicPropTypes, ObjectEmitsOptions, PropType } from 'vue'
import { define } from '../../../utils'
import { Size } from '../../../props/size'
import { EmitsToProps } from '../../../utils/private/helpers'
import { TableColumnStyleDefination, useIconProps } from '../../../components'

const props = {
  /**
   * 列名
   */
  match: {
    type: String,
  },
  ...useIconProps(),
  extraStyle: {
    type: [String, Function] as PropType<TableColumnStyleDefination>,
  }
}

export interface TableColumnIconEmits extends ObjectEmitsOptions {
  click?: () => void
}

const emits: TableColumnIconEmits = {
  click: undefined
}

export type TableColumnIconProps = ExtractPublicPropTypes<typeof props> & EmitsToProps<TableColumnIconEmits>

/**
 * 自定义的表格列: 单个图标
 */
export const NsTableColumnIcon = define({
  name: 'NsTableColumnIcon',
  props,
  emits,
  setup (props, ctx) {
    return {
    }
  }
})
