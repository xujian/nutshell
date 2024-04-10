import { h, SetupContext } from 'vue'
import {
  Menu as AntdvMenu,
  MenuProps as AntdvMenuProps,
  ItemType as AntdvMenuItemType
} from 'ant-design-vue'
import { MenuItem, MenuProps } from '../../../../components'
import { buildDesignClasses, buildDesignStyles } from '../../../../props'
import { MenuInfo } from 'ant-design-vue/es/menu/src/interface'

export const Menu = (props: MenuProps, ctx: SetupContext) => {
  const classes = buildDesignClasses(props),
    style = buildDesignStyles(props)

  function transformItem(item: MenuItem): AntdvMenuItemType {
    return {
      key: item.value,
      label: item.label,
      popupClassName: ['ns-menu', ...classes].join(' '),
      ...(item.children
        ? {
            children: item.children.map(transformItem)
          }
        : {})
    }
  }

  const antdvItems: AntdvMenuProps['items'] = props.items?.map(transformItem)

  return h(AntdvMenu, {
    class: ['ns-menu', ...classes],
    selectable: false,
    style,
    items: antdvItems,
    onClick: (e: MenuInfo) => {
      ctx.emit('click', {
        key: e.key,
        item: e.item
      })
    }
  })
}
