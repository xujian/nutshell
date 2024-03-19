import { PropType, ObjectEmitsOptions, SlotsType } from 'vue'
import { define, MakePropsType } from '../../utils'

export type MenuItem = {
  label: string,
  value: string,
}

export const menuProps = {
  items: {
    type: Array as PropType<MenuItem[]>,
  }
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
