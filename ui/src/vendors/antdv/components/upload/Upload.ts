import { computed, defineComponent, getCurrentInstance, h, onBeforeUnmount, onMounted, ref, watch } from 'vue'
import Viewer from 'viewerjs'
import { Upload as AntdvUpload, UploadChangeParam, UploadFile } from 'ant-design-vue'
import { NsButton, NsFile, uploadEmits, uploadProps } from '../../../../components'
import 'viewerjs/dist/viewer.min.css'
import { useNutshell } from '../../../../framework'
import { compressImage } from '../../../../utils'
import { Media } from '../../../../types'

export const Upload = defineComponent({
  name: 'AntdvUploadVendor',
  props: uploadProps,
  emits: uploadEmits,
  setup (props, { slots, emit }) {

    const $n = useNutshell()

    const vm = getCurrentInstance() as any,
      me = ref(),
      viewer = ref()

    const fileList = computed(() => {
      const files = props.modelValue || []
      return files.map((v: any) => ({
          uid: v.id,
          name: v.name,
          status: v.status,
          url: v.url,
          thumb: v.thumb,
        }))
      }),
      // 最多文件数
      // maxFiles === 1 时为单文件模式
      maxFiles = props.maxFiles ?? 0,
      single = maxFiles === 1,
      /**
       * 单一文件模式时 已经上传过
       * 上传按钮与文件内容合并
       */
      单一模式并且已上传 = single && fileList.value.length > 0

    const label = props.label ||
      单一模式并且已上传
        ? '重新上传'
        : '上传',
      button = () => props.hasFiles === false
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
          // 单一模式并且已上传
          // 在上传按钮直接预览
          // 不显示 file-list
          单一模式并且已上传
            ? h(NsFile, {
                class: 'thumb',
                hasName: false,
                ...fileList.value[0]
              })
            : null,
          h('div', { class: [ 'label',]}, label),
          props.caption
            ? h('div', {class: 'caption'}, props.caption)
            : null
        ])

    const defaultSlot = slots.default || button,
      itemRender = ({file, actions}: {file: any, actions: any}) => {
        console.log('===itemRender', file, actions)
        const id = file.uid,
          item = props.modelValue?.find((x: any) => x.id === id)
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
          const item = fileList.value.find((f: any) => f.uid === id)
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
        showUploadList: props.hasFiles || false,
        name: props.name,
        accept: props.accept,
        listType,
        fileList: fileList.value,
        multiple: props.multiple ?? false,
        maxCount: maxFiles,
        customRequest: (options) => {
        },
        // beforeUpload (file) {
        //   // 留待以后扩充
        //   if (!props.beforeUpload) return false
        //   else {
        //     return props.beforeUpload({
        //       id: file.uid,
        //       name: file.name,
        //       type: getFileType(file.name)
        //     })
        //   }
        // },
        onChange: (e: UploadChangeParam<UploadFile>) => {
          const maxFileSize = props.maxFileSize ?? 30
          if (e.file?.size && e.file.size > maxFileSize * 1024 * 1024) {
            $n.toast('单个文件最大限制为30M', {})
            return false
          }
          const file = e.file.originFileObj!
          compressImage(file,
            {
              sizeLimit: 2,
              maxHeight: 2000,
              maxWidth: 2000,
            },
            () => {
              props.handler?.({
                blob: file
              }).then((result: Media) => {
                console.log('===xxxxUpload.ts upload complete', result)
                props['onUpdate:modelValue']?.([
                  ...props.modelValue || [],
                  result
                ])
                emit('complete', result)
              })
            }
          )
          return false
        }
      }, {
        default: defaultSlot,
        itemRender: props.maxFiles === 1
          ? () => null
          : itemRender,
      })

    vm.render = () => h('div', {
      ref: me,
      class: [
        // 单一上传模式时 追加一个特殊样式
        ...maxFiles === 1 ? ['single'] : [],
      ],
    }, [
      trunk(),
      slots.extra?.()
    ])

    return {
    }
  } // setup
})

