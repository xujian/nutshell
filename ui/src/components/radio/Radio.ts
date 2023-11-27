import { PropType, ObjectEmitsOptions, SlotsType } from 'vue'
import { define, MakePropsType } from '../../utils'

export const radioProps = {
  value: {
    type: [String, Number],
  },
  name: {
    type: String,
  },
  label: {
    type: String
  }
}

export type RadioEmits = {
}

const radioEmits: RadioEmits = {
}

export type RadioSlots = {
  prepend: () => any,
  append: () => any,
}

export type RadioProps = MakePropsType<typeof radioProps, RadioEmits>

/**
 * 单选框组件
 * 可单独使用
 * 也可以用作 <ns-radio-group>的子组件
 */

/**
 * 单选框组件 <ns-radio>
 */
export const NsRadio = define({
  name: 'NsRadio',
  props: radioProps,
  emits: radioEmits,
  setup (props, ctx) {
    return {
    }
  }
})
