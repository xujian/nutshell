import { PropType, ObjectEmitsOptions } from 'vue'
import { useSizeProps, useDimensionProps } from '../../props'
import { MakePropsType, define } from '../../utils'
import { Color } from '../../composables/theme'
import { UnitDataItem } from '../../shared/models'

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
    type: Array as PropType<UnitDataItem[]>,
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

export type DropdownEmits = {
  click: () => void
}

const emits: DropdownEmits = {
  click: () => void 0
}

export type DropdownProps = MakePropsType<typeof dropdownProps, DropdownEmits>

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
