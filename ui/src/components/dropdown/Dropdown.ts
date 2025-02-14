import { PropType } from 'vue'
import { useSizeProps, useDimensionProps, useDesignProps, useVariantProps } from '../../props'
import { MakePropsType, define } from '../../utils'
import { UniDataItem } from '../../shared'

export const dropdownProps = {
  /**
   * 显示的文字
   */
  label: {
    type: String,
  },
  items: {
    type: Array as PropType<UniDataItem[]>,
  },
  /**
   * 禁用
   */
  disabled: {
    type: Boolean,
    default: false,
  },
  ...useVariantProps(),
  ...useDimensionProps(),
  ...useDesignProps(),
}

export type DropdownEmits = {
}

export const dropdownEmits: DropdownEmits = {
}

export type DropdownProps = MakePropsType<typeof dropdownProps, DropdownEmits>

/**
 * 下拉菜单组件 <ns-dropdown>
 */
export const NsDropdown = define({
    name: 'NsDropdown',
    props: dropdownProps,
    emits: dropdownEmits,
    setup (props) {
      return {
        props: {
        }
      }
    }
  }
)
