import { defineComponent, h } from 'vue'
import { DropdownProps, dropdownProps } from '../../../../components/dropdown'
import { DropdownButton as AntdvDropdownButton, Menu as AntdvMenu, MenuItem as AntdvMenuItem } from 'ant-design-vue'

export const Dropdown = defineComponent({
  name: 'AntdvDropdownProvider',
  props: dropdownProps,
  setup (props: DialogProps, ctx) {
    const classes = [
      'ns-dropdown',
    ].join(' ')
    const { slots, emit } = ctx

    return () => h(AntdvDropdownButton, {
      class: classes,
      overlayClassName: classes,
      width: props.width,
      height: props.height,
      arrow: true,
      'onUpdate:open': (value: boolean) => {
        console.log('antdv modal.......onUpdate:open', value, Object.keys(props), props['onUpdate:modelValue'])
        props['onUpdate:modelValue']?.(value)
      },
    }, {
      default: () => props.label,
      overlay: () => h(AntdvMenu, {
        class: 'ns-dropdown'
        }, () => props.items.map(item => h(AntdvMenuItem, {
            key: item.value,
          }, item.label)
        )
      )
    })
  }
})
