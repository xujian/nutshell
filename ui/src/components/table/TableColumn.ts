import { ExtractPublicPropTypes, PropType } from 'vue'
import { define } from '../../utils'

export type TableColumnCustomizationType = 
  'chip' | 
  'date' | 
  'decimal' | 
  'button'

export type TableColumnStyleGetter = (value: string, record: Record<string, any>) => string 

export type TableColumnStyleDefination = 
  string | TableColumnStyleGetter

const props = {
  /**
   * 列名
   */
  match: {
    type: String,
  },
  type: {
    type: String as PropType<TableColumnCustomizationType>,
  },
  extraStyle: {
    type: [String, Function] as PropType<TableColumnStyleDefination>,
  }
}

export type TableColumnProps = ExtractPublicPropTypes<typeof props>

/**
 * 自定义的表格列样式
 */
export const NsTableColumn = define({
  name: 'NsTableColumn',
  props,
  setup (props, ctx) {
    return {
    }
  }
})
