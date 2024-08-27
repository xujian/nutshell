import { computed, defineComponent, h, Ref, ref, SetupContext } from 'vue'
import { uploadEmits, uploadProps, UploadProps } from '../../../../components'
import { renderFormItem } from '../../utils'
import { getMediaType, Media } from '../../../../types/media'

export const Upload = defineComponent({
  name: 'NutuiUpload',
  props: uploadProps,
  emits: uploadEmits,
  setup: (props, { slots, emit }) => {
    console.log(props, 'props')

    const result: Ref<Media[]> = ref(Array.isArray(props.modelValue) ? props.modelValue : [])

    const getStyle = () => {
      const [m] = result.value
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
            console.log('===ns-uxxxp[load', media)
            if (media) {
              result.value.push(media)
              props['onUpdate:modelValue']?.(result.value)
            }
            props['onUpdate:modelValue']?.(result.value)
          }
        }
      })
    }

    return () => renderFormItem(props, slots,
      () => h('div', {
        class: [
          'ns-upload-button'
        ],
        style: getStyle(),
        onClick
      })
    )
  }
})
