import { PropType, ObjectEmitsOptions } from 'vue'
import { useSizeProps, useDimensionProps, useDesignProps, buildDesignClasses, buildDesignStyles, buildFlexClasses, buildFlexStyles, useVariantProps } from '../../props'
import { MakePropsType, define } from '../../utils'
import { Color } from '../../composables/theme'
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
  ...useSizeProps(),
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
    setup (props) {
      return {
        props: {
        }
      }
    }
  }
)
