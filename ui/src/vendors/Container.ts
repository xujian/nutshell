import { computed, defineComponent, h, mergeProps, PropType, useAttrs } from 'vue'

const vendorContainerProps = {
  ignoresDesign: {
    type: Boolean
  },
}

/**
 * 组件外框
 * 用来对 class 与 style 做一些特殊处理
 */
export const VendorContainer = defineComponent({
  name: 'VendorContainer',
  props: vendorContainerProps,
  inheritAttrs: false,
  setup (props, ctx) {

    const attrs = useAttrs()

    return () => h('div', {
      class: [
        attrs.class,
        'vendor-container',
        ...props.ignoresDesign ? ['ignores-design'] : [],
      ]
    }, ctx.slots)
  }
})
