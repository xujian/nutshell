import { PropType, ExtractPublicPropTypes, ObjectEmitsOptions, SlotsType } from 'vue'
import { define } from '../../utils'

export const formProps = {
  name: {
    type: String
  },
  modelValue: {
    type: Object,
  },
  'onUpdate:modelValue': {
    type: Function as PropType<(value: Record<string, any>) => void>
  }
}

export type FormProps = ExtractPublicPropTypes<typeof formProps>

export interface FormEmits extends ObjectEmitsOptions {
}

const emits: FormEmits = {
}

export interface FormSlots extends SlotsType {
  default: never,
}

/**
 * 表单 <ns-form>
 */
export const NsForm = define({
  name: 'NsForm',
  props: formProps,
  emits,
  setup (props, ctx) {
    return {
    }
  }
})
// 需要增加 import 到 ./index.ts, ../components.ts