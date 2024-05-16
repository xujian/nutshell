import { SetupContext, h } from 'vue'
import { DividerProps } from '../../../../components'
import { makeColor } from '../../../../composables/theme'

export const Divider = (props: DividerProps, {slots}: SetupContext) => {
  const classes = [
    'ns-divider',
  ].join(' ')
  return h(NutDivider, {
    style: {...props.fill
    ? {'--fill': makeColor(props.fill) }
    : {}},
    class: classes,
    dashed: props.dashed,
    contentPosition: props.orientation,
    direction: props.direction,
  }, slots)
}
