import { defineComponent, h, watch } from 'vue'
import { Table as AntdvTable, TableColumnProps } from 'ant-design-vue'
import { TableProps, tableProps } from '../../../../components'
import type { ColumnsType, ColumnType } from 'ant-design-vue/es/table'
import columnCustomRenders from './columns'
import { MarginProps } from '../../../../utils'

export const Table = defineComponent({
  name: 'AntdvTableVendor',
  props: tableProps, //! must have props to enable reactive
  setup (props: TableProps & MarginProps, ctx) {
    const classes = [
      'ns-table', 
      ...props.classes ?? [],
    ].join(' ')
    const { slots } = ctx

    // 开始处理 custom columns
    // 并将处理后的结果合并进 props.columns
    function buildFinalColumns (customColumns) {
      return props.columns.map(column => {
        const result: ColumnType<any> = {
          ...column,
        }
        const customization = customColumns.find(c => c.props.match === column.title)
        if (!customization) {
          return result
        }
        const render = columnCustomRenders[customization.name]
        if (!render) {
          return result
        }
        result.customRender = render(customization.props, customization.component)
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
