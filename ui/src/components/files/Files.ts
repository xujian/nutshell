import { PropType, defineComponent, h, onMounted, ref } from 'vue'
import Viewer from 'viewerjs'
import { MakePropsType } from '../../utils'
import { NsFile } from './File'
import { Media } from '../../types'
import 'viewerjs/dist/viewer.min.css'

export const filesProps = {
  items: {
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
    let viewer: Viewer | null = null

    const getRealUrlFromId = (id?: string) => {
      const item = props.items.find((f: any) => f.id === id)
      return item!.url
    }

    const item = (item: Media, index: number) => h(NsFile, {
      class: [
        'files-item',
        `files-items-type-${item.type}`,
        'm-xs'
      ],
      key: index,
      deletable: props.deletable,
      downloadable: props.downloadable,
      onDelete (id?: string) {
        console.log('===NsFile onDelete id', id)
      },
      onPreview (id?: string) {
        const item = props.items.find(x => x.id === id)
        if (!item) return
        if (item.type === 'file') {
          const index = props.items
            .filter(x => x.type === 'image')
            .findIndex(x => x.id === id)
          viewer && viewer.view(index)
        } else {
          const url = getRealUrlFromId(id)
          window.open(url)
        }
      },
      ...item,
    })

    const initViewer = () => {
      viewer = new Viewer(me.value!, {
        container: document.body,
        navbar: false,
        toolbar: false,
        zoomable: false,
        transition: false,
        url: (img: HTMLElement) => {
          const id = img.getAttribute('data-id') as string
          return getRealUrlFromId(id)
        }
      })
    }

    onMounted(initViewer)

    return () => h('div', {
      ref: me,
      class: [
        'ns-files',
        'row',
        'justify-start'
      ]
    },
    {
      default: () => props.items.map(item)
    })
  }
})
