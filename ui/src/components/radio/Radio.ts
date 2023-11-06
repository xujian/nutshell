import { PropType, ObjectEmitsOptions, SlotsType } from 'vue'
import { define, MakePropsType } from '../../utils'

export const radioProps = {
  value: {
    type: [String, Number],
  },
  label: {
    type: String
  }
}

export interface RadioEmits extends ObjectEmitsOptions {
}

const radioEmits: RadioEmits = {
}

export interface RadioSlots extends SlotsType {
  default: never,
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
