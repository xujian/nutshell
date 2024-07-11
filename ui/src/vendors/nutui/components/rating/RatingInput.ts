import { h, SetupContext } from 'vue'
import { RatingInputProps } from '../../../../components'
import { renderFormItem } from '../../utils'

export const RatingInput = (props: RatingInputProps, ctx: Omit<SetupContext, 'expose'>) => {

  return renderFormItem(props, ctx.slots,
    () => h(NutRate, {
      modelValue: props.modelValue,
      disabled: props.disabled ?? false,
      'onUpdate:modelValue': (value: number) => {
        props['onUpdate:modelValue']?.(value)
      }
    })
  )
}
