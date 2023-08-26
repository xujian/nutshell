import { defineComponent, h, watch } from 'vue'
import { Table as AntdvTable, TableColumnProps } from 'ant-design-vue'
import { NsChip, tableProps } from '../../../../components'
import { ColumnsType } from 'ant-design-vue/es/table'

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
      const result: TableColumnDefinition[] = props.columns.map(column => {
        const field = column.dataIndex,
          customization = customColumns.find(c => c.props.match === field)
        if (!customization) {
          return column
        }
        if (customization.name === 'chip') {
          const style = customization.props.extraStyle
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
      })
      return result
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
