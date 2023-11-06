import { ObjectEmitsOptions } from 'vue'
import { define } from '../../utils'
import { PropType } from 'vue'
import { useFieldProps, useModelValuePropsForInput, useVariantProps } from '../../props'
import { ValidationRule, buildStyles, formatRules } from '../../props/field'
import { MakePropsType } from '../../utils/private/helpers'

export type SelectOption = {
  value: string | number,
  label: string,
  disabled?: boolean,
  title?: string,
}

export const selectProps = {
  /**
   * 选项组数据
   */
  options: {
    type: Array as PropType<SelectOption[]>,
  },
  ...useVariantProps(),
  ...useModelValuePropsForInput(),
  ...useFieldProps(),
  /**
   * 显示清空按钮
   */
  clearable: {
    type: Boolean,
    default: true,
  },
  /**
   * 接受搜索
   */
  searchable: {
    type: Boolean,
    default: false,
  }
}

export interface SelectEmits extends ObjectEmitsOptions {
  change: (value: string | number) => void
}

const emits: SelectEmits = {
  change: (value: string | number) => {}
}

export type SelectProps = MakePropsType<typeof selectProps, SelectEmits>

/**
 * 下拉选框
 */
export const NsSelect = define({
  name: 'NsSelect',
  props: selectProps,
  emits,
  setup (props, ctx) {
    const rules = formatRules(props.rules as ValidationRule[], props)
    return {
      props: {
        style: buildStyles(props),
        rules
      }
    }
  }
})
