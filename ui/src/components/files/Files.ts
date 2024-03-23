import { PropType, defineComponent, h } from 'vue'
import { MakePropsType } from '../../utils'

export type FileType =
  'pdf' | 'png' | 'jpg' | 'video' | 'file'

export type FilesItem = {
  id: string,
  name: string,
  type: FileType,
  url: string,
  thumb: string,
}

export const filesProps = {
  items: {
    type: Array as PropType<FilesItem[]>
  }
}

export type FilesEmits = {
}

const filesEmits: FilesEmits = {
}

export type FilesSlots = {
  default: never,
}

export type FilesProps = MakePropsType<typeof filesProps, FilesEmits>

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
  jpg: 'jpg',
  jpeg: 'jpg',
  pdf: 'pdf',
  png: 'png',
  mp4: 'video',
  mkv: 'video',
}

function getFileType (name: string): FileType {
  const { base, ext } = resolveFileName(name)
  return extTypeMapping[ext] || 'file'
}

/**
 * 文件表 <ns-files>
 */
export const NsFiles = defineComponent({
  name: 'NsFiles',
  props: filesProps,
  emits: filesEmits,
  setup (props, ctx) {
    const icon = (item: FilesItem) => {
      const type: FileType = getFileType(item.name)
      return h('div', {
          class: [
            'icon',
            `icon-type-${type}`
          ]
        })
      },
      filename = (item: FilesItem) => {
        const { base, ext} = resolveFileName(item.name)
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
      },
      item = (item: FilesItem) => h('div', {
          class: [
            'files-item',
            `files-items-type-${item.type}`,
            'm-sm'
          ]
        }, [
          icon(item),
          filename(item)
        ])

    const items = props.items || [],
      slots = items.map(item)

    return () => h('div', {
      class: [
        'ns-files',
        'row',
        'justify-start'
      ]
    }, slots)
  }
})
