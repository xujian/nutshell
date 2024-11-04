import { SetupContext, h } from 'vue'
import { NsIcon, type ButtonProps } from '../../../../components'
import { MarginProps } from '../../../../utils'

export const Button = (props: ButtonProps & MarginProps, { slots }: SetupContext) => {

  const classes = [
    ...props.size ? [`size-${props.size}`] : [],
    ...props.icon
      ? !props.label
        ? ['icon']
        : ['has-icon']
      : [],
    ...props.round ? ['round'] : [],
    ...props.iconPosition ? [`icon-position-${props.iconPosition}`] : [],
  ]

  const isStaticImage = (url: string) =>
    url.endsWith('.svg') || url.endsWith('.png') || url.endsWith('.jpg') || url.endsWith('.jpeg')

  const icon = props.icon
    ? isStaticImage(props.icon)
      ? () => h('img', {
          src: props.icon,
          class: 'icon'
        })
      : () => h(NsIcon, {
          name: props.icon,
          format: props.iconFormat,
        })
    : slots.icon
  const style = {
    ...props.iconFill ? {'--icon-fill': props.iconFill} : {},
  }

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
