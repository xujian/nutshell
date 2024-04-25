import { h } from 'vue'
import { InputNumber as AntInputNumber } from 'ant-design-vue'
import { defineComponent } from 'vue'
import { numberInputProps, inputEmits } from '../../../../components/input'
import { FullValidationRule } from '../../../../props/field'
import { transformRules } from './rules'
import { marginProps } from '../../../../utils/private/helpers'
import { amountFormatter, amountParser, amountChinese } from '../../../../composables/amount'
import { renderFormItem } from '../../utils'

/**
 * Antdv InputNumber
 */
export const NumberInput = defineComponent({
  name: 'NumberInput',
  props: {
    ...numberInputProps,
    ...marginProps
  },
  emits: inputEmits,
  setup: (props, { emit, slots }) => {
    const rules = transformRules(props.rules as FullValidationRule[])
    return () =>
      renderFormItem(props, slots, () => [
        h(
          AntInputNumber,
          {
            class: props.classes,
            maxlength: props.maxlength ?? 20,
            disabled: props.disabled ?? false,
            value: props.modelValue,
            placeholder: props.placeholder,
            max: props.max ?? 99999999999999999999,
            min: props.min ?? 0,
            step: props.step ?? 1,
            precision: props.precision,
            formatter: props.formatter ?? amountFormatter,
            parser: props.parser ?? amountParser,
            valueModifiers: {
              lazy: props.lazy === false ? false : true
            },
            'onUpdate:value': (value: string) => {
              const val = props.modelModifiers?.trim ? value.trim() : value
              props['onUpdate:modelValue']?.(val)
            },
            onChange: (e: string | number) => {
              emit('change', e)
            },
            onBlur: (e: FocusEvent) => {
              emit('blur', props.modelValue)
            },
            onFocus: (e: FocusEvent) => {
              emit('focus', props.modelValue)
            }
          } as any,
          {}
        ),
        props.hasAmount
          ? h(
              'div',
              { class: 'ns-number-amount' },
              amountChinese(Number(props.modelValue) * props.amountRate)
            )
          : null
      ])
  }
})
