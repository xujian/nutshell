import { computed, defineComponent, h } from 'vue'
import { Table as AntdvTable } from 'ant-design-vue'
import { TableProps, tableProps } from '../../../../components'
import type { ColumnsType, ColumnType } from 'ant-design-vue/es/table'
import columnCustomRenders from './columns'
import { marginProps } from '../../../../utils'
import type { MarginProps } from '../../../../utils'

const numberColumnConfig = {
  title: '序号',
  width: 40,
  dataIndex: '__no',
}

export const Table = defineComponent({
  name: 'AntdvTableVendor',
  props: {
    ...tableProps, //! must have props to enable reactive
    ...marginProps
  },
  setup (props, { slots, attrs }) {
    const classes = [
      'ns-table', 
      ...props.classes,
    ].join(' ')

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
        result.customRender = render(customization.props, { slots: customization.component.children })
        return result
      })
    }

    let columns = buildFinalColumns(props.customColumns)

    // 给原始行数据增加序号列
    const rows = computed(() => props.rows.map((row, index: number) => ({
      ...props.hasNumberColumn && {
        __no: index + 1
      },
      ...row,
    })))

    if (props.hasNumberColumn) {
      columns = [
        numberColumnConfig,
        ...columns
      ]
    }

    return () => h(AntdvTable, {
      class: classes,
      dataSource: rows.value,
      columns: columns as ColumnsType,
      scroll: {x: 1200}
    }, slots.default)
  }
})
