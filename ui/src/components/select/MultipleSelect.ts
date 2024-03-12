import { MakePropsType, define } from '../../utils'
import { PropType } from 'vue'
import { useFieldProps, useModelValuePropsForStringArray } from '../../props'
import { ValidationRule, formatRules } from '../../props/field'

export type MultipleSelectOption = {
  value: string | number
  label: string
  disabled?: boolean
  title?: string
}

export const multipleSelectProps = {
  /**
   * 选项组数据
   */
  options: {
    type: Array as PropType<MultipleSelectOption[]>
  },
  ...useModelValuePropsForStringArray(),
  ...useFieldProps(),
  /**
   * 显示清空按钮
   */
  clearable: {
    type: Boolean,
    default: true
  },
  /**
   * 接受搜索
   */
  searchable: {
    type: Boolean,
    default: false
  },
  /**
   * 最多显示多少个 tag, 默认不限制
   */
  maxTagShowCount: {
    type: [Number, String] as PropType<number | 'responsive'>
  },
  /**
   * 是否为 tags 模式，tags 模式可以输入
   */
  showTagsMode: {
    type: Boolean,
    default: false
  }
}

export type MultipleSelectEmits = {
  change: (value: string[]) => void
}

const emits: MultipleSelectEmits = {
  change: (value: string[]) => {}
}

export type MultipleSelectProps = MakePropsType<typeof multipleSelectProps>

/**
 * 下拉选框
 */
export const NsMultipleSelect = define({
  name: 'NsMultipleSelect',
  props: multipleSelectProps,
  emits,
  setup(props, ctx) {
    const rules = formatRules(props.rules as ValidationRule[], props)
    return {
      props: {
        rules
      }
    }
  }
})
