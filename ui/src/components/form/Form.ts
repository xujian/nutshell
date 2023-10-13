import { PropType, ExtractPublicPropTypes, ObjectEmitsOptions, SlotsType, ExtractPropTypes, ref, defineExpose, onMounted } from 'vue'
import { define } from '../../utils'
import { useVariantProps } from '../../props'

export const formProps = {
  name: {
    type: String
  },
  modelValue: {
    type: Object,
  },
  ...useVariantProps(),
  'onUpdate:modelValue': {
    type: Function as PropType<(value: Record<string, any>) => void>
  }
}

export type FormProps = ExtractPropTypes<typeof formProps>

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
    // const vendorRef = ref(null)

    function validate (): boolean {
      console.log('NsForm......s.etup........vendor.....', props.ref.value)
      return props.ref.value.validate()
    }

    return {
      methods: {
        validate
      },
      props: {
      },
      // vendorRef
    }
  }
})
// 需要增加 import 到 ./index.ts, ../components.ts