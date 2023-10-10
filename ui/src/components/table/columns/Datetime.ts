import { ExtractPublicPropTypes, ObjectEmitsOptions, PropType } from 'vue'
import { define } from '../../../utils'
import { EmitsToProps } from '../../../utils/private/helpers'
import { TableColumnStyleDefination } from '../../../components/table'
import { useButtonProps } from '../../../components/button'

const props = {
  /**
   * 列名
   */
  match: {
    type: String,
  },
  extraStyle: {
    type: [String, Function] as PropType<TableColumnStyleDefination>,
  },
  format: {
    type: String,
  },
}

export interface TableColumnDatetimeEmits extends ObjectEmitsOptions {
  click?: () => void
}

const emits: TableColumnDatetimeEmits = {
  click: undefined
}

export type TableColumnDatetimeProps = ExtractPublicPropTypes<typeof props> & EmitsToProps<TableColumnDatetimeEmits>

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
