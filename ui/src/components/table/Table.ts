import { ExtractPublicPropTypes, PropType, VNode, RendererNode, RendererElement,
  computed, ref, toRefs, useSlots } from 'vue'
import { define } from '../../utils'
import { readonly } from 'vue'

/**
 * 填充表格的数据
 */
export type TableRow = {
  [key: string]: string | number
}

export type TableRows = TableRow[]

export type TableColumnSlot = VNode<RendererNode, RendererElement, {
  [key]: string
}>

export type TableColumnDefinition = {
  title: string,
  dataIndex: string,
  width: number | string,
  align: string,
  fixed: string,
  customRender: (options: any) => void
}

export const tableProps = {
  /**
   * 行数据
   */
  rows: {
    type: Array as PropType<TableRows>,
    default: [],
  },
  /**
   * Columns Customization 列配置
   */
  columns: {
    type: Object as PropType<TableColumnDefinition[]>,
  },
  customColumns: {
    type: Array,
    require: false,
  }
}

export type TableProps = ExtractPublicPropTypes<typeof tableProps>

export const NsTable = define({
  name: 'NsTable',
  props: tableProps,
  setup (props: TableProps, ctx) {

    function getColumnName (slot: TableColumnSlot) {
      const functionName = slot.type['name']
      return functionName.slice('NsTableColumn'.length).toLowerCase()
    }

    function getCustomizedColumns () {
      const { default: defaultSlot } = useSlots(),
        children = defaultSlot() as TableColumnSlot[]
      // 获取全体 <ns-table-column-x>
      return children.map(child => ({
        name: getColumnName(child),
        props: child.props as TableColumnProps
      }))
    }

    /**
     * 读取全体子组件
     * 例如 <ns-table-column-chip />
     * 并作为属性传递给 provider 最终处理
     */

    const customColumns = getCustomizedColumns()

    return {
      // 只返回修改后的属性
      // 将会和原有 props 合并
      // 并作为最终 props 交给 provider
      props: {
        customColumns,
      }
    }
  }
})
