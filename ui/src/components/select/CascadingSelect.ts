import { ExtractPublicPropTypes } from 'vue'
import { define } from '../../utils'
import { PropType } from 'vue'
import { useFieldProps } from '../../props'
import { PropsWithLabel, ValidationRule, formatRules } from '../../props/field'

export type CascadingSelectOption = {
  value: string | number,
  label: string,
  disabled?: boolean,
  title?: string,
  children?: CascadingSelectOption[]
  isLeaf?: boolean
}

export const cascadingSelectProps = {
  /**
   * 选项组数据
   */
  options: {
    type: Array as PropType<CascadingSelectOption[]>,
  },
  modelValue: {
    type: Array as PropType<string[]>,
    default: '',
  },
  'onUpdate:modelValue': {
    type: Function as PropType<(value: string[]) => void>,
  },
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

export type CascadingSelectProps = ExtractPublicPropTypes<typeof cascadingSelectProps>

/**
 * 下拉选框
 */
export const NsCascadingSelect = define({
  name: 'NsCascadingSelect',
  props: cascadingSelectProps,
  setup (props, ctx) {
    const rules = formatRules(props.rules as ValidationRule[], props as PropsWithLabel)
    return {
      props: {
        rules
      }
    }
  }
})