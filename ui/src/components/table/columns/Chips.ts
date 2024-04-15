import { EditableEmits, useEditableEmits, useEditableProps } from '../../../props'
import { MakePropsType, define } from '../../../utils'
import { useChipProps } from '../../chip'
import { TableColumnData, useTableColumnProps } from '../TableColumn'

const props = {
  ...useTableColumnProps(),
  ...useChipProps(),
  ...useEditableProps()
}

export type TableColumnChipsEmits = {
  click: ({value, row, rowIndex}: TableColumnData) => void
} & EditableEmits

const tableColumnChipsEmits: TableColumnChipsEmits = {
  click: ({value, row, rowIndex}: TableColumnData) => void 0,
  ...useEditableEmits(),
}

export type TableColumnChipsProps = MakePropsType<typeof props, TableColumnChipsEmits>

/**
 * 多标签列
 */
export const NsTableColumnChips = define({
  name: 'NsTableColumnChips',
  props,
  emits: tableColumnChipsEmits,
  setup (props, ctx) {
    return {
    }
  }
})
