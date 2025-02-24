import { FunctionalComponent, InjectionKey, Slots, defineComponent, h, inject, onMounted } from 'vue'
import { FormItem as AntFormItem, Form } from 'ant-design-vue'
import { DesignProps, FieldProps, FullValidationRule, VariantProps, buildDesignVariables, buildFieldHint } from '../../../props'
import { transformRules } from '../components/input/rules'
import { FormProvided } from '../../../utils'
import { useNutshell } from '../../../types'

export const AntdvFormSymbol: InjectionKey<FormProvided | undefined> = Symbol('antdv-form')

export type FormItemProps = FieldProps & VariantProps & DesignProps

/**
 * 接管对于 Ant Design Vue Form Item 的输出
 * 统一处理 Label slot 的逻辑
 * @param props
 * @param slots
 * @param defaultSlot
 * @returns
 */
export const renderFormItem = (props: FormItemProps, slots: Slots, defaultSlot: FunctionalComponent) => {

  const rules = transformRules(props.rules as FullValidationRule[])
  const label = slots.label
    || (
      props.hint
        ? () => buildFieldHint(props)
        : null
    )

  return h(
    AntFormItem,
    {
      class: [
        'ns-form-item',
        ...label === null ? ['no-label' ] : [],
        ...props.dense === true ? ['dense'] : [],
      ],
      label: label !== null
        ? void 0
        : props.label,
      name: props.name,
      rules
    },
    {
      label: label,
      default: defaultSlot,
      extra: slots.append
        ? () => h('div', {
            class: 'form-item-append'
          }, slots.append?.())
        : null
    }
  )
}

/**
 * 便于 NsInput 校验用户输入
 */
export const useForm = () => {
  const form = inject(AntdvFormSymbol)
  const $n = useNutshell()
  const validate = async (name?: string) => {
    const f = form?.vendor.value
    const result = await f?.validate(name) as any
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
