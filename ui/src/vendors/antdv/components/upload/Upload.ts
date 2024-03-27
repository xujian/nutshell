import { defineComponent, h, onBeforeUnmount, onMounted, ref } from 'vue'
import Viewer from 'viewerjs'
import { Upload as AntdvUpload } from 'ant-design-vue'
import { NsButton, NsFile, uploadEmits, uploadProps, UploadEmits, UploadProps } from '../../../../components'
import 'viewerjs/dist/viewer.min.css'

export const Upload = defineComponent<UploadProps, UploadEmits>(
  (props, { slots }) => {

    const me = ref(),
      viewer = ref()

    const fileList = props.modelValue.map(v => ({
      uid: v.id,
      name: v.name,
      status: v.status,
      url: v.url,
      thumb: v.thumb,
    }))

    const label = props.label || '上传',
      button = props.hasFiles === false
      ? h(NsButton, {
            label,
            color: 'primary',
          })
      : h('div', {
          class: [
            'upload-button',
            'relative',
            'row',
            'align-center',
            'justify-center'
          ]
        }, [
          h('div', { class: [
            'label',
          ]}, label),
          props.caption ? h('div', {class: 'caption'}, props.caption) : null
        ])

    const defaultSlot = slots.default || button,
      itemRender = ({file, actions}) => {
        const id = file.uid,
          item = props.modelValue.find(x => x.id === id)
        return h(NsFile, {
          ...item,
          onPreview (id?: string) {
            // viewer.value.view()
          },
        })
      }

    // 根据 display 和 hasFiles 参数控制 listType
    const listType = props.display !== 'list'
      ? props.hasFiles === false
        ? 'text'
        : 'picture-card'
      : 'text'

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
          const item = fileList.find((f: any) => f.uid === id)
          if (!item) return image.src
          return item.url
        }
      })
    }

    onMounted(initViewer)
    onBeforeUnmount(() => {
      viewer.value.destroy()
    })

    const trunk = () => h(AntdvUpload, {
        showUploadList: props.hasFiles,
        listType,
        fileList,
      }, {
        default: () => defaultSlot,
        itemRender,
      })

    return () => h('div', {
      ref: me,
      class: 'ns-upload',
    }, trunk())
  },
  {
    name: 'AntdvUploadVendor',
    // @ts-ignore
    props: uploadProps,
    emits: uploadEmits,
  }
)

