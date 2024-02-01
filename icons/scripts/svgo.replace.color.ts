import type { CustomPlugin } from 'svgo'
import { IconColorTheme } from './figma'
import config from '../config'

function makePrimaryReplacePlugin (theme: IconColorTheme) {
  const defaultPrimary = config.replace.default.primary
  const name = 'SVGOPrimaryReplacePlugin',
    type = 'visitor',
    fn = () => ({
      root: {
        enter: (node) => {
        },
        exit: (node) => {
        },
      },
      element: {
        enter: (node, parentNode) => {
          if (node.attributes.stroke == defaultPrimary) {
            node.attributes.stroke = theme.primary
          }
          if (node.attributes.fill == defaultPrimary) {
            node.attributes.fill = theme.primary
          }
        }
      }
    })

  /**
   * 将图标的主色替换为多套
   */
  const plugin: CustomPlugin = {
    name,
    // @ts-ignore
    type,
    fn
  }

  return plugin
}

export default makePrimaryReplacePlugin
