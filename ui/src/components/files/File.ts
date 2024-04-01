import { PropType, defineComponent, h } from 'vue'
import { MakePropsType } from '../../utils'

export type FileType =
  'pdf' | 'image' | 'video' | 'file'

export type File = {
  id: string,
  name: string,
  type: FileType,
  url: string,
  thumb: string,
}

export const fileProps = {
  id: {
    type: String,
  },
  name: {
    type: String,
    require: true,
  },
  type: {
    type: String as PropType<FileType>
  },
  url: {
    type: String,
  },
  thumb: {
    type: String,
  }
}

export type FileEmits = {
  preview: (id?: string) => void
  delete: (id?: string) => void
  download: (id?: string) => void
}

const fileEmits: FileEmits = {
  preview: (id?: string) => void 0,
  delete: (id?: string) => void 0,
  download: (id?: string) => void 0,
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

const extTypeMapping: Record<string, FileType> = {
  jpg: 'image',
  jpeg: 'image',
  pdf: 'pdf',
  png: 'image',
  mp4: 'video',
  mkv: 'video',
}

function getFileType (name: string): FileType {
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
        ]
      }, [
        h('i', { class: ['icon', 'icon-preview'], onClick: () => emit('preview', props.id)}),
        h('i', { class: ['icon', 'icon-delete'], onClick: () => emit('delete', props.id)}),
        h('i', { class: ['icon', 'icon-download'], onClick: () => emit('download', props.id)}),
      ]),
      icon = () => {
        const type: FileType = props.type || getFileType(props.name!) || ''
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
          console.log('===props.id', props.id)
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
