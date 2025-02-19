import { MakePropsType, define } from '../../utils'
import { PropType } from 'vue'
import { useFieldProps, useVariantProps } from '../../props'
import { ValidationRule, formatRules } from '../../props/field'

export type CascadingSelectOption = {
  value: string | number,
  label: string,
  disabled?: boolean,
  title?: string,
  children?: CascadingSelectOption[]
  isLeaf?: boolean
}

export type CascadingSelectFormatter = (value: CascadingSelectOption[]) => string

export const cascadingSelectProps = {
  /**
   * 选项组数据
   */
  options: {
    type: Array as PropType<CascadingSelectOption[]>,
  },
  /**
   * 列数
   */
  columns: {
    type: Number,
    default: 2,
  },
  modelValue: {
    type: Array as PropType<string[]>,
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
  },
  /**
   * 最多显示多少个 tag, 默认不限制
   */
  maxTags: {
    type: [Number, String] as PropType<number | 'responsive'>
  },
  /**
   * 是否多选
   */
  multiple: {
    type: Boolean,
    default: false,
  },
  /**
   * 格式化显示分隔符
   **/
  seperator: {
    type: String,
  },
  /**
   * 自定义格式化显示方法
   **/
  formatter: {
    type: Function as PropType<CascadingSelectFormatter>,
  },
  ...useVariantProps(),
}

export type CascadingSelectProps = MakePropsType<typeof cascadingSelectProps>

/**
 * 级联下拉选框 <ns-cascading-select>
 */
export const NsCascadingSelect = define({
  name: 'NsCascadingSelect',
  props: cascadingSelectProps,
  setup (props, ctx) {
    const rules = formatRules(props.rules as ValidationRule[], props)
    return {
      props: {
        rules
      }
    }
  }
})
