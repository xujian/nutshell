import { SetupContext, computed, defineComponent, h,VNode } from 'vue'
// import { Table as AntdvTable } from 'ant-design-vue'
import { VxeTable, VxeColumn, VxeTableSlots } from 'vxe-table'
import { TableProps, tableProps } from '../../../../components'
// import type { ColumnsType, ColumnType } from 'ant-design-vue/es/table'
import columnCustomRenders from './columns'
import { MarginProps, marginProps } from '../../../../utils'

const numberColumnConfig = {
  title: '序号',
  width: 40,
  dataIndex: '__no',
  align: 'center'
}

export const Table = (props: TableProps & MarginProps, { slots }: SetupContext) => {

  const classes = [
    'ns-table', 
    ...props.classes,
  ].join(' ')

  /**
   * 为 VxeTable 构造volumns
   * @param customColumns
   */
  function buildFinalColumns (customColumns): VNode[] {
    const result: VNode[] = []
    for (const column of props.columns) {
      if (!column.field) continue
      const colummConfig = {
        props: {
          field: column.field,
          width: column.width,
          title: column.title,
          align: column.align,
          fixed: column.fixed,
        },
        slots: {}
      }
      if (!column.type) {
      }
      const customization = customColumns.find(
        c => c.props.match === column.title
      )
      if (customization) {
        console.log('-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=', customization)
        const predefinedColumn = columnCustomRenders[customization.name]
        if (predefinedColumn) {
          const predefinedColumnRender = predefinedColumn(customization.props, {slots})
          console.log('-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=1', predefinedColumnRender)
          colummConfig.slots = {
            // 所有 ns-table-column-xxx 都用 template 来实现
            // button/rating 使用组件库核心组件
            // 不用 VXE 提供的现成列
            default: ({row}) => h('div', {
                class: `table-column-${customization.name}`
              },
              predefinedColumnRender({
                text: row[column.field],
                record: row,
              })
            )
          }
        }
      }
      const node = h(VxeColumn, colummConfig.props, colummConfig.slots)
      result.push(node)
    }
    return result
  }

  let columns = buildFinalColumns(props.customColumns)

  // 给原始行数据增加序号列
  const rows = computed(() => props.rows.map((row, index: number) => ({
    ...props.hasNumberColumn && {
      __no: index + 1
    },
    ...row,
  })))

  // 处理 checkbox 列 （构造 rowSelection 数据）
  const hasCheckboxColumn = props.columns.some(c => c.type === 'checkbox'),
    selected = []

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

