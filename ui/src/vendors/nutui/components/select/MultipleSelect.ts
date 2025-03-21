import { computed, defineComponent, h, ref } from 'vue'
import { renderFormItem } from '../../utils'
import { multipleSelectProps, SelectOption } from '../../../../components/select'
import { NsChip } from '../../../../components/chip'
import { NsRow } from '../../../../components/flex'
import { NsSheet } from '../../../../components/sheet'

export const MultipleSelect = defineComponent({
  name: 'NutuiMultipleSelect',
  props: multipleSelectProps,
  setup (props, { emit, slots }) {
    const $bus = useBus()

    const pickerOpen = ref(false),
      closePicker = () => {
        pickerOpen.value = false
        $bus.emit('picker.close')
      },
      selected = computed<SelectOption[]>(() => {
        if (!props.modelValue) {
          return []
        }
        const result = props.options?.filter(
          x => props.modelValue?.includes(`${x.value}`)
        ) || [{
          label: '北京',
          value: 'beijing'
        }]
        return result
      }),
      chips = () => h(NsRow, {
        class: ['multiple-select-chips', 'full-height', 'chips-container'],
        justify: 'end',
        onClick: () => {
          pickerOpen.value = true
        }
      }, {
        default: () => selected.value?.length
          ? selected.value.map(s => h(NsChip, {
              color: 'primary',
              label: s.label
            }))
            : h('span', {
              class: [
                'placeholder',
                'multiple-select-placeholder'
              ]
            }, props.placeholder || `请选择${props.label}`)
      }),
      sheet = () => h(NsSheet, {
        class: ['multiple-select-sheet'],
        modelValue: pickerOpen.value,
        title: props.label,
        colorScheme: 'light',
        cancelColor: '#1d1e1e',
        mask: true,
        height: 320,
        onClose: closePicker,
        onComplete: closePicker,
        footer: true,
      }, {
        default: () => h(NutCheckboxGroup, {
          class: ['multiple-select-picker', 'column', 'justify-stretch'],
          modelValue: props.modelValue,
          'onUpdate:modelValue': (value: string[]) => {
            emit('update:modelValue', value)
          }
        }, {
          default: () => props.options?.map(item =>
            h(NutCheckbox, {
              class: ['checkbox-item', 'row'],
              label: `${item.value}`,
            }, {
              default: () => item.label
            })
          )
        })
      })

    return () => renderFormItem(props, slots, () =>
        h('div', {
          class: [
            'multiple-select-body', 'full-height'
          ],
        }, {
          default: () => [
            chips(),
            sheet()
          ]
        }
      )
    )
  }
})
