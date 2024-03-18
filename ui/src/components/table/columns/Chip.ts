import { MakePropsType, define } from '../../../utils'
import { useChipProps } from '../../../components/chip'
import { useTableColumnProps } from '../TableColumn'

export type TableColumnStyleGetter = (value: string, row: Record<string, any>) => string

export type TableColumnStyleDefination =
  string | TableColumnStyleGetter

const props = {
  ...useTableColumnProps(),
  ...useChipProps(),
}

export type TableColumnChipProps = MakePropsType<typeof props>

/**
 * 单个标签表格列
 */
export const NsTableColumnChip = define({
  name: 'NsTableColumnChip',
  props,
  setup (props, ctx) {
    return {
    }
  }
})
