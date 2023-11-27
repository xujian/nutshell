import { PropType, ObjectEmitsOptions, SlotsType } from 'vue'
import { define, MakePropsType } from '../../utils'
import { useModelValuePropsForBoolean, useSizeProps } from '../../props'

export type DrawerAnchor = 'top' | 'right' | 'bottom' | 'left'

export const drawerProps = {
  title: {
    type: String,
  },
  anchor: {
    type: String as PropType<DrawerAnchor>,
    default: 'right'
  },
  hasBackgrop: {
    type: Boolean,
    default: true,
  },
  ...useModelValuePropsForBoolean(),
  ...useSizeProps(),
}

export type DrawerEmits = {
}

const drawerEmits: DrawerEmits = {
}

export interface DrawerSlots extends SlotsType {
  default: never,
}

export type DrawerProps = MakePropsType<typeof drawerProps, DrawerEmits>

/**
 *  侧边栏组件 <ns-drawer>
 */
export const NsDrawer = define({
  name: 'NsDrawer',
  props: drawerProps,
  emits: drawerEmits,
  setup (props, ctx) {
    return {
    }
  }
})
