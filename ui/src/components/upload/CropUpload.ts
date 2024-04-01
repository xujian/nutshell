import { PropType, ObjectEmitsOptions, SlotsType, ref, defineComponent, h, reactive } from 'vue'
import { MakePropsType } from '../../utils'
import { useDisplayProps, useModelValuePropsForArray, useModelValuePropsForStringArray } from '../../props'
import type { File, FilesEmits } from '../files'
import { NsUpload } from './Upload'
import Cropper from 'cropperjs'
import throttle from 'lodash/throttle'
import 'cropperjs/dist/cropper.css'
import { NsButton } from '../button'

export const cropUploadProps = {
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
  ...useModelValuePropsForArray<File>(),
  ...useDisplayProps(),
  ...useModelValuePropsForStringArray
}

export type CropUploadEmits = {
  crop: () => boolean
  complete: () => boolean
}

export const cropUploadEmits: CropUploadEmits = {
  crop: () => true,
  complete: () => true
}

export type CropUploadProps = MakePropsType<typeof cropUploadProps, CropUploadEmits>

/**
 *  带有裁切功能的文件上传组件 <ns-crop-upload>
 */
export const NsCropUpload = defineComponent({
  name: 'NsCropUpload',
  props: cropUploadProps,
  emits: cropUploadEmits,
  setup (props, { emit }) {

    const uploader = ref<typeof NsUpload>(),
      url = ref<string>(''),
      panel = ref<HTMLDivElement>(),
      cropper = ref<Cropper>(),
      previewUrl = ref<string>()

    const cancel = () => {
      if (!cropper.value) return
      cropper.value.destroy()
      console.log('===uploader.value', uploader.value)
      uploader.value?.closeSlide()
    }

    const ok = () => {
      if (!cropper.value) return
    }

    const originalImage = () =>
      url.value
        ? h('img', {
            class: ['image'],
            src: url.value,
            onLoad () {
              console.log('===onload')
              const img = panel.value?.querySelector('.image')
              initCropper(img as HTMLImageElement)
            }
          })
        : void 0,
        buttons = () => h('div', {
          class: ['row', 'py-sm', 'justify-end', 'buttons']
        }, [
            h(NsButton, {
                label: '取消',
                size: 'xs',
                onClick: cancel
              }),
            h(NsButton, {
                label: '保存',
                size: 'xs',
                color: 'primary',
                onClick: ok
              }),
        ]
      )

    const preview = () => h('div', {
      class: 'preview'
    }, h('img', {
      src: previewUrl.value
    }))

    const slide = () => h('div', {
      ref: panel,
      class: 'crop-panel'
    }, [
        originalImage(),
        buttons(),
        preview(),
      ]
    )

    const onCrop = throttle((ev: any) => {
      if (!cropper.value) return
      cropper.value.getCroppedCanvas().toBlob((blob) => {
        const url = window.URL.createObjectURL(blob!)
        previewUrl.value = url
      })
    }, 500)

    const initCropper = (img: HTMLImageElement) => {
      // https://github.com/fengyuanchen/cropperjs?tab=readme-ov-file#options
      const options: Options<HTMLImageElement> = {
        viewMode: 3,
        aspectRatio: 1,
        movable: false,
        zoomable: false,
        rotatable: false,
        scalable: false,
        crop: onCrop,
      }
      cropper.value = new Cropper(img, options)
    }

    const makeImage = (file: File) => {
      console.log('===makeImage', file)
      const reader = new FileReader()
      reader.onload = function (evt) {
        var base64 = evt.target?.result || ''
        url.value = base64 as string
      }
      reader.readAsDataURL(file as unknown as Blob)
    }

    return () => h(NsUpload, {
      ref: uploader,
      name: props.name,
      label: props.label,
      modelValue: props.modelValue,
      maxFileSize: props.maxFileSize,
      maxFiles: 1, // 仅允许上传一个文件(单一模式)
      multiple: false, // 不允许选取多个文件
      accept: 'image/jpeg, image/png',
      class: 'ns-crop-upload',
      beforeUpload (file: File) {
        makeImage(file)
        this.openSlide()
        return false
      }
    }, {
      slide,
    })
  }
})
// <ns-crop-upload> 使用 <ns-upload>
