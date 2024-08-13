import { SetupContext, h, useAttrs } from 'vue'
import { NsIcon, type ButtonEmits, type ButtonProps } from '../../../../components'
import { Size } from '../../../../props/size'
import type { ButtonSize, ButtonShape } from '@nutui/nutui-taro'
import { BRANDS, BrandColor, isBrand } from '../../../../composables/theme'
import { MarginProps } from '../../../../utils'

const sizeMapping: Record<Size, ButtonSize> = {
  auto: 'normal',
  xs: 'mini',
  sm: 'small',
  md: 'normal',
  lg: 'large',
  xl: 'large'
}

const getSize = (size?: Size): ButtonSize => {
  if (!size) return 'normal'
  return sizeMapping[size]
}

export const Button = (props: ButtonProps & MarginProps, { slots }: SetupContext) => {

  const $attrs = useAttrs()
  const classes = [
    ...props.size ? [`size-${props.size}`] : [],
    ...props.variant ? [`variant-${props.variant}`] : [],
    ...props.iconPosition ? [`icon-position-${props.iconPosition}`] : [],
    $attrs.class || ''
  ]
  const { label, width, disabled, maxWidth, height, maxHeight, minWidth, minHeight, ...p } = props

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

  const shape = props.round === true ? void 0 : ('suqare' as ButtonShape)
  const style = {
    ...props.iconFill ? {'--icon-fill': props.iconFill} : {},
    ...$attrs.style || {},
  }

  return h(
    NutButton,
    {
      class: classes,
      disabled,
      shape,
      size: getSize(props.size),
      loading: props.loading,
      onClick: props.onClick,
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
