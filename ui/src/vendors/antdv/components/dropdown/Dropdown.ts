import { defineComponent, h } from 'vue'
import { type DropdownProps, dropdownProps, NsMenu } from '../../../../components'
import { DropdownButton as AntdvDropdownButton, Menu as AntdvMenu, MenuItem as AntdvMenuItem } from 'ant-design-vue'

export const Dropdown = defineComponent({
  name: 'AntdvDropdownVendor',
  props: dropdownProps,
  setup (props, ctx) {
    const classes =
      props.color ? [`color-${props.color}`] : []
    const { slots, emit } = ctx

    return () => h(AntdvDropdownButton, {
      class: ['ns-dropdown', ...classes],
      width: props.width,
      height: props.height,
      arrow: true,
    }, {
      default: () => props.label,
      overlay: () => h(NsMenu, {
        class: 'ns-dropdown-menu',
        color: props.color,
        onClick: (item: any) => {
          emit('change', item)
        },
        items: props.items,
      })
    })
  }
})
