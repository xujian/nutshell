import { SetupContext, computed, defineComponent, h,VNode } from 'vue'
import { VxeTable, VxeColumn, VxeTableSlots, VxeColumnProps, VxeColumnPropTypes } from 'vxe-table'
import { TableProps, tableProps, TableColumnType } from '../../../../components'
// import type { ColumnsType, ColumnType } from 'ant-design-vue/es/table'
import columnCustomRenders from './columns'
import { MarginProps, marginProps } from '../../../../utils'

type ColumnConfig = {
  props: VxeColumnProps,
  slots: {
    default?: ({row}: {row: any}) => VNode
  }
}

const columnTypeMapping: {[key: string]: VxeColumnPropTypes.Type} = {
  checkbox: 'checkbox',
  number: 'seq'
}

export const Table = (props: TableProps & MarginProps, ctx: SetupContext) => {

  const classes = [
    'ns-table', 
    ...props.classes,
  ].join(' ')

  /**
   * 为 VxeTable 构造volumns
   * @param customColumns
   */
  function buildFinalColumns (): VNode[] {
    const result: VNode[] = []
    for (const column of props.columns!) {
      const { props } = column
      const colummConfig: ColumnConfig = {
        props: {
          ...props.field && {field: props.field},
          width: props.width,
          title: props.label,
          align: props.align,
          fixed: props.fixed as VxeColumnPropTypes.Fixed,
        },
        slots: {}
      }
      if (column.type) {
        // 输出 <vxe-column type=checkbox> 以及其他
        const t = columnTypeMapping[column.type]
        colummConfig.props.type = t
      }
      if (column.name) { // 带有name 调用 columns/之下的渲染器
        const predefinedColumn = columnCustomRenders[column.name]
        if (predefinedColumn) {
          const predefinedColumnRender = predefinedColumn(props, ctx)
          colummConfig.slots = {
            // 所有 ns-table-column-xxx 都用 template 来实现
            // button/rating 使用组件库核心组件
            // 不用 VXE 提供的现成列
            default: ({row}) => h('div', {
                class: [
                  'table-column',
                  `table-column-${column.name}`
                ]
              },
              h(predefinedColumnRender, {
                text: row[props.field],
                record: row
              }, ctx.slots)
            )
          }
        }
      }
      const node = h(VxeColumn, colummConfig.props, colummConfig.slots)
      result.push(node)
    }
    return result
  }

  const rows = computed(() => props?.rows?.map((row, index: number) => ({
    ...row,
  })))

  let columns = buildFinalColumns()

  return h(VxeTable, {
    class: classes,
    data: rows.value,
    // columns: columns as ColumnsType,
    rowConfig: {
      isHover: true
    },
    columnConfig: {
      resizable: true
    },
    scrollY: {enabled: true},
    // loading: loading,
    // pagination: false,
    // rowKey: props.rowKey,
    // rowSelection
  }, () => columns)
}

