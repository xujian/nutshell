import { defineComponent, h, watch } from 'vue'
import { Table as AntdvTable, TableColumnProps } from 'ant-design-vue'
import { TableProps, tableProps } from '../../../../components'
import type { ColumnsType, ColumnType } from 'ant-design-vue/es/table'
import columnCustomRenders from './columns'

export const Table = defineComponent({
  name: 'AntdvTableProvider',
  props: tableProps, //! must have props to enable reactive
  setup (props: TableProps, ctx) {
    const classes = [
      'ns-table',
    ].join(' ')
    const { slots } = ctx

    // 开始处理 custom columns
    // 并将处理后的结果合并进 props.columns
    function buildFinalColumns (customColumns) {
      return props.columns.map(column => {
        const result: ColumnType<any> = {
          ...column,
        }
        const field = column.dataIndex,
          customization = customColumns.find(c => c.props.match === field)
        if (!customization) {
          return result
        }
        const render = columnCustomRenders[customization.name]
        if (!render) {
          return result
        }
        result.customRender = render(customization.props)
        return result
      })
    }

    const columns = buildFinalColumns(props.customColumns)

    return () => h(AntdvTable, {
      class: classes,
      dataSource: props.rows as object[],
      columns: columns as ColumnsType,
      scroll: {x: 1200}
    }, slots.default)
  }
})
