import { PropType, ObjectEmitsOptions, SlotsType } from 'vue'
import { define, MakePropsType } from '../../utils'
import { useDesignProps } from '../../props'
import { UniDataItem } from '../../shared'

export type MenuItem = {
  icon?: string,
  /**
   * 直接链接
   */
  link?: string,
  children?: MenuItem[]
} & UniDataItem

export type MenuDirectionType = 'vertical' | 'horizontal' | 'inline'

export const menuProps = {
  items: {
    type: Array as PropType<MenuItem[]>,
  },
  direction: {
    type: String as PropType<MenuDirectionType>,
    default: 'vertical'
  },
  ...useDesignProps()
}

export type MenuEmits = {
}

const menuEmits: MenuEmits = {
}

export type MenuSlots = {
  default: never,
}

export type MenuProps = MakePropsType<typeof menuProps, MenuEmits>

/**
 *  菜单栏组件 <ns-menu>
 */
export const NsMenu = define({
  name: 'NsMenu',
  props: menuProps,
  emits: menuEmits,
  setup (props, ctx) {
    return {
    }
  }
})
