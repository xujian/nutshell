import { defineComponent, h } from 'vue'
import { numberInputEmits, numberInputProps } from '../../../../components/input'
import { marginProps } from '../../../../utils'
import { renderFormItem, useForm } from '../../utils'

export const NumberInput = defineComponent({
  name: 'NutuiNumberInput',
  props: {
    ...numberInputProps,
    ...marginProps
  },
  emits: numberInputEmits,
  setup (props, { slots, emit }) {

    const form = useForm()

    const formatter: (val: string) => string = (val: string) => {
      if (!val) return ''
      let value = `${val}`.replace(/[^\d+\.]/g, '')
      const [s, f]  = `${value}`.split('.'),
        fraction = f === void 0
          ? void 0
          : props.maximumFractionDigits === void 0
            ? f
            : f.substring(0, props.maximumFractionDigits)
      const result = fraction !== void 0
        ? `${s}.${fraction}`
        : s
      return result
    }

    return () => renderFormItem(props, slots,
      () => h(props.step ? NutInputNumber : NutInput, {
          border: false,
          name: props.name,
          modelValue: props.modelValue,
          // type: props.maximumFractionDigits !== void 0 ? 'number' : 'digit',
          placeholder: props.placeholder,
          formatter: formatter,
          min: props.min,
          max: props.max,
          inputAlign: props.textAlign ?? 'right',
          placeholderClass: 'input-placeholder',
          'onUpdate:modelValue': (value: number | string) => {
            props['onUpdate:modelValue']?.(value)
          },
          onBlur: (e: any) => {
            if (props.modelValue !== void 0) {
              const v = `${props.modelValue}`,
                [s, f] = v.split('.')
                // 清理无效的、末尾小数点
              if (f === '') {
                props['onUpdate:modelValue']?.(s)
              }
            }
            form.validate(props.name as string)
            emit('blur')
          },
          onChange: (data: any) => {
            if (props.step === void 0) {
              emit('change', +data.detail.value)
            }
          }
        },
        {
          ...slots.prepend ? {
            // @ts-ignore
            left: () => slots.prepend()
          } : {},
          ...slots.append ? { right: slots.append } : {}
        }
      )
    )
  }
})
