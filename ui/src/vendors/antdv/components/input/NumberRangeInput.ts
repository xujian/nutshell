import { h } from 'vue'
import { InputNumber as AntInputNumber, FormItemRest } from 'ant-design-vue'
import { defineComponent } from 'vue'
import { numberRangeInputProps, inputEmits } from '../../../../components/input'
import { marginProps } from '../../../../utils/private/helpers'
import { amountFormatter } from '../../../../composables/amount'
import { renderFormItem } from '../../utils'

/**
 * Antdv InputNumber
 */
export const NumberRangeInput = defineComponent({
  name: 'NumberInput',
  props: {
    ...numberRangeInputProps,
    ...marginProps
  },
  emits: inputEmits,
  setup: (props, { emit, slots }) => {
    const sepertor = () => h('div', {
      class: [
        'seperator'
      ]
    })

    const getCurrentValue: (value: string | number, index: number) => [number | undefined, number | undefined]
      = (value: string | number, index: number) => {
      const val: number = typeof value === 'string'
        ? +value.trim()
        : value
      return index === 0
        ? [val, props.modelValue?.[1]]
        : [props.modelValue?.[0], val]
    }

    return () =>
      renderFormItem(props, slots, () => [
        h(
          AntInputNumber,
          {
            maxlength: 20,
            disabled: props.disabled ?? false,
            value: props.modelValue?.[0],
            placeholder: props.placeholder,
            max: Infinity,
            min: 0,
            step: 1,
            precision: props.maximumFractionDigits,
            formatter: amountFormatter,
            valueModifiers: {
              lazy: props.lazy === false ? false : true
            },
            'onUpdate:value': (value: string | number) => {
              props['onUpdate:modelValue']?.(getCurrentValue(value, 0))
            },
            onChange: (e: string | number) => {
              // @ts-ignore
              emit('change', getCurrentValue(e, 0))
            },
          } as any,
          {}
        ),
        sepertor(),
        h(FormItemRest, {}, {
          default: () => h(AntInputNumber,
            {
              disabled: props.disabled ?? false,
              value: props.modelValue?.[1],
              placeholder: props.placeholder,
              max: Infinity,
              min: 0,
              step: 1,
              precision: props.maximumFractionDigits,
              formatter: amountFormatter,
              valueModifiers: {
                lazy: props.lazy === false ? false : true
              },
              'onUpdate:value': (value: string | number) => {
                props['onUpdate:modelValue']?.(getCurrentValue(value, 1))
              },
              onChange: (e: string | number) => {
                // @ts-ignore
                emit('change', getCurrentValue(e, 1))
              },
            } as any,
            {}
          )
        })
      ])
  }
})
