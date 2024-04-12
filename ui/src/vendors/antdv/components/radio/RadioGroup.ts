import { h, SetupContext } from 'vue'
import { RadioGroup as AntdvRadioGroup, Radio as AntdvRadio, RadioChangeEvent } from 'ant-design-vue'
import { RadioGroupProps } from '../../../../components'

export const RadioGroup = (props: RadioGroupProps, ctx: SetupContext) => {

  const { emit } = ctx

  const children = () => props.items?.map(item => h(AntdvRadio, {
    name: props.name,
    value: item.value,
  }, () => item.label))

  const title = props.label
    ? () => h('h4', {
        class: 'radio-group-title'
      }, props.label)
    : () => null

  const group = () => h(AntdvRadioGroup, {
    class: [
      ...props.direction === 'vertical'
        ? [
            'flex', 'flex-col'
          ]
        : [
            'flex', 'flex-row'
          ],
    ],
    name: props.name || 'radio',
    value: props.modelValue,
    disabled: props.disabled ?? false,
    'onUpdate:value': (value: string | number) => {
      emit('update:modelValue', value)
    },
    onChange: (e: RadioChangeEvent) => {
      e.stopPropagation()
      emit('change', e.target.value)
    }
  }, children)

  return h('div', {
    class: [
      'ns-radio-group',
      props.class
    ]
  }, [
      title(),
      group() 
    ]
  )
}
