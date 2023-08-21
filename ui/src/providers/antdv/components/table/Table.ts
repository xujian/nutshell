import { defineComponent, h } from 'vue'
import { Table as AntdvTable } from 'ant-design-vue'

export const Table = defineComponent({
  name: 'AntdvTable',
  setup: (props: TableProps, ctx) => {
    console.log('---Antdv Table: -----------setup, props.columns:', props.columns)
    const classes = [
      'ns-table',
    ].join(' ')
    const { slots } = ctx
    return () => h(AntdvTable, {
      class: classes,
      dataSource: props.dataSource,
      columns: props.columns,
      scroll: {x: 1200}
    }, slots.default)
  }
})