import { PropType, defineComponent, h, onMounted, ref } from 'vue'
import Viewer from 'viewerjs'
import { MakePropsType } from '../../utils'
import { NsFile, File } from './File'
import 'viewerjs/dist/viewer.min.css'

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

    const me = ref<HTMLElement>(),
      viewer = ref()

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
        // viewer.value.view()
      },
      ...item,
    })

    const items = props.items || [],
      slots = items.map(item)

    const initViewer = () => {
      viewer.value = new Viewer(me.value!, {
        container: document.body,
        navbar: false,
        toolbar: false,
        zoomable: false,
        url (image: HTMLImageElement) {
          // 查原图的 url
          // 参数 image 是缩略图
          const id = image.getAttribute('data-id')
          if (!id) return image.src
          const item = items.find((f: any) => f.id === id)
          if (!item) return image.src
          return item.url
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
    }, slots)
  }
})
