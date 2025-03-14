import { h, nextTick, ref } from 'vue'
import { InputNumber as AntInputNumber } from 'ant-design-vue'
import { defineComponent } from 'vue'
import { numberInputProps, numberInputEmits } from '../../../../components/input'
import { marginProps } from '../../../../utils/private/helpers'
import { amountFormatter, amountParser, amountChinese } from '../../../../composables/amount'
import { renderFormItem } from '../../utils'
import { useForm } from '../../utils'

/**
 * Antdv InputNumber
 */
export const NumberInput = defineComponent({
  name: 'NumberInput',
  props: {
    ...numberInputProps,
    ...marginProps
  },
  emits: numberInputEmits,
  setup: (props, { emit, slots }) => {
    const form = useForm(),
      inputNumberRef = ref()
    return () =>
      renderFormItem(props, slots, () => [
        h(
          AntInputNumber,
          {
            ref: inputNumberRef,
            maxlength: props.maxlength ?? 20,
            disabled: props.disabled ?? false,
            // @ts-ignore
            value: props.modelValue,
            placeholder: props.placeholder,
            max: props.max ?? Infinity,
            min: props.min ?? 0 - Infinity,
            step: props.step ?? 1,
            precision: props.maximumFractionDigits,
            // @ts-ignore
            formatter: props.maximumFractionDigits === 0 ? null : props.formatter ?? amountFormatter,
            // @ts-ignore
            parser: props.maximumFractionDigits === 0 ? null : props.parser ?? amountParser,
            ...props.lazy
              ? {
                  valueModifiers: {
                    lazy: true,
                  }
                }
              : {},
            // @ts-ignore
            'onUpdate:value': (value: string | null) => {
              const val = value ?? void 0
              props['onUpdate:modelValue']?.(val)
              nextTick(() => {
                inputNumberRef.value?.focus()
              })
            },
            onChange: (value?: string | number) => {
              const val = value
                ? +value
                : void 0
              emit('change', val)
            },
            onBlur: (e: FocusEvent) => {
              form.validate(props.name as string)
              emit('blur')
            },
            onFocus: (e: FocusEvent) => {
              emit('focus')
            },
            onPressEnter: () => {
              emit('enter')
            }
          }
        ),
        props.hasDaxie
          ? h(
              'div',
              { class: 'ns-number-amount' },
              amountChinese(Number(props.modelValue) * props.amountRate)
            )
          : null
      ])
  }
})
