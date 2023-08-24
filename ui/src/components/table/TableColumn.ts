import { ExtractPublicPropTypes, PropType } from 'vue'
import { define } from '../../utils'

export type TableColumnCustomizationType = 
  'chip' | 
  'date' | 
  'decimal' | 
  'button'

const props = {
  /**
   * 列名
   */
  match: {
    type: String,
  },
  type: {
    type: String as PropType<TableColumnCustomizationType>,
  }
}

export type TableColumnProps = ExtractPublicPropTypes<typeof props>

export const NsTableColumn = define({
  name: 'NsTableColumn',
  props,
  setup (props, ctx) {
    return {
    }
  }
})
