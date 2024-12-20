import { computed, defineComponent, h, ref } from 'vue'
import { renderFormItem } from '../../utils'
import { multipleSelectProps, NsChip, NsSheet, SelectOption } from '../../../../components'

export const MultipleSelect = defineComponent({
  name: 'NutuiMultipleSelect',
  props: multipleSelectProps,
  setup (props, { emit, slots }) {

    const pickerOpen = ref(false),
      closePicker = () => {
        pickerOpen.value = false
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
      chips = () => h('div', {
        class: ['multiple-select-chips', 'full-height', 'row', 'align-center', 'justify-end'],
        onClick: () => {
          pickerOpen.value = true
        }
      }, {
        default: () => selected.value?.length ? selected.value.map(s => h(NsChip, {
          color: 'primary',
          label: s.label
        })) : h('span', {
          class: ['multiple-select-placeholder']
        }, props.placeholder || '请选择')
      }),
      sheet = () => h(NsSheet, {
        class: ['multiple-select-sheet'],
        modelValue: pickerOpen.value,
        colorScheme: 'light',
        mask: true,
        onClose: closePicker,
      }, {
        default: () => h(NutCheckboxGroup, {
          class: ['column', 'justify-stretch'],
          modelValue: props.modelValue,
          'onUpdate:modelValue': (value: string[]) => {
            emit('update:modelValue', value)
          }
        }, {
          default: () => props.options?.map(item =>
            h(NutCheckbox, {
              label: `${item.value}`,
              textPosition: 'left',
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
