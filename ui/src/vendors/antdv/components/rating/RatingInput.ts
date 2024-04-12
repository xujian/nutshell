import { h, SetupContext } from 'vue'
import { Rate as AntdvRating } from 'ant-design-vue'
import { RatingInputProps } from '../../../../components'
import { renderFormItem } from '../../utils'

export const RatingInput = (props: RatingInputProps, ctx: SetupContext) => {

  return renderFormItem(props, ctx.slots,
    () => h(AntdvRating, {
      value: props.modelValue,
      'onUpdate:value': (value: number) => {
        props['onUpdate:modelValue']?.(value)
      }
    })
  )
}
