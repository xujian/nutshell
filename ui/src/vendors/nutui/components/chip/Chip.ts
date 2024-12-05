import { SetupContext, h, useAttrs } from 'vue'
import type { ChipProps } from '../../../../components'
import { MarginProps } from '../../../../utils'
import { buildHasIcon, buildHasIconClasses } from '../../../../props'

export const Chip = (props: ChipProps & MarginProps, { slots }: Omit<SetupContext, 'expose'>) => {

  const $attrs = useAttrs(),
    icon = () => buildHasIcon(props, slots)

  return h(NutTag, {
    class: [
      ...buildHasIconClasses(props),
    ],
    round: props.round ?? true,
  }, {
    default: () => [
      props.iconPosition !== 'end' && icon(),
      slots.default?.(),
      props.label,
      props.iconPosition === 'end' && icon(),
    ]
  })
}
