import { PropType, ObjectEmitsOptions, SlotsType, defineComponent, h } from 'vue'
import { define, MakePropsType } from '../../utils'

export const loadingProps = {
  label: {
    type: String
  }
}

export type LoadingEmits = {
}

const loadingEmits: LoadingEmits = {
}

export type LoadingSlots = {
  default: never,
}

export type LoadingProps = MakePropsType<typeof loadingProps, LoadingEmits>

/**
 * Loading Indicator 组件 <ns-loading>
 */
export const NsLoading = defineComponent({
  name: 'NsLoading',
  props: loadingProps,
  emits: loadingEmits,
  setup (props, ctx) {
    return () => h('div', {
      class: [
        'loading',
        'flex',
        'justify-center',
        'items-center',
      ],
    }, h('div', {
        class: 'dots',
      })
    )
  }
})
