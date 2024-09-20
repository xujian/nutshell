import { PropType, ObjectEmitsOptions, SlotsType, ref } from 'vue'
import { define, MakePropsType } from '../../utils'
import { useDisplayProps, useModelValuePropsForArray, useFieldProps } from '../../props'
import { Media } from '../../types'
import { FullValidationRule, ValidationRule, formatRules } from '../../props/field'

export type BeforeUploadMethod = ((file: Media) => Promise<Blob>)

export type UploadHandler = (file: Media) => Promise<Media>

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
  maxFileSize: {
    type: Number,
    default: 30,
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
    default: true
  },
  beforeUpload: {
    type: Function as PropType<BeforeUploadMethod>
  },
  handler: {
    type: Function as PropType<UploadHandler>
  },
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
}

export const uploadEmits: UploadEmits = {
  complete: (file: Media) => {
    return true
  },
  delete: (id: string) => {
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

