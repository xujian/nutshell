import { h, SetupContext } from 'vue'
import { ScrollableProps } from '../../../../components'

export const Scrollable = (props: ScrollableProps, ctx: SetupContext) => {
  return h('div', {
    class: 'ns-scrollable',
  }, () => '')
}
