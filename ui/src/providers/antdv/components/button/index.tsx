import { h } from 'vue'
import { Button as AntButton } from 'ant-design-vue'
import { ButtonType as AntdvButtonType } from 'ant-design-vue/es/button'
import type { ButtonProps, ButtonType } from '../../../../components'

export const Button = (props: ButtonProps, ctx) => {
  type TypeMappings = {
    [key in ButtonType]: AntdvButtonType
  }
  const typeMappings: TypeMappings = {
    primary: 'primary',
    default: 'default',
    info: 'default',
    warning: 'default',
    danger: 'default',
    success: 'default'
  }
  const buttonType = typeMappings[props.type]
  return (
    <AntButton type={buttonType}>{props.label}</AntButton>
  )
}