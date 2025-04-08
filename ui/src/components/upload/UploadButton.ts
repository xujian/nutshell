import { defineComponent, h } from 'vue'
import { Media } from '../../types'
import { useUploadButtonProps } from './Upload'

export const NsUploadButton = defineComponent({
  name: 'NsUploadButton',
  props: useUploadButtonProps(),
  setup(props, { emit }) {

    const onClick = (callback?: (medias: Media[]) => void) => {
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
          }
        }
      })
    }

    return () => h('div', {
      class: [
        'ns-upload-button',
      ],
      onClick
    })
  }
})
