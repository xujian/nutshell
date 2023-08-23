import { defineComponent, h } from 'vue'
import { Table as AntdvTable } from 'ant-design-vue'
import { TableColumnProps } from '../../../../components'

export const TableColumn = defineComponent({
  name: 'AntdvTableColumn',
  setup: (props: TableColumnProps, ctx) => {
    console.log('---Antdv TableColumn: -----------setup, props:', props)
    const { slots } = ctx
    return () => h('div', {
      class: 'ns-table-column'
    }, {...slots})
  }
})