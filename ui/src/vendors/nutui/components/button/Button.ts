import { SetupContext, h } from 'vue'
import { type ButtonProps } from '../../../../components'
import { MarginProps } from '../../../../utils'
import { buildHasIcon, buildHasIconClasses } from '../../../../props'

export const Button = (props: ButtonProps & MarginProps, { slots }: SetupContext) => {

  const classes = [
    ...props.size ? [`size-${props.size}`] : [],
    ...props.icon
      ? !props.label
        ? ['icon']
        : ['has-icon']
      : [],
    ...props.round ? ['round'] : [],
    ...buildHasIconClasses(props)
  ]

  const style = {
    ...props.iconFill ? {'--icon-fill': props.iconFill} : {},
  }

  const icon = () => buildHasIcon(props, slots)

  return h(
    NutButton,
    {
      class: classes,
      disabled: props.disabled,
      loading: props.loading,
      style,
    },
    {
      default: () => [
        slots.default?.(),
        props.label,
      ],
      icon
    }
  )
}
