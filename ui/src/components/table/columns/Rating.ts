import { ExtractPublicPropTypes, PropType } from 'vue'
import { define } from '../../../utils'

const props = {
  /**
   * 列名
   */
  match: {
    type: String,
  },
  extraStyle: {
    type: [String, Function] as PropType<TableColumnStyleDefination>,
  }
}

export type TableColumnRatingProps = ExtractPublicPropTypes<typeof props>

/**
 * 自定义的表格列样式
 */
export const NsTableColumnRating = define({
  name: 'NsTableColumnRating',
  props,
  setup (props, ctx) {
    return {
    }
  }
})
