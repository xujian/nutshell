import { SetupContext, h, useAttrs } from 'vue'
import type { ChipProps } from '../../../../components'
import { MarginProps } from '../../../../utils'
import { buildHasIcon, buildHasIconClasses } from '../../../../props'

export const Chip = (props: ChipProps & MarginProps, { slots, emit }: Omit<SetupContext, 'expose'>) => {

  const $attrs = useAttrs(),
    icon = () => buildHasIcon(props, slots),
    close = () => h('div', {
      class: ['ns-icon-close', 'icon'],
      onClick: () => emit('close', props)
    }),
    text = () => h('span', {
      class: ['text']
    }, {
      default: () => [
        slots.default?.(),
        props.label,
      ]
    })

  return h(NutTag, {
    class: [
      ...buildHasIconClasses(props),
      ...props.closable ? ['closable'] : []
    ],
    round: props.round ?? true,
  }, {
    default: () => [
      props.iconPosition !== 'end' && icon(),
      text(),
      props.iconPosition === 'end' && icon(),
      props.closable && close(),
    ]
  })
}
