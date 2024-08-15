import { defineComponent, h, SetupContext } from 'vue'
import { uploadEmits, uploadProps, UploadProps } from '../../../../components'
import { marginProps } from '../../../../utils'
import { renderFormItem } from '../../utils'
import { getMediaType, Media } from '../../../../types/media'

export const Upload = defineComponent({
  name: 'NutuiUpload',
  props: uploadProps,
  emits: uploadEmits,
  setup: (props, { slots, emit }) => {

    const onClick = () => {
      const { tempFiles: [image]} = wx.chooseMedia({
        count: 1,
        mediaType: ['image'],
        soruceType: ['album', 'camera'],
        maxDuration: 30,
        camera: 'back',
      })
      console.log('===image', image)
      props.handler?.({
        path: image.path,
      }).then((result: Media) => {
        const uploaded = {
          ...result,
          type: getMediaType(result.name!)
        }
        props['onUpdate:modelValue']?.([
          ...props.modelValue || [],
          uploaded
        ])
        emit('complete', uploaded)
      })
    }

    return () => renderFormItem(props, slots,
      () => h('div', {
        class: [
          'ns-upload-button'
        ],
        onClick
      })
    )
  }
})
