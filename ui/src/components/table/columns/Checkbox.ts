import { ExtractPublicPropTypes, ObjectEmitsOptions, PropType } from 'vue'
import { define } from '../../../utils'
import { EmitsToProps } from '../../../utils/private/helpers'
import { TableColumnData, useTableColumnProps } from '../../table/TableColumn'
import { useButtonProps } from '../../../components/button'

const props = {
  ...useTableColumnProps(),
  onChange: {
    type: Function as PropType<(selected: any[]) => void>
  }
}

export interface TableColumnCheckboxEmits extends ObjectEmitsOptions {
}

const emits: TableColumnCheckboxEmits = {
}

export type TableColumnCheckboxProps = ExtractPublicPropTypes<typeof props> & EmitsToProps<TableColumnCheckboxEmits>

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
