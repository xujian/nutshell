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
  ...useModelValuePropsForArray(),
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

export type CropComplete = (blob: Blob) => void
export type CropCancel = () => void

/**
 *  带有裁切功能的文件上传组件 <ns-crop-upload>
 */
export const NsCropUpload = defineComponent({
  name: 'NsCropUpload',
  props: cropUploadProps,
  emits: cropUploadEmits,
  setup (props, { emit }) {

    const extraOpen = ref(false)

    const url = ref<string | undefined>(),
      panel = ref<HTMLDivElement>(),
      cropper = ref<Cropper | null>(null),
      previewUrl = ref<string>(),
      cropComplete = ref<CropComplete>(),
      cropCancel = ref<CropCancel>()

    const cleanup = () => {
        if (!cropper.value) return
        cropper.value.destroy()
        cropper.value = null
        url.value = undefined
        extraOpen.value = false
      },
      cancel = () => {
        cleanup()
        cropCancel.value?.()
      },
      ok = () => {
        if (!cropper.value) return
        cropper.value.getCroppedCanvas().toBlob((blob) => {
          if (blob) {
            cropComplete.value?.(blob)
          } else {
            cropCancel.value?.()
          }
          cleanup()
        })
      }

    const originalImage = () =>
      url.value
        ? h('img', {
            class: ['image'],
            src: url.value,
            onLoad () {
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

    const extra = () => h('div', {
      ref: panel,
      class: 'extra crop-panel'
    }, h('div', {class: 'content'}, [
          originalImage(),
          buttons(),
          preview(),
        ]
      )
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
      const options = {
        viewMode: 3,
        aspectRatio: 1,
        movable: false,
        zoomable: false,
        rotatable: false,
        scalable: false,
        crop: onCrop,
      }
      // @ts-ignore
      cropper.value = new Cropper(img, options)
    }

    /**
     * 上传以前讲本地图片显示预览
     * 并且初始化 Cropper
     */
    const makeImage = (file: File) => {
      const reader = new FileReader()
      reader.onload = function (evt) {
        var base64 = evt.target?.result || ''
        url.value = base64 as string
      }
      reader.readAsDataURL(file as unknown as Blob)
    }

    return () => h(NsUpload, {
      name: props.name,
      label: props.label,
      modelValue: props.modelValue,
      maxFileSize: props.maxFileSize,
      maxFiles: 1, // 仅允许上传一个文件(单一模式)
      multiple: false, // 不允许选取多个文件
      accept: 'image/jpeg, image/png',
      class: [
        'ns-crop-upload',
        ...extraOpen.value ? ['extra-open'] : []
      ],
      beforeUpload (files: File[]) {
        // 拦截上传动作
        // 当 resolve 时恢复上传
        return new Promise<Blob>((resolve, reject) => {
          makeImage(files[0])
          cropComplete.value = (blob: Blob) => {
            resolve(blob)
          }
          extraOpen.value = true
        })
      }
    }, {
      extra,
    })
  }
})
// <ns-crop-upload> 使用 <ns-upload>
