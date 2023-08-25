import { defineComponent, h, watch } from 'vue'
import { Table as AntdvTable, TableColumnProps } from 'ant-design-vue'
import { TableProps } from '../../../../components'
import { ColumnsType } from 'ant-design-vue/es/table'

export const Table = (props: TableProps, ctx) => {
    const classes = [
      'ns-table',
    ].join(' ')
    const { slots } = ctx
    console.log('antdv table........, props', props.columns)

    return h(AntdvTable, {
      class: classes,
      dataSource: props.rows as object[],
      columns: props.columns as ColumnsType,
      scroll: {x: 1200}
    }, slots.default)
}