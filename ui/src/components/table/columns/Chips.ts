import { MakePropsType, define } from '../../../utils'
import { useChipProps } from '../../chip'
import { useTableColumnProps } from '../TableColumn'

const props = {
  ...useTableColumnProps(),
  ...useChipProps(),
}

export type TableColumnChipsProps = MakePropsType<typeof props>

/**
 * 多标签列
 */
export const NsTableColumnChips = define({
  name: 'NsTableColumnChips',
  props,
  setup (props, ctx) {
    return {
    }
  }
})
