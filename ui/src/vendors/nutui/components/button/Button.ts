import { SetupContext, h, unref } from 'vue'
import { type ButtonProps } from '../../../../components'
import { MarginProps } from '../../../../utils'
import { buildHasIcon } from '../../../../props'

export const Button = (props: ButtonProps & MarginProps, { slots }: SetupContext) => {


  const style = {
    ...props.iconFill ? {'--icon-fill': props.iconFill} : {},
  }

  const icon = () => buildHasIcon(props, slots)

  return h(
    NutButton,
    {
      class: unref(props.classes),
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
