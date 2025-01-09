import { defineComponent, h, Ref, ref } from 'vue'
import { buildDesignClasses, buildDesignStyles, buildFlexClasses, buildFlexStyles } from '../../../../props'
import { NsEmpty } from '../../../../components/empty'
import { repeatorEmits, repeatorProps } from '../../../../components/repeator'

/**
 * 连续平铺组件 <ns-repeator>
 */
export const Repeator = defineComponent({
  name: 'NutuiRepeator',
  props: repeatorProps,
  emits: repeatorEmits,
  inheritAttrs: false,
  setup (props, { slots }) {

    const refs: Ref<any>[] = props.items.map((item) => ref())

    const classes = [
      'ns-repeator-item',
      'flex-item',
      ...buildDesignClasses(props),
    ]

    const onOpen = (index: number) => {
      refs.forEach((r, i) => {
        if (i !== index) {
          r.value?.close()
        }
      })
    }

    const content = () => props.swipable !== false
      ? props.items.map((item, index) =>
          h('div', {
            class: classes,
            style: buildDesignStyles(props),
            key: item.id || index
          }, h(NutSwipe, {
                class: ['swipe'],
                ref: refs[index],
                disabled: item.swipable === false,
                onOpen: () => {
                  onOpen(index)
                }
              }, {
                default: () => slots.default?.(item),
                right: () => slots.swipe?.(item)
              })
          )
        )
      : props.items.map((item) => slots.default?.(item))


    return () => h('div', {
      class: [
        'ns-repeator',
        ...props.divides ? ['has-divides'] : [],
        ...buildFlexClasses(props),
        ...props.swipable ? ['swipable'] : [],
      ],
      style: {
        ...buildFlexStyles(props),
        '--divides': props.divides,
      }
    }, {
      default: () => props?.items?.length
        ? content()
        : h(NsEmpty)
    })
  }
})
