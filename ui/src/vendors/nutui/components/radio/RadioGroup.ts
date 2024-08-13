import { defineComponent, h, SetupContext } from 'vue'
import { radioGroupProps } from '../../../../components'
import { renderFormItem } from '../../utils'

export const RadioGroup = defineComponent({
  name: 'NutuiRadioGroup',
  props: radioGroupProps,
  setup (props, ctx) {

    const { emit } = ctx

    const children = () => props.options?.map(item => h(NutRadio, {
      label: item.value, // 这里没写错 傻逼的属性名
      disabled: item.disabled,
      // shape: 'button'
    }, () => item.label))

    return () =>
      renderFormItem(
        {
          ...props,
          class: [props.variant ? `variant-${props.variant}` : '']
        },
        ctx.slots,
        () =>
          h(
            NutRadioGroup,
            {
              class: [
                ...(props.direction === 'column' ? ['flex', 'flex-column'] : ['flex', 'flex-row'])
              ],
              name: (props.name || 'radio') as string,
              direction: 'horizontal',
              modelValue: props.modelValue,
              disabled: props.disabled ?? false,
              'onUpdate:modelValue': (value: string | number) => {
                emit('update:modelValue', value)
              },
              onChange: (e: any) => {
                e.stopPropagation()
                emit('change', e.target.value)
              }
            },
            {
              default: children
            }
          )
      )
  }
})
