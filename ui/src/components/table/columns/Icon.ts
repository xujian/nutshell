import { ObjectEmitsOptions } from 'vue'
import { define, MakePropsType } from '../../../utils'
import { TableColumnData, useTableColumnProps } from '../../table/TableColumn'
import { useIconProps } from '../../../components/icon'

const iconProps = {
  ...useTableColumnProps(),
  ...useIconProps(),
}

export interface TableColumnIconEmits extends ObjectEmitsOptions {
  click: ({value, row, index}: TableColumnData) => void
}

const iconEmits: TableColumnIconEmits = {
  click: ({value, row, index}: TableColumnData) => void 0
}

export type TableColumnIconProps = MakePropsType<typeof iconProps, TableColumnIconEmits>

/**
 * 自定义的表格列: 单个图标
 */
export const NsTableColumnIcon = define({
  name: 'NsTableColumnIcon',
  props: iconProps,
  emits: iconEmits,
  setup (props, ctx) {
    return {
    }
  }
})
