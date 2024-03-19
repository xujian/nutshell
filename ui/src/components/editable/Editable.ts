import { PropType, ObjectEmitsOptions, SlotsType, defineComponent, ref, h } from 'vue'
import { define, MakePropsType } from '../../utils'

export const editableProps = {
  label: {
    type: String
  }
}

export type EditableEmits = {
}

const editableEmits: EditableEmits = {
}

export type EditableSlots = {
  display: never,
  edit: never
}

export type EditableProps = MakePropsType<typeof editableProps, EditableEmits>

/**
 *  组件 <ns-editable>
 */
export const NsEditable = defineComponent({
  name: 'NsEditable',
  props: editableProps,
  emits: editableEmits,
  setup (props, { slots, expose }) {
    const editting = ref<boolean>(false),
      editButton = h('div', {
        class: [
          'editable-button'
        ],
        onClick () {
          editting.value = true
        }
      })
    const display = () => h('div', {
        class: [
          'editable-display'
        ]
      }, [
        slots.display?.(),
        editButton,
      ]),
      edit = () => h('div', {
        class: [
          'editable-edit'
        ]
      }, [
        slots.edit?.(),
      ])
    const exitEdit = () => {
      editting.value = false
    }
    expose({
      exitEdit
    })
    return () => h('div', {
        class: [
          'editable',
          editting.value ? 'editable-editting' : 'editable-display'
        ]
      }, editting.value
        ? edit()
        : display()
    )
  }
})
