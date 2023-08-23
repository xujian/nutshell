import { ExtractPublicPropTypes, PropType, ref, toRefs, useSlots } from 'vue'
import { define } from '../../utils'
import { h } from 'vue'
import { NsChip } from '../chip'
import { watch } from 'vue'

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
    type: Object as PropType<any[]>,
  }
}

export type TableProps = ExtractPublicPropTypes<typeof props>

export const NsTable = define({
  name: 'NsTable',
  props,
  setup (props: TableProps, ctx) {
    return {
      props
    }
  }
})
