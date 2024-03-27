import { PropType, ObjectEmitsOptions, SlotsType } from 'vue'
import { define, MakePropsType } from '../../utils'
import { useDisplayProps, useModelValuePropsForArray, useModelValuePropsForStringArray } from '../../props'
import type { File } from '../files'

export const uploadProps = {
  label: {
    type: String
  },
  caption: {
    type: String,
  },
  hasFiles: {
    type: Boolean,
    default: true,
  },
  accept: {
    type: Array as PropType<string[]>
  },
  /**
   * 上传数量限制
   * 当 limit = 1 时, UI 有所不同 (替换模式)
   */
  limit: {
    type: Number,
  },
  /**
   * 单文件
   */
  multiple: {
    type: Boolean,
    default: false,
  },
  ...useModelValuePropsForArray<File>(),
  ...useDisplayProps(),
  ...useModelValuePropsForStringArray
}

export type UploadEmits = {
}

const uploadEmits: UploadEmits = {
}

export type UploadSlots = {
  default: never,
}

export type UploadProps = MakePropsType<typeof uploadProps, UploadEmits>

/**
 *  文件上传组件 <ns-upload>
 */
export const NsUpload = define({
  name: 'NsUpload',
  props: uploadProps,
  emits: uploadEmits,
  setup (props, ctx) {
    return {
    }
  }
})
// <ns-upload> 使用 <ns-files>

