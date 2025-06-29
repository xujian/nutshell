import { defineComponent, h, PropType } from 'vue'
import { AutoSizeType, textareaEmits, textareaProps } from '../../../../components'
import { marginProps } from '../../../../utils'
import { renderFormItem, useForm } from '../../utils'

export const Textarea = defineComponent({
  name: 'NutuiTextarea',
  props: {
    ...textareaProps,
    ...marginProps
  },
  emits: textareaEmits,
  setup (props, { slots, emit }) {

    const form = useForm()

    return () => renderFormItem(props, slots,
      () => h(NutTextarea, {
          border: false,
          name: props.name,
          placeholder: props.placeholder || '',
          modelValue: props.modelValue as string,
          disabled: props.disabled ?? false,
          maxLength: props.maxlength ?? 200,
          textAlignAlign: props.variant === 'solid' ? 'left' : 'right',
          autosize: props.autoSize as boolean,
          limitShow: props.hasCount,
          rows: props.rows,  // 仅支持H5
          'placeholder-class': 'input-placeholder',
          'onUpdate:modelValue': (value: number | string) => {
            props['onUpdate:modelValue']?.(value)
          },
          onBlur: () => {
            form.validate(props.name as string)
            emit('blur')
          },
          onChange: (e: any) => {
            emit('change', e)
          },
          // onFocus: (e: FocusEvent) => {
          //   emit('focus')
          // },
          // onKeyup: (e: KeyboardEvent) => {
          //   emit('keyup', e.key)
          // },
          // onPressEnter: (e: KeyboardEvent) => {
          //   emit('enter')
          // }
        },
        {}
      )
    )
  }
})
