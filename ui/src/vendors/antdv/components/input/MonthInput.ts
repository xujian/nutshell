import { h, ref, defineComponent, Ref, computed } from 'vue'
import { DatePicker } from 'ant-design-vue'
import { dateInputProps } from '../../../../components'
import type { Dayjs } from 'dayjs'
import dayjs from 'dayjs'
import { renderFormItem } from '../../utils'

/**
 * Antdv DateInput
 */
export const MonthInput = defineComponent({
  name: 'MonthInput',
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
        picker: 'month',
        placeholder: props.placeholder,
        value: value.value ? dayjs(value.value) : void 0,
        'onUpdate:value': (value: string | Dayjs) => {
          const val = value === null
            ? ''
            : (typeof value === 'string' ? dayjs(value) : value).format('YYYY-MM')
          props['onUpdate:modelValue']?.(val)
        },
        disabledDate: props.disabledDate,
        disabled: props.disabled ?? false,
      })
    )
  }
})
