import { PropType, ObjectEmitsOptions, SlotsType, ref } from 'vue'
import { define, MakePropsType } from '../../utils'
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

export interface FormEmits extends ObjectEmitsOptions {
}

const emits: FormEmits = {
}

export interface FormSlots extends SlotsType {
  default: never,
}

export type FormProps = MakePropsType<typeof formProps, FormEmits>

/**
 * 表单 <ns-form>
 */
export const NsForm = define({
  name: 'NsForm',
  props: formProps,
  emits,
  setup (props, ctx) {
    const vendorRef = ref()

    function validate (): boolean {
      return !!vendorRef.value && vendorRef.value.validate()
    }

    return {
      methods: {
        validate
      },
      props: {
      },
      vendorRef
    }
  }
})
