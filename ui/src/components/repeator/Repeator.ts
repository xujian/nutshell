import { PropType, ObjectEmitsOptions, SlotsType, defineComponent } from 'vue'
import { define, MakePropsType } from '../../utils'
import { h } from 'vue'
import { buildFlexStyles, useFlexProps } from '../../props'

export const repeatorProps = {
  /**
   * 平铺数据
   */
  items: {
    type: Array,
    default: () => []
  },
  ...useFlexProps()
}

export type RepeatorEmits = {
}

const repeatorEmits: RepeatorEmits = {
}

export type RepeatorSlots = {
  default: never,
}

export type RepeatorProps = MakePropsType<typeof repeatorProps, RepeatorEmits>


// 直接渲染组件
// 不使用 vendor

/**
 * 连续平铺组件 <ns-repeator>
 */
export const NsRepeator = defineComponent({
  name: 'NsRepeator',
  props: repeatorProps,
  emits: repeatorEmits,
  setup (props, { slots }) {

    const slot = () => 'item'

    const item = () => props.items.map(item => h('div', {
        class: [
          'ns-repeator-item',
          'flex-item'
        ]
      }, [
        slots.default?.(item)
      ]))

    return () => h('div', {
      class: [
        'ns-repeator',
        'flex',
        'flex-with-vars'
      ],
      style: {
        ...buildFlexStyles(props)
      }
    }, {
      default: item
    })
  }
})
