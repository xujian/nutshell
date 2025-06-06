import { defineComponent, h } from 'vue'
import { uploadEmits, uploadProps } from '../../../../components/upload'
import { renderFormItem } from '../../utils'
import { Media } from '../../../../types/media'
import { PreviewMediaParam, useNutshell } from '../../../../types'
import { NsImage, NsUploadButton, NsButton } from '../../../../components'

export const Upload = defineComponent({
  name: 'NutuiUpload',
  props: uploadProps,
  emits: uploadEmits,
  setup: (props, { slots, emit }) => {

    const $n = useNutshell()

    const getStyle = () => {
      const [m] = props.modelValue || []
      return m ? {
        backgroundImage: `url(${m.thumb || m.url})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
      }: {}
    }

    const onDeleteClick = (e: any) => {
      e.preventDefault()
      e.stopImmediatePropagation(),
      props['onUpdate:modelValue']?.([])
    }

    const reUpload = (callback?: (medias: Media[]) => void) => {
      Taro.chooseMedia({
        count: props.maxFileSize || 1,
        sourceType: ['album'],
        maxDuration: 30,
        success: async (selected: any) => {
          const {tempFiles: files} = selected
          for (const f of files) {
            const media = await props.handler?.({
              path: f.tempFilePath
            })
            let medias = props.modelValue || []
            if (media) {
              if (props.multiple) {
                // 多文件上传
                medias.push(media)
              } else {
                // 单文件上传
                medias = [media]
              }
            }
            props['onUpdate:modelValue']?.(medias)
            callback?.(medias)
          }
        }
      })
    }

    const preview = (images: PreviewMediaParam) => {
      $n.preview(images, {
        button: props.disabled ? '' : '更换图片',
        mode: props.previewMode,
        hasHeader: false,
        hasCloseButton: true,
        onButtonClick () {
          reUpload((medias: Media[]) => {
            this.update(medias)
          })
        }
      })
    }

    const onClick = () => {
      if (props.modelValue?.length) {
        // 预览图片
        preview(props.modelValue)
        return
      }
      if (props.disabled) {
        return false
      }
      reUpload()
    }

    return () => renderFormItem(props, slots,
      () => !props.modelValue?.length
      ? h(NsUploadButton, {
          modelValue: props.modelValue,
          maxFileSize: props.maxFileSize,
          handler: props.handler,
          deletable: props.deletable,
          previewMode: props.previewMode,
          disabled: props.disabled,
          onUpdate: props['onUpdate:modelValue']
        })
      : h(NsImage, {
          class: [
            'ns-upload-item',
            ...props.modelValue?.length ? ['uploaded'] : ['empty'],
          ],
          style: getStyle(),
          onClick
        }, props.deletable !== false ? h(NsButton, {
              icon: 'delete',
              class: 'delete-button',
              fill: 'negtive',
              size: 'xs',
              onClick: onDeleteClick
            }) : void 0
          )
        )
  }
})
