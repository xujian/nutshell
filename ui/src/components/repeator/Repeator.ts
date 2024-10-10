import { PropType, defineComponent } from 'vue'
import { MakePropsType } from '../../utils'
import { h } from 'vue'
import { buildFlexClasses, buildFlexStyles, useFlexProps } from '../../props'
import { NsEmpty } from '../empty'

export const repeatorProps = {
  /**
   * 平铺数据
   */
  items: {
    type: Array,
    default: () => []
  },
  /**
   * 主轴排列数
   */
  divides: {
    type: Number,
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

    const item = () => (props.items.map(item => h('div', {
        class: [
          'ns-repeator-item',
          'flex-item'
        ]
      }, [
        slots.default?.(item),
      ])))

    const style = {
      ...buildFlexStyles(props),
      ...props.divides && {
        '--divides': props.divides,
      },
    }

    return () => h('div', {
      class: [
        'ns-repeator',
        ...props.divides ? ['has-divides'] : [],
        ...buildFlexClasses(props),
      ],
      style
    }, props?.items?.length ? item() : h(NsEmpty))
  }
})
