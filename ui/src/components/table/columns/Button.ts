import { ExtractPublicPropTypes, ObjectEmitsOptions, PropType } from 'vue'
import { define } from '../../../utils'
import { Color } from '../../../composables'
import { Size } from '../../../props/size'
import { EmitsToProps } from '../../../utils/private/helpers'

const props = {
  /**
   * 列名
   */
  match: {
    type: String,
  },
  label: {
    type: String,
  },
  color: {
    type: String as PropType<Color>,
  },
  size: {
    type: String as PropType<Size>,
    default: 'sm',
  },
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
