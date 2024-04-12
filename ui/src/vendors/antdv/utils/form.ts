import { FunctionalComponent, Slots, h, onMounted } from 'vue'
import { FormItem as AntFormItem } from 'ant-design-vue'
import { FieldProps, FullValidationRule, VariantProps, buildFieldHint } from '../../../props'
import { transformRules } from '../components/input/rules'

export type FormItemProps = FieldProps & VariantProps

// export type FormItemRenderer = FunctionalComponent<FormItemProps, {}, FormItemSlots, {}>

// // @ts-ignore
// export const FormItem: FormItemRenderer
//   = (props: FormItemProps, ctx: FormItemContext) => {
//   const { slots } = ctx
//   return h(
//     AntFormItem,
//     {
//       class: props.class,
//       label: props.label,
//       name: props.name,
//       rules: props.rules
//     },
//     {
//       label: slots.label,
//       default: slots.default,
//     }
//   )
// }

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

  console.log('===label', label, props.label)
  return h(
    AntFormItem,
    {
      class: [
        'ns-form-item',
        props.variant ? `variant-${props.variant}` : '',
      ],
      label: label !== null ? void 0 : props.label,
      name: props.name,
      rules
    },
    {
      label,
      default: defaultSlot,
    }
  )
}
