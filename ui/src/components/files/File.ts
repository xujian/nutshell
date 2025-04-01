import { PropType, defineComponent, h } from 'vue'
import { MakePropsType } from '../../utils'
import { getMediaType, MediaType, resolveFileName } from '../../types'
import { NsImage } from '../image'
import { useLayoutProps, useSizeProps } from '../../props'

export const fileProps = {
  id: {
    type: String,
  },
  name: {
    type: String,
    require: true,
  },
  type: {
    type: String as PropType<MediaType>
  },
  url: {
    type: String,
  },
  thumb: {
    type: String,
  },
  /**
   * 显示文件名
   */
  hasName: {
    type: Boolean,
    default: true,
  },
  deletable: {
    type: Boolean,
    default: false
  },
  downloadable: {
    type: Boolean,
    default: false
  },
  ...useSizeProps(),
  ...useLayoutProps(),
}

export type FileEmits = {
  preview: (id: string) => void
  delete: (id: string) => void
  download: (id: string) => void
}

const fileEmits: FileEmits = {
  preview: (id: string) => {
    return true
  },
  delete: (id: string) => {
    return true
  },
  download: (id: string) => {
    return true
  },
}

export type FileSlots = {
}

export type FileProps = MakePropsType<typeof fileProps, FileEmits>

/**
 * 文件 <ns-file>
 */
export const NsFile = defineComponent({
  name: 'NsFile',
  props: fileProps,
  emits: fileEmits,
  setup (props, { emit }) {
    const toolbar = () => h('div', {
        class: [
          'toolbar',
          'row',
          'justify-between',
          'align-center'
        ],
        onClick (ev: any) {
          ev.stopPropagation()
        }
      }, [
        h('i', { class: ['icon', 'icon-preview'], onClick: () => emit('preview', props.id!)}),
        props.deletable === true
          ? h('i', { class: ['icon', 'icon-delete'], onClick: () => emit('delete', props.id!)})
          : null,
        props.downloadable === true
          ? h('i', { class: ['icon', 'icon-download'], onClick: () => emit('download', props.id!)})
          : null
      ]),
      icon = () => {
        const type: MediaType = props.type || getMediaType(props.name!) || ''
        return h('div', {
            class: [
              'icon-item',
              'preview-item',
              `icon-type-${type}`
            ],
            'data-id': props.id,
            'data-url': props.url,
            'data-type': props.type,
            onClick: () => {
              emit('preview', props.id!)
            }
          }, toolbar())
        },
      thumb = () => h('div', {
        class: [
          'thumb-item',
        ],
        onClick: () => {
          emit('preview', props.id!)
        }
      }, [
        h(NsImage, {
          class: 'image preview-item',
          aspectRatio: 1,
          'data-id': props.id,
          'data-url': props.url,
          'data-type': props.type,
          src: props.thumb ?? props.url
        }),
        toolbar()
      ]),
      filename = () => {
        if (!props.hasName) return null
        const { base, ext} = resolveFileName(props.name!)
        return h('div', {
          class: [
            'filename',
            'row',
            'justify-center',
          ]
        }, [
            h('div', { class: 'base' }, h('div', {
              class: 'ellipsis'
            }, base)),
            h('div', { class: 'ext' }, `.${ext}`),
          ]
        )
      }

    return () => h('div', {
      class: [
        'ns-file',
        `size-${props.size}`,
        props.direction || 'column',
      ]
    }, [
      props.type === 'pdf' ? icon() : thumb(),
      filename()
    ])
  }
})
