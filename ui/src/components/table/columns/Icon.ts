import { ExtractPublicPropTypes, ObjectEmitsOptions, PropType } from 'vue'
import { define } from '../../../utils'
import { Size } from '../../../props/size'
import { EmitsToProps } from '../../../utils/private/helpers'
import { useTableColumnProps } from '../../table/TableColumn'
import { useIconProps } from '../../../components/icon'

const iconProps = {
  ...useTableColumnProps(),
  ...useIconProps(),
}

export interface TableColumnIconEmits extends ObjectEmitsOptions {
  click: () => void
}

const iconEmits: TableColumnIconEmits = {
  click: () => void 0
}

export type TableColumnIconProps = ExtractPublicPropTypes<typeof iconProps> & EmitsToProps<TableColumnIconEmits>

/**
 * 自定义的表格列: 单个图标
 */
export const NsTableColumnIcon = define({
  name: 'NsTableColumnIcon',
  iconProps,
  iconEmits,
  setup (props, ctx) {
    return {
    }
  }
})
