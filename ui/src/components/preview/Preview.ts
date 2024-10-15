import { PropType, defineComponent, h, shallowRef, watch } from 'vue'
import { MakePropsType } from '../../utils'
import { Media } from '../../types'
import { NsButton } from '../button'
import { PreviewButtonClickCallback } from '../../services/drawer'
import { NsPage, NsPageContent, NsPageHeader } from '../page'
import { NsRow } from '../flex'

/**
 * 使用场景
 * 1. circle 用户头像
 * 2. normal 一般图片
 */
export type PreviewMode = 'circle' | 'normal'

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
  mode: {
    type: String as PropType<PreviewMode>,
    default: 'normal'
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
  /**
   * 关闭
   */
  close: () => true
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

    const image = () => props.mode === 'circle'
      // object-fit 不能用
      ? h('div', {
          class: [
            'image',
            'cover'
          ],
          style: {
            backgroundImage: `url(${medias.value?.[0]?.url})`
          }
        })
      : h('img', {
          class: [
            'image'
          ],
          mode: 'widthFix',
          src: medias.value?.[0]?.url
        })

    // 用于更新图片 // 重新上传
    const me = {
      update (value: Media[]) {
        medias.value = value
      }
    }

    const pageHeader = () => h(NsPageHeader, {
      fill: '#000',
      hasBackButton: true,
      onBack: () => {
        emit('close')
      }
    })

    return () => h(NsPage, {
        minimal: true, // NsPage 的简化版 没有 drawer/sheet/dialog
        dark: true,
        fill: '#000',
        class: [
          'ns-preview',
        ]
      },
      [
        pageHeader(),
        h(NsPageContent, {
            class: [
              'column', 'align-center', 'justify-center'
            ]
          },
          {
            default: [
              h('div', {
                  class: [
                    'media',
                    'flex',
                    'align-center',
                    'justify-center',
                    `mode-${props.mode}`
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
                    onClick: (e: any) => {
                      props.onButtonClick?.call(me)
                      e.stopImmediatePropagation()
                      e.preventDefault()
                      props.onClose
                    }
                  })
                : void 0)
            ]
          }
        )
      ]
    )
  }
})
