import { h } from 'vue'
import { Button } from 'ant-design-vue'
import { ButtonType as AntdvButtonType } from 'ant-design-vue/es/button'
import type { ButtonProps, ButtonType } from '../../../../components'

export const button = (props: ButtonProps, ctx) => {
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
    <Button type={buttonType}>{props.label}</Button>
  )
}