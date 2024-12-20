import { h, ref, defineComponent, Ref, computed } from 'vue'
import { DatePicker } from 'ant-design-vue'
import { dateInputProps } from '../../../../components'
import type { Dayjs } from 'dayjs'
import dayjs from 'dayjs'
import { renderFormItem } from '../../utils'

/**
 * Antdv DateInput
 */
export const YearInput = defineComponent({
  name: 'YearInput',
  props: dateInputProps,
  setup: (props, ctx) => {
    const visible = ref(false)
    const open = () => {
      visible.value = true
    },
    close = () => {
      visible.value = false
    }
    const value: Ref<string | Dayjs | undefined> = computed(() => props.modelValue
        ? dayjs(props.modelValue) || dayjs()
        : undefined
      )

    return () => renderFormItem(props, ctx.slots, () => h(DatePicker, {
        visible: visible.value,
        onClose: close,
        picker: 'year',
        placeholder: props.placeholder,
        value: dayjs(value.value),
        'onUpdate:value': (value: string | Dayjs) => {
          const val = value === null
            ? ''
            : (typeof value === 'string' ? dayjs(value) : value).format('YYYY')
          props['onUpdate:modelValue']?.(val)
        },
        ...props.disabledDate
          ? {
              disabledDate: props.disabledDate,
            }
          : {},
        disabled: props.disabled ?? false,
      })
    )
  }
})
