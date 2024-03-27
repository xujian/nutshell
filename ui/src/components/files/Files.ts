import { PropType, defineComponent, h } from 'vue'
import { MakePropsType } from '../../utils'
import { NsFile, File } from './File'

export const filesProps = {
  items: {
    type: Array as PropType<File[]>
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

/**
 * 文件表 <ns-files>
 */
export const NsFiles = defineComponent({
  name: 'NsFiles',
  props: filesProps,
  emits: filesEmits,
  setup (props, ctx) {
    const item = (item: File) => h(NsFile, {
      class: [
        'files-item',
        `files-items-type-${item.type}`,
        'm-xs'
      ],
      onDelete (id?: string) {
        console.log('===NsFile onDelete id', id)
      },
      onPreview (id?: string) {
        console.log('===NsFile onPreview id', id)
      },
      ...item,
    })

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
