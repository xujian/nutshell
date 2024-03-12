import { PropType, ObjectEmitsOptions, SlotsType, defineComponent, h } from 'vue'
import { VueDraggable } from 'vue-draggable-plus'
import { NsSwitch } from '../switch'
import { useModelValuePropsForStringArray } from '../../props'
import { define, MakePropsType } from '../../utils'
import { NsTableColumnSelectorItem } from './TableColumnSelectorItem'

export const TableColumnSelectorEmitsProps = {
  columns: {
    type: Array<string>,
    default: [],
  },
  ...useModelValuePropsForStringArray()
}

export type TableColumnSelectorEmits = {
}

const TableColumnSelectorEmitsEmits: TableColumnSelectorEmits = {
}

export type TableColumnSelectorSlots = {
  default: never,
}

export type TableColumnSelectorProps = MakePropsType<typeof TableColumnSelectorEmitsProps, TableColumnSelectorEmits>

/**
 *  组件 <ns-table-column-selector>
 */
export const NsTableColumnSelector = defineComponent({
  name: 'NsTableColumnSelector',
  props: TableColumnSelectorEmitsProps,
  emits: TableColumnSelectorEmitsEmits,
  setup (props, ctx) {

    const list = () => h(VueDraggable, {
        class: 'column-list',
        modelValue: props.columns,
        animation: 150,
      }, props.columns.map(
        (c: string) => h(NsTableColumnSelectorItem, {
          label: c
        })
      )
    )

    return () => h('div', {
      class: 'ns-table-column-control',
    }, [
      h('h3', {}, '选择字段'),
      list()
    ])
  }
})
