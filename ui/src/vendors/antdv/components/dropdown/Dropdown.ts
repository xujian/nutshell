import { defineComponent, h } from 'vue'
import { type DropdownProps, dropdownProps, NsMenu } from '../../../../components'
import { DropdownButton as AntdvDropdownButton, Menu as AntdvMenu, MenuItem as AntdvMenuItem } from 'ant-design-vue'
import { MarginProps } from '../../../../utils'

export const Dropdown = defineComponent({
  name: 'AntdvDropdownVendor',
  props: dropdownProps,
  setup (props: DropdownProps & MarginProps, ctx) {
    const { slots, emit } = ctx

    return () => h(AntdvDropdownButton, {
      class: [
      ],
      width: props.width,
      height: props.height,
      arrow: true,
      overlayClassName: 'ns-dropdown-menu'
    }, {
      default: () => props.label,
      overlay: () => h(NsMenu, {
        class: props.class,
        onClick: (item: any) => {
          emit('change', item)
        },
        items: props.items,
      }),
      ...slots.icon ? { icon: slots.icon} : {},
    })
  }
})
