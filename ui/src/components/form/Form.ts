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

export type FormEmits = {
}

const emits: FormEmits = {
}

export type FormSlots = {
  default: () => any,
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

    function validate (): Promise<boolean> {
      return new Promise<boolean>((resolve, reject) => {
        vendorRef.value.validate().then((result: any) => {
          resolve(true)
        }).catch((result: any) => {
          resolve(result.errorFields.length === 0)
        })
      })
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
