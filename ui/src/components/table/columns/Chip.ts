import { ExtractPublicPropTypes, PropType } from 'vue'
import { define } from '../../../utils'
import { useChipProps } from '../../../components/chip'
import { useTableColumnProps } from '../TableColumn'

export type TableColumnStyleGetter = (value: string, record: Record<string, any>) => string 

export type TableColumnStyleDefination = 
  string | TableColumnStyleGetter

const props = {
  ...useTableColumnProps(),
  ...useChipProps(),
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
