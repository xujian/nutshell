import { ComponentInstance, FunctionalComponent, InjectionKey, Ref, Slots, defineComponent, h, onMounted, ref } from 'vue'
import { DesignProps, FieldProps, FullValidationRule, VariantProps, buildDesignVariables, buildFieldHint } from '../../../props'
import { FormItemRule } from '@nutui/nutui-taro/dist/types/__VUE/form/types'
import { FormInstance, Form as NutuiForm } from '@nutui/nutui-taro'

export const NutuiFormSymbol: InjectionKey<Ref<FormInstance | undefined>> = Symbol('nutui-form')

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
        trigger: r.trigger
      })
    } else {
      result.push({
        validator (value: string | string[], rule: any) {
          // 未填写 不继续校验
          if (!value) {
            return Promise.resolve()
          }
          if (!r.method?.(value as string)) {
            return Promise.reject(r.message)
          }
          return Promise.resolve()
        },
        message: r.message,
        trigger: r.trigger ?? 'change',
      })
    }
  })
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

  const styles = {
    ...buildDesignVariables(props),
  }

  const rules = transformRules(props.rules as FullValidationRule[])
  const formItemRef = ref(null)


  return h(
    NutFormItem,
    {
      ref: formItemRef,
      class: [
        'ns-form-item',
        props.variant ? `variant-${props.variant}` : '',
      ],
      style: styles,
      label: props.label || '',
      // form 字段
      prop: props.name as string,
      rules,
    },
    {
      label: props.label,
      default: () => h(defaultSlot, props),
      extra: slots.append
        ? () => h('div', {
            class: 'form-item-append'
          }, slots.append?.())
        : null
    }
  )
}
