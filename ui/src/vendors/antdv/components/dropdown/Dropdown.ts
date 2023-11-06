import { defineComponent, h } from 'vue'
import { DropdownProps, dropdownProps } from '../../../../components/dropdown'
import { DropdownButton as AntdvDropdownButton, Menu as AntdvMenu, MenuItem as AntdvMenuItem } from 'ant-design-vue'

export const Dropdown = defineComponent({
  name: 'AntdvDropdownVendor',
  props: dropdownProps,
  setup (props, ctx) {
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
    }, {
      default: () => props.label,
      overlay: () => h(AntdvMenu, {
        class: 'ns-dropdown',
        onClick: (item) => {
          console.log('---------NsDropdown, menu onClick', item)
          emit('change', item)
        }
      }, () => props?.items?.map(item => h(AntdvMenuItem, {
          key: item.value,
        }, () => item.label)
      ))
    })
  }
})
