import { computed, defineComponent, h, Ref, ref, SetupContext } from 'vue'
import { NsButton, NsIcon, NsPreview, uploadEmits, uploadProps, UploadProps } from '../../../../components'
import { renderFormItem } from '../../utils'
import { getMediaType, Media } from '../../../../types/media'
import { useNutshell } from '../../../../framework'

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
      console.log('===onDeleteClick', e)
      e.preventDefault()
      e.stopImmediatePropagation(),
      props['onUpdate:modelValue']?.([])
    }

    const reUpload = (callback?: (medias: Media[]) => void) => {
      wx.chooseMedia({
        count: props.maxFileSize || 1,
        mediaType: ['image'],
        soruceType: ['album', 'camera'],
        maxDuration: 30,
        camera: 'back',
        success: async (selected: any) => {
          const {tempFiles: files} = selected
          for (const f of files) {
            console.log('===f', f)
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

    const onClick = () => {
      console.log('===NsUpload onClick', props.modelValue?.length)
      if (props.modelValue?.length) {
        // 预览图片
        $n.preview(props.modelValue, {
          button: '更换图片',
          onButtonClick () {
            reUpload((medias: Media[]) => {
              this.update(medias)
            })
          }
        })
        return
      }
      if (props.disabled) {
        return false
      }
      reUpload()
    }

    return () => renderFormItem(props, slots,
      () => h('div', {
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
            round: true,
            size: 'xs',
            onClick: onDeleteClick
          }) : void 0
        )
    )
  }
})
