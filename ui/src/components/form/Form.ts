import { PropType, ObjectEmitsOptions, SlotsType, ref } from 'vue'
import { define, MakePropsType } from '../../utils'
import { useVariantProps } from '../../props'

export type NamePath = string | number | (string | number)[]

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

export const formEmits: FormEmits = {
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
  emits: formEmits,
  setup (props, ctx) {
    const vendorRef = ref()

    // 触发表单验证
    function validate (nameList?: NamePath): Promise<boolean> {
      return new Promise<boolean>((resolve, reject) => {
        vendorRef.value.validate(nameList).then((result: any) => {
          resolve(true)
        }).catch((result: any) => {
          resolve(result.errorFields.length === 0)
        })
      })
    }

    // 表单重置
    function resetFields (nameList?: NamePath[]) {
      vendorRef.value.resetFields(nameList)
    }

    // 移除表单校验结果
    function clearValidate (nameList?: NamePath[]) {
      vendorRef.value.clearValidate(nameList)
    }

    return {
      methods: {
        validate,
        resetFields,
        clearValidate
      },
      props: {
      },
      vendorRef
    }
  }
})
