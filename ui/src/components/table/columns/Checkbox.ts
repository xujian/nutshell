import { ObjectEmitsOptions, PropType } from 'vue'
import { define, MakePropsType } from '../../../utils'
import { useTableColumnProps } from '../../table/TableColumn'
import { TableColumnDefinition } from '../Table'

const props = {
  ...useTableColumnProps(),
  onChange: {
    type: Function as PropType<(selected: any[]) => void>
  }
}

export type TableColumnCheckboxEmits = {
}

const emits: TableColumnCheckboxEmits = {
}

export type TableColumnCheckboxProps = MakePropsType<typeof props, TableColumnCheckboxEmits>

/**
 * 自定义的表格列样式
 */
export const NsTableColumnCheckbox = define({
  name: 'NsTableColumnCheckbox',
  props,
  emits,
  setup (props, ctx) {
    return {
    }
  }
})

export type NsTableColumnCheckbox = InstanceType<typeof NsTableColumnCheckbox>
