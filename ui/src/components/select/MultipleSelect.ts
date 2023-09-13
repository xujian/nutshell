import { ExtractPublicPropTypes } from 'vue'
import { define } from '../../utils'
import { PropType } from 'vue'
import { useFieldProps, useModelValuePropsForStringArray } from '../../props'
import { PropsWithLabel, ValidationRule, formatRules } from '../../props/field'

export type MultipleSelectOption = {
  value: string | number,
  label: string,
  disabled?: boolean,
  title?: string,
}

export const multipleSelectProps = {
  /**
   * 选项组数据
   */
  options: {
    type: Array as PropType<MultipleSelectOption[]>,
  },
  ...useModelValuePropsForStringArray(),
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

export type MultipleSelectProps = ExtractPublicPropTypes<typeof multipleSelectProps>

/**
 * 下拉选框
 */
export const NsMultipleSelect = define({
  name: 'NsMultipleSelect',
  props: multipleSelectProps,
  setup (props, ctx) {
    const rules = formatRules(props.rules as ValidationRule[], props as PropsWithLabel)
    return {
      props: {
        rules
      }
    }
  }
})
