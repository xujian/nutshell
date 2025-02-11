import { CascadingSelectOption, cascadingSelectProps } from '../../../../components/select'
import { computed, defineComponent, h, Ref, ref, watch } from 'vue'
import { renderFormItem } from '../../utils'
import { PickerOption } from '@nutui/nutui-taro/dist/types/__VUE/picker/types'

export type RangeItem = {
  id: string,
  name: string,
}

export const CascadingSelect = defineComponent({
  name: 'NutuiCascadingSelect',
  props: cascadingSelectProps,
  setup (props, { emit, slots }) {
    const pickerOpen = ref(false),
      display = ref('')
    const onChange = (value: any) => {
      emit('change', value)
    }

    const onCancel = () => {
        pickerOpen.value = false
      },
      onConfirm = ({ selectedValue, selectedOptions }: any) => {
        emit('update:modelValue', [...selectedValue])
        display.value = props.formatter
          ? props.formatter([...selectedOptions])
          : selectedOptions
            .map((o: PickerOption) => o.label)
            .filter(Boolean)
            .join(props.seperator ?? '/')
        pickerOpen.value = false
      }

    // 原始数据容错
    const columns: Ref<PickerOption[]> = computed(() => props.options?.map(o => {
      o.children = o.children && o.children.length > 0
        ? o.children
        // 必须要有一个空的选项，否则会报错
        : [ { value: '', label: '' } ]
      return o as PickerOption
    } ) || [])

    const picker = () =>
      h(NutPicker, {
        class: ['picker'],
        modelValue: props.modelValue,
        columns: columns.value,
        fieldNames: { text: 'label' },
        onChange,
        onCancel,
        onConfirm,
      }
    )

    const popup = () => h(NutPopup, {
        visible: pickerOpen.value,
        position: 'bottom',
        onClickOverlay: () => pickerOpen.value = false
      }, {
        default: picker
      }
    )

    const openPicker = () => {
      pickerOpen.value = true
    }

    return () => renderFormItem(props, slots,
        () => [
          h(NutInput, {
            name: props.name,
            placeholder: props.placeholder || '',
            modelValue: display.value,
            readonly: true,
            onClick: openPicker,
            inputAlign: props.variant === 'solid' ? 'left' : 'right',
          }),
          popup(),
        ]
      )
  }
})
