import { h, SetupContext } from 'vue'
import { MenuProps } from '../../../../components'
import { UniDataItem } from '../../../../shared'

export const Menu = (props: MenuProps, ctx: Omit<SetupContext, 'expose'>) => {

  const icon = (item: UniDataItem) => {
    return item.icon
      ? h('img', {
          class: ['menu-item-icon'],
          src: item.icon
        })
      : null
  }

  const items = () => {
    return props.items?.map(item => h(NutCell, {
      title: item.label,
      isLink: true,
      desc: item.caption,
      onClick () {
        if (item.click) {
          item.click()
        } else if (item.link) {
          wx.navigateTo({
            url: item.link
          })
        }
      }
    }, {
      icon: icon(item)
    }))
  }

  return h(NutCellGroup, {
    class: 'ns-menu',
  }, items())
}
