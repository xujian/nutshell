import { PropType, defineComponent, h } from 'vue'
import { buildDesignClasses, buildDesignStyles, buildFlexClasses, buildFlexStyles, useDesignProps, useFlexProps } from '../../../../props'
import { NsEmpty, repeatorEmits } from '../../../../components'
import { repeatorProps } from '../../../../components'

/**
 * 连续平铺组件 <ns-repeator>
 */
export const Repeator = defineComponent({
  name: 'AntdvRepeator',
  props: repeatorProps,
  emits: repeatorEmits,
  setup (props, { slots }) {

    const classes = [
      'ns-repeator-item',
      'flex-item',
      ...buildDesignClasses(props),
    ]

    const item = () => props.items.map(
      item => h('div', {
            class: classes,
            style: buildDesignStyles(props),
          }, {
            default: () => slots.default?.(item)
          })
      )

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
        ...props.swipable ? ['swipable'] : []
      ],
      style
    }, props?.items?.length ? item() : h(NsEmpty))
  }
})
