import { PropType, ExtractPublicPropTypes, ObjectEmitsOptions, SlotsType, ComponentObjectPropsOptions } from 'vue'
import { useSizeProps } from '../../props'
import { define } from '../../utils'
import { useDimensionProps } from '../../props'
import { Color } from '../../composables/theme'

export type DropdownItem = {
  label: string,
  value: string,
}

export const dropdownProps = {
  /**
   * 显示的文字
   */
  label: {
    type: String,
  },
  /**
   * 按钮底色
   */
  color: {
    type: String as PropType<Color>,
  },
  items: {
    type: Array as PropType<DropdownItem[]>,
  },
  ...useSizeProps(),
  /**
   * 禁用
   */
  disabled: {
    type: Boolean,
    default: false,
  },
  ...useDimensionProps(),
}

export interface DropdownEmits extends ObjectEmitsOptions {
  click?: () => void
}

const emits = {
  click: undefined
}

export type DropdownProps = ExtractPublicPropTypes<typeof dropdownProps>

/**
 * 下拉菜单组件 <ns-dropdown>
 */
export const NsDropdown = define({
    name: 'NsDropdown',
    props: dropdownProps,
    emits,
    setup (props, ctx) {
      return {
      }
    }
  }
)
