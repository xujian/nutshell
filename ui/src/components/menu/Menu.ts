import { PropType, ObjectEmitsOptions, SlotsType } from 'vue'
import { define, MakePropsType } from '../../utils'
import { useDesignProps } from '../../props'

export type MenuItem = {
  label: string,
  value: string,
  children?: MenuItem[]
}

export const menuProps = {
  items: {
    type: Array as PropType<MenuItem[]>,
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
 *  组件 <ns-menu>
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
