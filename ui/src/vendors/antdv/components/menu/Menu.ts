import { h, SetupContext } from 'vue'
import { Menu as AntdvMenu, MenuProps as AntdvMenuProps } from 'ant-design-vue'
import { MenuProps } from '../../../../components'

export const Menu = (props: MenuProps, ctx: SetupContext) => {

  const antdvItems: AntdvMenuProps['items'] = props.items?.map(i => ({
    key: i.value,
    label: i.label,
  }))

  return h(AntdvMenu, {
    class: 'ns-menu',
    items: antdvItems,
  }, () => '')
}
