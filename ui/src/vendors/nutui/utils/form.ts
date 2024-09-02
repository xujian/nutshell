import { FunctionalComponent, InjectionKey, Ref, Slots, h, inject, ref } from 'vue'
import { DesignProps, FieldProps, FullValidationRule, VariantProps, buildDesignVariables } from '../../../props'
import { useNutshell } from '../../../framework'
import { useBus } from '../../../composables'
import { FormItemRule } from '@nutui/nutui-taro/dist/types/__VUE/form/types'
import { FormProps } from '../../../components'
import { FormInstance } from '@nutui/nutui-taro'

export type FormProvided = {
  props: FormProps,
  vendor: Ref<FormInstance | undefined>
}

export const NutuiFormSymbol: InjectionKey<FormProvided | undefined> = Symbol('nutui-form')

// 标准校验格式转换为 Nutui FormItemRule 格式
export const transformRules = (rules: FullValidationRule[]) => {
  if (!rules) return []
  const result: FormItemRule[] = []
  rules.forEach(r => {
    // NsInput 的校验规则与 NutUI 不一样
    // 必填('required')是一个单独规则项
    if (r.name === 'required') {
      result.push({
        required: true,
        message: r.message,
        trigger: 'blur'
      })
    } else {
      result.push({
        validator: (value: string | string[], rule: any) => {
          // 未填写 不继续校验
          // console.log('===validator', typeof value, value)
          if (!value) {
            return Promise.resolve()
          }
          if (!r.method?.(value as string)) {
            return Promise.reject(r.message)
          }
          return Promise.resolve()
        },
        message: r.message,
        trigger: r.trigger ?? 'blur',
      })
    }
  })
  // console.log('===transformRules', result)
  return result
}

export type FormItemProps = FieldProps & VariantProps & DesignProps

/**
 * 输出 <NutFormItem>
 * 统一处理 Label slot 的逻辑
 * @param props
 * @param slots
 * @param defaultSlot
 * @returns
 */
export const renderFormItem = (props: FormItemProps, slots: Slots, defaultSlot: FunctionalComponent) => {
  // console.log('===renderFormItem', props.name, props.rules)
  const rules = transformRules(props.rules as FullValidationRule[])
  const formItemRef = ref(null)
  const form = useForm()
  return h(
    NutFormItem,
    {
      ref: formItemRef,
      class: [
        'ns-form-item',
        ...props.variant ? [`variant-${props.variant}`] : [],
        ...props.label ? [] : ['no-label']

      ],
      label: props.label || '',
      // form 字段
      prop: props.name as string,
      showErrorLine: false,
      showErrorMessage: false,
      rules,
    },
    {
      label: () => props.label,
      default: defaultSlot,
      extra: slots.append
        ? () => h('div', {
            class: 'form-item-append'
          }, slots.append?.())
        : void 0
    }
  )
}

/**
 * 便于 NsInput 校验用户输入
 */
export const useForm = () => {
  const form = inject(NutuiFormSymbol)
  const $n = useNutshell()
  const $bus = useBus()
  const validate = async (name?: string) => {
    const result = await form?.vendor.value?.validate(name) as any
    console.log('===useForm validate(validate result', result)
    // 校验失败时报告错误
    // 基于 form 的属性 failed (报错方式)
    if (!result.valid) {
      const [error] = result.errors
      const failed = form?.props.failed || 'toast'
      if (failed === 'toast') {
        $n.toast(error.message, {})
      } else if (failed === 'notice') {
        $n.notice(error.message, {
          type: 'error'
        })
      }
    }
  }
  return {
    validate
  }
}
