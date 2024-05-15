import { SetupContext, h } from 'vue'
import { DividerProps } from '../../../../components'

export const Divider = (props: DividerProps, {slots}: SetupContext) => {

  const classes = [
    'ns-divider',
  ].join(' ')
  return h(NutDivider, {
    class: classes,
    dashed: props.dashed,
    contentPosition: props.orientation,
    direction: props.direction,
  }, slots)
}
