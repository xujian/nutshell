import { PropType, ObjectEmitsOptions, SlotsType, Prop } from 'vue'
import { define, MakePropsType } from '../../utils'
import { useModelValuePropsForBoolean, usePopupProps, useSizeProps } from '../../props'
import { Dimension } from '../../types'
import { Color } from '../../composables'

export const drawerProps = {
  title: {
    type: String,
  },
  width: {
    type: [String, Number] as PropType<Dimension>,
  },
  round: {
    type: Boolean,
  },
  className: {
    type: String,
  },
  fill: {
    type: String as PropType<Color>,
  },
  ...usePopupProps(),
  ...useModelValuePropsForBoolean(),
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
