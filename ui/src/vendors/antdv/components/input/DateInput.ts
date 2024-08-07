import {h, ref, defineComponent, Ref, computed, toRaw} from 'vue'
import { DatePicker } from 'ant-design-vue'
import { dateInputProps } from '../../../../components'
import dayjs from 'dayjs'
import type { Dayjs } from 'dayjs'
import { renderFormItem } from '../../utils'

/**
 * Antdv DateInput
 */
export const DateInput = defineComponent({
  name: 'DateInput',
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

    return () => renderFormItem(
      props, ctx.slots,
      () => h(DatePicker, {
          visible: visible.value,
          onClose: close,
          placeholder: props.placeholder,
          showTime: props.hasTime === true
            ? {
                format: props.timeFormat,
                minuteStep: props.minuteStep,
              }
            : false,
          showNow: props.hasNow,
          format: props.format,
          ...value.value
            ? { value: dayjs(value.value) }
            : {},
          'onUpdate:value': (value: string | Dayjs) => {
            const val = value === null
              ? ''
              : (typeof value === 'string'
                  ? dayjs(value)
                  : value
                ).format(props.format)
            props['onUpdate:modelValue']?.(val)
          },
          onChange: (value: string | Dayjs, dateString: string) => {
            ctx.emit('change', value)
          },
          disabledDate: props.disabledDate,
          disabledTime: props.disabledTime,
          disabled: props.disabled ?? false,
        })
    )
  }
})
