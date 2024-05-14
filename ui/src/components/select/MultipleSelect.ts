import { MakePropsType, define } from '../../utils'
import { PropType } from 'vue'
import { useFieldProps, useModelValuePropsForStringArray, useVariantProps } from '../../props'
import { ValidationRule, formatRules } from '../../props/field'
import { SelectOption } from './Select'

export const multipleSelectProps = {
  /**
   * 选项组数据
   */
  options: {
    type: Array as PropType<SelectOption[]>
  },
  ...useModelValuePropsForStringArray(),
  ...useFieldProps(),
  ...useVariantProps(),
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
  maxTags: {
    type: [Number, String] as PropType<number | 'responsive'>
  },
  /**
   * 是否为 tags 模式，tags 模式可以输入
   */
  tagsMode: {
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
 * 多选下拉选框 <ns-multiple-select>
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
