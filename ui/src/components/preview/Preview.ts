import { PropType, defineComponent, h, shallowRef, watch } from 'vue'
import { MakePropsType } from '../../utils'
import { Media } from '../../types'
import { NsButton } from '../button'
import { PreviewButtonClickCallback } from '../../services/drawer'
import { NsPage, NsPageContent, NsPageHeader } from '../page'
import { NsRow } from '../flex'

export const previewProps = {
  /**
   * 预览的图片或视频
   */
  media: {
    type: [String, Object, Array] as PropType<string | Media | string[] | Media[]>,
    required: true
  },
  /**
   * 按钮上的文字
   */
  button: {
    type: String,
  },
  /**
   * 单击按钮的处理过程
   */
  onButtonClick: {
    type: Function as PropType<PreviewButtonClickCallback>
  },

}

export type PreviewEmits = {
  close (): void
}

const previewEmits: PreviewEmits = {
  close: () => {}
}

export type PreviewSlots = {
  default: never,
}

export type PreviewProps = MakePropsType<typeof previewProps, PreviewEmits>

/**
 * 图像预览 组件 <ns-preview>
 */
export const NsPreview = defineComponent({
  name: 'NsPreview',
  props: previewProps,
  emits: previewEmits,
  setup (props, { emit }) {

    const getMedias: () => Media[] = () => {
      const ms = Array.isArray(props.media)
        ? props.media
        : [props.media]
      const array = ms.map(item => {
        return typeof item === 'string'
          ? {
              url: props.media
            } as Media
          : item!
      })
      return array
    }

    const medias = shallowRef<Media[]>(getMedias())

    const image = () => h('image', {
      class: [
        'image'
      ],
      width: '100vw',
      mode: 'widthFix',
      src: medias.value?.[0]?.url
    })

    // 用于更新图片 // 重新上传
    const me = {
      update (value: Media[]) {
        medias.value = value
      }
    }

    return () => h(NsPage, {
        class: [
          'ns-preview',
        ]
      },
      [
        h(NsPageHeader, {
          fill: '#00000000',
          hasBackButton: true,
          onClose: () => emit('close')
        }),
        h(NsPageContent, {
          class: [
            'column', 'align-center', 'justify-center'
          ]
        },
          [h('div', {
              class: [
                'media',
              ]
            },
            image()
          ),
          h(NsRow, {
              align: 'center',
              class: [
                'footer'
              ]
            },
            props.button ? h(NsButton, {
                label: props.button,
                color: '#fff',
                variant: 'outlined',
                onClick: (e) => {
                  props.onButtonClick?.call(me)
                  e.stopImmediatePropagation()
                  e.preventDefault()
                }
              })
            : void 0
          )
        ]
        )
      ]
    )
  }
})
