import { h, SetupContext } from 'vue'
import { Upload as AntdvUpload } from 'ant-design-vue'
import { NsButton, NsFile, UploadProps } from '../../../../components'

export const Upload = (props: UploadProps, { slots }: SetupContext) => {

  const fileList = props.modelValue.map(v => ({
    uid: v.id,
    name: v.name,
    status: v.status,
    url: v.url
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
        ...item
      })
    }

  // 根据 display 和 hasFiles 参数控制 listType
  const listType = props.display !== 'list'
    ? props.hasFiles === false
      ? 'text'
      : 'picture-card'
    : 'text'

  return h(AntdvUpload, {
    class: 'ns-upload',
    showUploadList: props.hasFiles,
    listType,
    fileList,
  }, {
    default: () => defaultSlot,
    itemRender,
  })
}
// + import => ./index.ts, ../components.ts
