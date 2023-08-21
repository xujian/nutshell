import { ExtractPublicPropTypes, PropType } from 'vue'
import type { TableColumnsType } from 'ant-design-vue'
import { define } from '../../utils'

export type TableRow = {
  [key: string]: string | number
}

export type TableData = TableRow[]

const props = {
  /**
   * 行数据
   */
  dataSource: {
    type: Array as PropType<TableData>,
    default: [],
  },
  /**
   * Columns Customization 列配置
   */
  columns: {
    type: Object as PropType<TableColumnsType>,
  }
}

export type TableProps = ExtractPublicPropTypes<typeof props>

export const NsTable = define({
  name: 'NsTable',
  props,
  setup (props, ctx) {
    return {
      props
    }
  }
})