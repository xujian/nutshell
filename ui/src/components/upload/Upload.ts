import { PropType, ObjectEmitsOptions, SlotsType, ref } from 'vue'
import { define, MakePropsType } from '../../utils'
import { useDisplayProps, useModelValuePropsForArray, useModelValuePropsForStringArray } from '../../props'
import type { File, FilesEmits } from '../files'

export type BeforeUploadMethod = ((files: File[]) => Promise<Blob>)

export const uploadProps = {
  /**
   * 表单项名称
   */
  name: {
    type: String,
    default: 'file',
  },
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
  /**
   * 限制可上传的文件类型
   */
  accept: {
    type: String,
  },
  maxFileSize: {
    type: Number,
  },
  /**
   * 上传数量限制
   * 当 maxFiles = 1 时, UI 有所不同 (替换模式)
   */
  maxFiles: {
    type: Number,
  },
  /**
   * 单文件
   */
  multiple: {
    type: Boolean,
    default: false,
  },
  beforeUpload: {
    type: Function as PropType<BeforeUploadMethod>
  },
  ...useModelValuePropsForArray(),
  ...useDisplayProps(),
  ...useModelValuePropsForStringArray
}

export type UploadEmits = {
  complete: () => void
} | FilesEmits

export const uploadEmits: UploadEmits = {
  complete: () => void 0
}

export type UploadSlots = {
  default: never,
  extra: never,
}

export type UploadProps = MakePropsType<typeof uploadProps, UploadEmits>

/**
 *  文件上传组件 <ns-upload>
 */
export const NsUpload = define({
  name: 'NsUpload',
  props: uploadProps,
  emits: uploadEmits,
  setup (props, slots) {

    return {
    }
  }
})
// <ns-upload> 使用 <ns-files>

