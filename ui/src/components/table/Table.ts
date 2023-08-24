import { ExtractPublicPropTypes, PropType, computed, ref, toRefs, useSlots } from 'vue'
import { define } from '../../utils'
import { h } from 'vue'
import { NsChip } from '../chip'
import { watch } from 'vue'
import { TableColumnProps } from './TableColumn'

/**
 * 填充表格的数据
 */
export type TableRow = {
  [key: string]: string | number
}

export type TableRows = TableRow[]

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
  rows: {
    type: Array as PropType<TableRows>,
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

export const NsTable = define({
  name: 'NsTable',
  props,
  setup (props: TableProps, ctx) {

    function getCustomizedColumns () {
      const { default: defaultSlot } = useSlots(),
        children = defaultSlot()
      debugger
      // 获取全体 <ns-table-column> 之后, 对原始 columns props 做修改
      return children.map(child => child.props as TableColumnProps)
    }

    /**
     * 读取全体子组件
     * 例如 <ns-table-column />
     * 合并进columns
     * 并作为属性传递给 provider
     */
    function buildFinalColumns (customizedColumns) {
      const result: TableColumnDefinition[] = props.columns.map(column => {
        const field = column.dataIndex,
          customization = customizedColumns.find(c => c.match === field)
        if (!customization) {
          return column
        } else {
          if (customization.type === 'chip') {
            const style = customization.extraStyle
            debugger
            column.customRender = (({text, record, index}) => h(NsChip, {
              label: text as string,
              ...style && {
                  style: typeof style === 'string'
                    ? style
                    : style(text, record)
              }
            }, () => text))
          }
          return column
        }
      })
      return result
    }

    const customizedColumns = getCustomizedColumns()
    const columns = computed(() => buildFinalColumns(customizedColumns))

    return {
      // 只返回修改后的属性
      // 将会和原有 props 合并
      // 并作为最终 props 交给 provider
      props: {
        columns: columns.value
      }
    }
  }
})
