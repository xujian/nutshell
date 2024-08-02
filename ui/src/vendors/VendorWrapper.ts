import { computed, defineComponent, h, mergeProps, PropType, useAttrs } from 'vue'

const vendorWrapperProps = {
  ignoresDesign: {
    type: Boolean
  },
}

/**
 * 要解决的问题如下:
 * define() 方法自动处理 design props 产生的 class, style
 * 这样省下了组件调用 buildDesignClasses/buiildDesignStyles 以及插入 class/style 的重复动作
 * 这对于单立组件很好 例如 <ns-button>
 * 而如果是复合组件
 * 例如 <ns-button-group>
 * 会把 class/style 都插入最外框
 * 而 --fill 这些变量已经设置成 inherits: false
 *
 */

/**
 * 组件外框
 * 用来对 class 与 style 做一些特殊处理
 */
export const VendorWrapper = defineComponent({
  name: 'VendorWrapper',
  props: vendorWrapperProps,
  inheritAttrs: false,
  setup (props, { slots }) {

    return () => h('div', {
      class: [
        'vendor-container',
        ...props.ignoresDesign ? ['ignores-design'] : [],
      ]
    }, {
        ...slots,
        default: () => slots.default?.()
      }
    )
  }
})
