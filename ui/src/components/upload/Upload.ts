import { PropType, ObjectEmitsOptions, SlotsType, ref } from 'vue'
import { define, MakePropsType } from '../../utils'
import { useDisplayProps, useModelValuePropsForArray, useFieldProps } from '../../props'
import { Media } from '../../types'
import { FullValidationRule, ValidationRule, formatRules } from '../../props/field'
import { PreviewMode } from '../preview'
import { buildProps } from '../../utils/private/props'

export type BeforeUploadMethod = ((file: Media) => Promise<Blob>)

export type UploadHandler = (file: Media) => Promise<Media>

export const uploadButtonProps = {
  maxFileSize: {
    type: Number,
    default: 1,
  },
  handler: {
    type: Function as PropType<UploadHandler>
  },
}

export const useUploadButtonProps = buildProps(uploadButtonProps)


export const uploadProps = {

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
  deletable: {
    type: Boolean,
    default: false
  },
  downloadable: {
    type: Boolean,
    default: false
  },
  beforeUpload: {
    type: Function as PropType<BeforeUploadMethod>
  },
  previewMode: {
    type: String as PropType<PreviewMode>,
  },
  ...useUploadButtonProps(),
  ...useModelValuePropsForArray(),
  ...useDisplayProps(),
  ...useFieldProps(),
   /**
   * 表单项名称
   */
   name: {
    type: String,
    default: 'file',
  },
}

export type UploadEmits = {
  complete: (file: Media) => boolean
  delete: (id: string) => boolean
  download: (id: string) => boolean
}

export const uploadEmits: UploadEmits = {
  complete: (file: Media) => {
    return true
  },
  delete: (id: string) => {
    return true
  },
  download: (id: string) => {
    return true
  }
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
    const finalRules = formatRules(props.rules as ValidationRule[], props)
    return {
      props: {
        rules: finalRules as FullValidationRule[]
      }
    }
  }
})
// <ns-upload> 使用 <ns-files>

