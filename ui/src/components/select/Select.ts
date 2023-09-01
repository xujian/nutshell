import { ExtractPublicPropTypes } from 'vue'
import { define } from '../../utils'
import { PropType } from 'vue'
import { useFieldProps, useModelValuePropsForInput } from '../../props'

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

export type SelectProps = ExtractPublicPropTypes<typeof selectProps>

/**
 * 下拉选框
 */
export const NsSelect = define({
  name: 'NsSelect',
  props: selectProps,
  setup (props, ctx) {
    return {}
  }
})
