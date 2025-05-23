import { PropType } from 'vue'
import { useFieldProps, useModelValuePropsForInput, useVariantProps } from '../../props'
import { ValidationRule, formatRules } from '../../props/field'
import { MakePropsType } from '../../utils/private/helpers'
import { define, InputFormatter } from '../../utils'
import { UniDataItem } from '../../shared'

export type SelectOption = UniDataItem & {
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
  formatter: {
    type: Function as PropType<InputFormatter>
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

export type SelectEmits = {
  change: (value: string | number) => void,
  blur: () => void
}

const emits: SelectEmits = {
  change: (value: string | number) => {},
  blur: () => {},
}

export type SelectProps = MakePropsType<typeof selectProps, SelectEmits>

/**
 * 下拉选框 <ns-select>
 */
export const NsSelect = define({
  name: 'NsSelect',
  props: selectProps,
  emits,
  setup (props, ctx) {
    const rules = formatRules(props.rules as ValidationRule[], props)
    return {
      props: {
        rules
      }
    }
  }
})
