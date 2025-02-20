import { PropType, ref } from 'vue'
import { define, MakePropsType } from '../../utils'
import { useVariantProps } from '../../props'
import { useNutshell } from '../../framework'

export type NamePath = string | number | (string | number)[]

export type FormValidateFailed =
  'toast' | 'notice' | 'none'

export const formProps = {
  name: {
    type: String
  },
  modelValue: {
    type: Object,
  },
  /**
   * 校验失败时的报错方式
   */
  failed: {
    type: String as PropType<FormValidateFailed>,
    default: 'toast'
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

export type ValidateResult = {
  valid: boolean,
  errors: any[]
}

/**
 * 表单 <ns-form>
 */
export const NsForm = define({
  name: 'NsForm',
  props: formProps,
  emits: formEmits,
  setup (props, ctx) {
    const vendorRef = ref()
    const $n = useNutshell()

    // 触发表单验证
    function validate (nameList?: NamePath): Promise<boolean | ValidateResult> {
      console.log('===NsForm validate', nameList)
      return new Promise<boolean>((resolve, reject) => {
        vendorRef.value.validate(nameList).then((result: any) => {
          console.log('===vendorRef validate', result)
          if (result === void 0) {
            resolve(true)
          } else {
            if (result.valid === false) {
              result.errors.forEach((e: any) => {
                $n.toast(e.message, {})
              })
            }
            resolve(result)
          }
        }).catch((result: any) => {
          resolve(result.errorFields.length === 0)
        })
      })
    }

    // 表单重置某个字段
    function resetFields (nameList?: NamePath[]) {
      vendorRef.value.resetFields(nameList)
    }

    // 表单重置
    function reset (){
      console.log('是我')
      vendorRef.value.reset()
    }


    // 移除表单校验结果
    function clearValidate (nameList?: NamePath[]) {
      vendorRef.value.clearValidate(nameList)
    }

    return {
      methods: {
        validate,
        resetFields,
        clearValidate,
        reset
      },
      props: {
      },
      vendorRef
    }
  }
})
