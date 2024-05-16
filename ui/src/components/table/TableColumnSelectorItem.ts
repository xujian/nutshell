import { PropType, ObjectEmitsOptions, SlotsType, defineComponent, h } from 'vue'
import { MakePropsType } from '../../utils'
import { NsSwitch } from '../switch'

export const tableColumnSelectorItemProps = {
  label: {
    type: String,
    default: () => ''
  },
  selected: {
    type: Boolean,
  },
  onChange: {
    type: Function
  },
  hasHandler: {
    type: Boolean,
    default: () => true
  },
  disabled: {
    type: Boolean,
    default: false
  }
}

export type TableColumnSelectorItemEmits = {
}

const emits: TableColumnSelectorItemEmits = {
}

export type TableColumnSelectorItemSlots = {
  default: never,
}

export type TableColumnSelectorItemProps = MakePropsType<typeof tableColumnSelectorItemProps, TableColumnSelectorItemEmits>

/**
 *  组件 <ns-table-column-selector-item>
 */
export const NsTableColumnSelectorItem = defineComponent({
  name: 'NsTableColumnSelectorItem',
  props: tableColumnSelectorItemProps,
  emits,
  setup (props, ctx) {

    return () => h('div', {
      class: [
        'ns-table-column-selector-item',
        'row',
        'align-center',
        props.hasHandler
          ? 'has-handler'
          : 'no-handler'
      ]
    }, [
      props.hasHandler
        ? h('i', {
          class: [
            '.handler', 'icon', 'icon-drag-handler'
          ]
        })
        : null,
      h('label', {
        class: 'label'
      }, props.label),
      h('div', {
        class: ['col', 'flex-grow']
      }),
      h(NsSwitch, {
        name: 'column',
        size: 'xs',
        disabled: props.disabled,
        modelValue: props.selected,
        'onUpdate:modelValue': (value: boolean) => {
          props.onChange?.(props.label)
        }
      })
    ])
  }
})
