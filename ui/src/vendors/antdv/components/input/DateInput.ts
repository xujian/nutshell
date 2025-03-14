import { h, defineComponent, computed, ComputedRef } from 'vue'
import { DatePicker } from 'ant-design-vue'
// import locale from 'ant-design-vue/es/date-picker/locale/zh_CN'
import { dateInputEmits, dateInputProps } from '../../../../components'

import dayjs from 'dayjs'
import { renderFormItem } from '../../utils'


/**
 * Antdv DateInput
 */
export const DateInput = defineComponent({
  name: 'DateInput',
  props: dateInputProps,
  emits: dateInputEmits,
  setup: (props, ctx) => {

    const transformValue = (v: string | dayjs.Dayjs) => v === null
      ? ''
      : (typeof v === 'string'
          ? dayjs(v, props.format)
          : v
        ).format(props.format)

    const value: ComputedRef<dayjs.Dayjs | undefined> = computed(() => props.modelValue
        ? dayjs(props.modelValue, props.format) || dayjs()
        : undefined
      )

    return () => renderFormItem(
      props, ctx.slots,
      () => h(DatePicker, {
          placeholder: props.placeholder,
          showTime: props.hasTime === true
            ? {
                format: props.timeFormat,
                minuteStep: props.minuteStep,
              }
            : false,
          showNow: props.hasNow,
          // format: props.format,
          ...value.value
            ? {value: value.value}
            : {},

          'onUpdate:value': (v: string | dayjs.Dayjs) => {
            props['onUpdate:modelValue']?.(transformValue(v))
            // ctx.emit('update:modelValue', val)
          },
          onChange: (v: string | dayjs.Dayjs, dateString: string) => {
            ctx.emit('change', transformValue(v))
          },
          disabledDate: props.disabledDate,
          disabledTime: props.disabledTime,
          disabled: props.disabled ?? false,
        })
    )
  }
})
