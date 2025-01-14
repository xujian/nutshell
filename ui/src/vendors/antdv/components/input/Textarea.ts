import { h, ref, nextTick } from 'vue'
import { Textarea as AntTextarea } from 'ant-design-vue'
import { defineComponent } from 'vue'
import { textareaProps, textareaEmits } from '../../../../components/input'
import { ChangeEvent } from 'ant-design-vue/es/_util/EventInterface'
import { marginProps } from '../../../../utils/private/helpers'
import { renderFormItem } from '../../utils'

/**
 * Antdv Textarea
 */

export const Textarea = defineComponent({
  name: 'Textarea',
  props: {
    ...textareaProps,
    ...marginProps
  },
  emits: textareaEmits,
  setup: (props, { emit, slots }) => {
    const textareaRef = ref()
    return () =>
      renderFormItem(props, slots, () =>
        h(AntTextarea, {
          ref: textareaRef,
          maxlength: props.maxlength ?? 200,
          disabled: props.disabled ?? false,
          value: props.modelValue,
          placeholder: props.placeholder,
          showCount: props.hasCount,
          autoSize: props.autoSize,
          rows: props.rows,
          valueModifiers: {
            lazy: props.lazy
          },
          'onUpdate:value': (value: string) => {
            nextTick(() => {
              const val = props.modelModifiers?.trim ? value.trim() : value
              props['onUpdate:modelValue']?.(val)
              textareaRef.value?.focus()
            })
          },
          onChange: (e: ChangeEvent) => {
            emit('change', e.target.value)
          },
          onBlur: (e: FocusEvent) => {
            emit('blur', props.modelValue)
          },
          onFocus: (e: FocusEvent) => {
            emit('focus', props.modelValue)
          }
        })
      )
  }
})
