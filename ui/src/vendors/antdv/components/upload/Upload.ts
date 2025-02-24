import { computed, defineComponent, getCurrentInstance, h, nextTick, ref } from 'vue'
import { Upload as AntdvUpload, UploadChangeParam, UploadFile } from 'ant-design-vue'
import { NsButton, NsFile, uploadEmits, uploadProps } from '../../../../components'
import { useNutshell } from '../../../../types'
import { compressImage } from '../../../../utils'
import { getMediaType, Media } from '../../../../types'
import { usePreview } from '../../../../composables'

export const Upload = defineComponent({
  name: 'AntdvUploadVendor',
  props: uploadProps,
  emits: uploadEmits,
  setup (props, { slots, emit }) {

    const $n = useNutshell()

    const vm = getCurrentInstance() as any,
      me = ref(),
      { preview, update } = usePreview(me)

    const fileList = computed(() => {
      const files = props.modelValue || []
      return files.map((v: any) => ({
          uid: v.id,
          type: v.type,
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
                ...fileList.value[0],
              })
            : null,
          h('div', { class: [ 'label',]}, label),
          props.caption
            ? h('div', {class: 'caption'}, props.caption)
            : null
        ])

      const getRealUrlFromId = (id?: string) => {
        const item = props.modelValue?.find((f: any) => f.id === id)
        return item!.url
      }

    const defaultSlot = slots.default || button,
      itemRender = ({file, actions}: {file: any, actions: any}) => {
        // console.log('===itemRender', file, actions)
        const id = file.uid,
          item = props.modelValue?.find((x: any) => x.id === id)
        return h(NsFile, {
          ...item,
          deletable: true,
          downloadable: true,
          onPreview (id: string) {
            preview(id)
          },
          onDelete (id: string) {
            $n.confirm('确定要删除吗?', () => {
              const value = [...(props.modelValue || [])],
                index = value.findIndex(x => x.id === id)
              if (index !== -1) {
                value.splice(index, 1)
                props['onUpdate:modelValue']?.(value)
                emit('delete', id)
              }
            }, {
              centered: true,
              classes: ['nut-dialog-confirm']
            })
          },
          onDownload (id: string) {
            emit('download', id)
          }
        })
      }

    // 根据 display 和 hasFiles 参数控制 listType
    const listType = props.display !== 'list'
      ? props.hasFiles === false
        ? 'text'
        : 'picture-card'
      : 'text'

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
                const uploaded = {
                  ...result,
                  type: getMediaType(result.name!)
                }
                props['onUpdate:modelValue']?.([
                  ...props.modelValue || [],
                  uploaded
                ])
                emit('complete', uploaded)
                nextTick(update)
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

