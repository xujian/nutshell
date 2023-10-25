import { ExtractPublicPropTypes, ObjectEmitsOptions, PropType } from 'vue'
import { define } from '../../../utils'
import { EmitsToProps } from '../../../utils/private/helpers'
import { useTableColumnProps } from '../../table/TableColumn'
import { useButtonProps } from '../../../components/button'

const props = {
  ...useTableColumnProps(),
  ...useButtonProps(),
}

export interface TableColumnButtonEmits extends ObjectEmitsOptions {
  click?: () => void
}

const emits: TableColumnButtonEmits = {
  click: undefined
}

export type TableColumnButtonProps = ExtractPublicPropTypes<typeof props> & EmitsToProps<TableColumnButtonEmits>

/**
 * 自定义的表格列样式
 */
export const NsTableColumnButton = define({
  name: 'NsTableColumnButton',
  props,
  emits,
  setup (props, ctx) {
    return {
    }
  }
})
