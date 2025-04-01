import { PropType, computed, defineComponent, h, onMounted, ref } from 'vue'
import { MakePropsType } from '../../utils'
import { NsFile } from './File'
import { getMediaType, Media } from '../../types'

export const filesProps = {
  data: {
    type: Array as PropType<Media[]>,
    default: []
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

    const me = ref<HTMLElement>()

    const getRealUrlFromId = (id?: string) => {
      const item = props.data.find((f: any) => f.id === id)
      return item!.url
    }

    const items = computed<Media[]>(() =>
      props.data.map(item => ({
        ...item,
        type: item.type
          || getMediaType(item.name!)
      }))
    )

    const item = (item: Media, index: number) => h(NsFile, {
      class: [
        'files-item',
        `type-${item.type}`,
        'm-xs'
      ],
      key: index,
      deletable: props.deletable,
      downloadable: props.downloadable,
      onDelete (id: string) {
        ctx.emit('delete', id)
      },
      onDownload (id: string) {
        ctx.emit('download', id)
      },
      onPreview (id: string) {
       
      },
      ...item,
    })

    return () => h('div', {
      ref: me,
      class: [
        'ns-files',
        'row',
        'justify-start'
      ]
    },
    items.value.map(item))
  }
})
