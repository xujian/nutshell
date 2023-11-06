import { h, SetupContext } from 'vue'
import { RadioGroup as AntdvRadioGroup, Radio as AntdvRadio, RadioChangeEvent } from 'ant-design-vue'
import { RadioGroupProps } from '../../../../components'

export const RadioGroup = (props: RadioGroupProps, ctx: SetupContext) => {

  const { items } = props,
    { emit } = ctx
 
  const children = () => items?.map(item => h(AntdvRadio, {
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
      'ns-radio-group',
      ...props.direction === 'vertical'
        ? [
            'flex', 'flex-col'
          ]
        : [
            'flex', 'flex-row'
          ],
      ],
      value: props.modelValue,
      'onUpdate:value': (value: string | number) => {
        emit('update:modelValue', value)
      },
      onChange: (e: RadioChangeEvent) => {
        e.stopPropagation()
        emit('change', e.target.value)
      }
  }, children)

  return h('div', {
    class: ['ns-radio-group']
  }, [
    title(),
    group(),
  ])
}
