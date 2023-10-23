import { ExtractPublicPropTypes, PropType } from 'vue'
import { define } from '../../../utils'
import { Color } from '../../../composables'
import { useTableColumnProps } from '../..'

const props = {
  ...useTableColumnProps(),
  color: {
    type: String as PropType<Color>,
  },
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
