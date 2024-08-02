import { FunctionalComponent, Slots, defineComponent, h, onMounted } from 'vue'
import { FormItem as AntFormItem, Form } from 'ant-design-vue'
import { DesignProps, FieldProps, FullValidationRule, VariantProps, buildDesignVariables, buildFieldHint } from '../../../props'
import { transformRules } from '../components/input/rules'

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
        ...props.variant ? [`variant-${props.variant}`] : [],
        ...label === null ? ['no-label' ] : []
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
