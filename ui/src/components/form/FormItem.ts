import { PropType, ObjectEmitsOptions, SlotsType, ref } from 'vue'
import { define, MakePropsType } from '../../utils'
import { useVariantProps } from '../../props'
import { formatRules, FullValidationRule, ValidationRule } from '../../props/field'

export const formItemProps = {
  name: {
    type: String
  },
  label: {
    type: String,
  },
  /**
   * 校验规则
   */
  rules: {
    type: Array as PropType<ValidationRule[]>
  },
  ...useVariantProps(),
}

export type FormItemEmits = {
}

const emits: FormItemEmits = {
}

export type FormItemSlots = {
  default: () => any,
}

export type FormItemProps = MakePropsType<typeof formItemProps, FormItemEmits>

/**
 * 表单 <ns-form-item>
 */
export const NsFormItem = define({
  name: 'NsFormItem',
  props: formItemProps,
  emits,
  setup (props, ctx) {
    const finalRules = formatRules(props.rules as ValidationRule[], props)

    return {
      props: {
        rules: finalRules as FullValidationRule[]
      }
    }
  }
})
