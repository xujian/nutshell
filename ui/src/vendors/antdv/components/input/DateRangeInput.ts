import { h, ref, defineComponent, computed, ComputedRef } from 'vue'
import { RangePicker } from 'ant-design-vue'
import { dateRangeInputEmits, dateRangeInputProps } from '../../../../components'

import type { Dayjs } from 'dayjs'
import dayjs from 'dayjs'
import { renderFormItem } from '../../utils'
import { DateRange } from '../../../../types'

type DateValue = string | Dayjs

/**
 * 使用 ant-designv-vue 实现日期区间输入框
 */
export const DateRangeInput = defineComponent({
  name: 'DateRangeInput',
  props: dateRangeInputProps,
  emits: dateRangeInputEmits,
  setup: (props, { emit, slots }) => {
    dayjs.locale('zh-cn')
    const visible = ref(false)
    const open = () => {
      visible.value = true
    },
    close = () => {
      visible.value = false
    }

    const value: ComputedRef<[DateValue | undefined, DateValue | undefined]> = computed(() => {
      const [from, to] = props.modelValue || []
      return [
        from
          ? dayjs(from) || dayjs()
          : undefined,
        to
          ? dayjs(to) || dayjs()
          : undefined,
        ]
    })

    const formItem = ref(null)

    return () => renderFormItem(props, slots, () => h(RangePicker, {
        ref: formItem,
        visible: visible.value,
        onClose: close,
        presets: props.presets,
        // @ts-ignore
        value: value.value,
        'onUpdate:value': (value: DateValue[]) => {
          const val: [string | undefined, string | undefined] = value
            ?  value.map(v => {
                return (typeof v === 'string' ? dayjs(v) : v).format('YYYY-MM-DD')
              }) as [string, string]
            : [undefined, undefined]
          props['onUpdate:modelValue']?.(val)
          // emit('change', val)
        },
        // @ts-ignore
        onChange: (value: DateRange, dateString: [string, string]) => {
          emit('change', value)
        },
        disabled: props.disabled ?? false,
        ...props.inside
           ? {
              // @ts-ignore
              getPopupContainer: (element) => {
                return element.parentElement
              }
            }
          : {}
      })
    )
  }
})
