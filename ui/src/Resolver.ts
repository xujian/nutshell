import { ComponentResolver } from 'unplugin-vue-components/types'

type OptionsType = {
  prefix?: string
  packageName?: string
}

// ns组件自动按需引入
export function NutshellResolver(options: OptionsType = {}): ComponentResolver {
  const originPrefix = options.prefix ?? 'ns'

  return {
    type: 'component',
    resolve: (name) => {
      const [compName, prefix] = [
        name.slice(originPrefix.length),
        name.slice(0, originPrefix.length),
      ]
      if (prefix.toLowerCase() === originPrefix && compName) {
        const { packageName = '@uxda/nutshell' } = options
        const path = `${packageName}`
        // console.log(prefix, compName, path)
        return {
          name: prefix + compName,
          from: path,
          // sideEffects: getSideEffects(compName, options),
        }
      }
    },
  }
}
