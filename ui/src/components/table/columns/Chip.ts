import { ExtractPublicPropTypes, PropType } from 'vue'
import { define } from '../../../utils'
import { useChipProps } from '../../../components'

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
  ...useChipProps(),
  extraStyle: {
    type: [String, Function] as PropType<TableColumnStyleDefination>,
  }
}

export type TableColumnChipProps = ExtractPublicPropTypes<typeof props>

/**
 * 自定义的表格列样式
 */
export const NsTableColumnChip = define({
  name: 'NsTableColumnChip',
  props,
  setup (props, ctx) {
    return {
    }
  }
})
