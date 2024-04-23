import { PropType } from 'vue'
import { buildProps } from '../utils/private/props'
import { UniDataItem } from '../shared'

export type EditableCompleteCallback = (value?: string[]) => boolean

export type EditableConfig = {
  options: UniDataItem[]
}

const editableProps = {
  editable: {
    type: Boolean,
    default: false,
  },
  editableConfig: {
    type: Object as PropType<EditableConfig>,
  },
  onEditComplete: {
    type: Function as PropType<EditableCompleteCallback>,
    default: (value?: string[]) => false
  }
}

export type EditableEmits = {
  editComplete: (value: string[]) => void
}

const editableEmits: EditableEmits = {
  editComplete: (value: string[]) => void 0
}

export const useEditableProps = buildProps(editableProps)

export const useEditableEmits = () => {
  return editableEmits
}
