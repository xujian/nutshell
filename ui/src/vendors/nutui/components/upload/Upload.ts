import { computed, defineComponent, h, Ref, ref, SetupContext } from 'vue'
import { uploadEmits, uploadProps, UploadProps } from '../../../../components'
import { renderFormItem } from '../../utils'
import { getMediaType, Media } from '../../../../types/media'

export const Upload = defineComponent({
  name: 'NutuiUpload',
  props: uploadProps,
  emits: uploadEmits,
  setup: (props, { slots, emit }) => {

    const getStyle = () => {
      const [m] = props.modelValue || []
      return m ? {
        backgroundImage: `url(${m.thumb || m.url})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
      }: {}
    }

    const onClick = () => {
      wx.chooseMedia({
        count: 1,
        mediaType: ['image'],
        soruceType: ['album', 'camera'],
        maxDuration: 30,
        camera: 'back',
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
              props['onUpdate:modelValue']?.(medias)
            }
            props['onUpdate:modelValue']?.(medias)
          }
        }
      })
    }

    return () => renderFormItem(props, slots,
      () => h('div', {
        class: [
          'ns-upload-button',
          ...props.modelValue?.length ? ['uploaded'] : ['empty']
        ],
        style: getStyle(),
        onClick
      })
    )
  }
})
