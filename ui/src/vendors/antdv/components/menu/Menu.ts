import { h, SetupContext } from 'vue'
import { Menu as AntdvMenu, MenuProps as AntdvMenuProps, ItemType as AntdvMenuItemType } from 'ant-design-vue'
import { MenuItem, MenuProps } from '../../../../components'

export const Menu = (props: MenuProps, ctx: SetupContext) => {

  function transformItem (item: MenuItem): AntdvMenuItemType {
    return {
      key: item.value,
      label: item.label,
      popupClassName: 'ns-menu',
      ...item.children
        ? {
            children: item.children.map(transformItem)
          }
        : {}
    }
  }

  const antdvItems: AntdvMenuProps['items'] = props.items?.map(transformItem)

  return h(AntdvMenu, {
    class: 'ns-menu',
    items: antdvItems,
  })
}
