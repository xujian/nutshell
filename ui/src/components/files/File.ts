import { PropType, defineComponent, h } from 'vue'
import { MakePropsType } from '../../utils'
import { MediaType } from '../../types'

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
  }
}

export type FileEmits = {
  preview: (id?: string) => void
  delete: (id?: string) => void
  download: (id?: string) => void
}

const fileEmits: FileEmits = {
  preview: (id?: string) => {
    return true
  },
  delete: (id?: string) => {
    return true
  },
  download: (id?: string) => {
    return true
  },
}

export type FileSlots = {
}

export type FileProps = MakePropsType<typeof fileProps, FileEmits>

export type FileName = {
  base: string,
  ext: string,
}

function resolveFileName (name: string): FileName {
  const splits = name.split('.'),
    ext = splits.pop() || '',
    base = splits.join('.')
    return {
      base,
      ext
    }
}

export const extTypeMapping: Record<string, MediaType> = {
  jpg: 'image',
  jpeg: 'image',
  pdf: 'pdf',
  png: 'image',
  mp4: 'video',
  mkv: 'video',
}

export function getMediaType (name: string): MediaType {
  const { base, ext } = resolveFileName(name)
  return extTypeMapping[ext] || 'file'
}

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
        h('i', { class: ['icon', 'icon-preview'], onClick: () => emit('preview', props.id)}),
        props.deletable === true
          ? h('i', { class: ['icon', 'icon-delete'], onClick: () => emit('delete', props.id)})
          : null,
        props.downloadable === true
          ? h('i', { class: ['icon', 'icon-download'], onClick: () => emit('download', props.id)})
          : null
      ]),
      icon = () => {
        const type: MediaType = props.type || getMediaType(props.name!) || ''
        return h('div', {
            class: [
              'icon-item',
              `icon-type-${type}`
            ]
          }, toolbar())
        },
      thumb = () => h('div', {
        class: [
          'thumb-item',
        ],
        onClick: () => {
          // console.log('===props.id', props.id)
          emit('preview', props.id)
        }
      }, [
        h('img', {
          class: 'image',
          'data-id': props.id,
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
      ]
    }, [
      props.type === 'pdf' ? icon() : thumb(),
      filename()
    ])
  }
})
