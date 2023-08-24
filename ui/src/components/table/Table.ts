import { ExtractPublicPropTypes, PropType, computed, ref, toRefs, useSlots } from 'vue'
import { define } from '../../utils'
import { h } from 'vue'
import { NsChip } from '../chip'
import { watch } from 'vue'
import { TableColumnProps } from './TableColumn'

export type TableRow = {
  [key: string]: string | number
}

export type TableData = TableRow[]

export type TableColumnDefinition = {
  title: string,
  dataIndex: string,
  width: number | string,
  align: string,
  fixed: string,
  customRender: (options: any) => void
}

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
    type: Object as PropType<TableColumnDefinition[]>,
  }
}

export type TableProps = ExtractPublicPropTypes<typeof props>

const patchColumnsForChips = (columns: any[]) => {

}

export const NsTable = define({
  name: 'NsTable',
  props,
  setup (props: TableProps, ctx) {
    const { default: defaultSlot } = useSlots(),
      children = defaultSlot(),
      // 获取全体 <ns-table-column> 之后, 对原始 columns props 做修改
      columnCusomizations = children.map(child => child.props as TableColumnProps)
    const columns = computed(() => {
      const result: TableColumnDefinition[] = props.columns.map(column => {
        const field = column.dataIndex,
          customization = columnCusomizations.find(c => c.match === field)
        if (!customization) {
          return column
        } else {
          if (customization.type === 'chip') {
            column.customRender = (({text, record, index}) => h(NsChip, {
              label: text as string,
            }, () => text))
          }
          return column
        }
      })
      return result
    })
    return {
      props: {
        columns: columns.value
      }
    }
  }
})
