import { PropType, ObjectEmitsOptions, SlotsType, defineComponent, h } from 'vue'
import { MakePropsType } from '../../utils'
import { NsSwitch } from '../switch'

export const Props = {
  label: {
    type: String
  }
}

export type TableColumnSelectorItemEmits = {
}

const Emits: TableColumnSelectorItemEmits = {
}

export type TableColumnSelectorItemSlots = {
  default: never,
}

export type TableColumnSelectorItemProps = MakePropsType<typeof Props, TableColumnSelectorItemEmits>

/**
 *  组件 <ns-table-column-selector-item>
 */
export const NsTableColumnSelectorItem = defineComponent({
  name: 'NsTableColumnSelectorItem',
  props: Props,
  emits: Emits,
  setup (props, ctx) {

    return () => h('div', {
      class: [
        'ns-table-column-selector-item',
        'row',
        'align-center'
      ]
    }, [
      h('i', {
        class: [
          '.handler', 'icon', 'icon-drag-handler'
        ]
      }),
      h('label', {
        class: 'column-selector-label'
      }, props.label),
      h('div', {
        class: ['col', 'flex-grow']
      }),
      h(NsSwitch, {
        name: 'column',
        size: 'xs'
      })
    ])
  }
})
// 需要增加 import 到 ./index.ts, ../components.ts
