import fs from 'fs'
import { kebabCase } from './helpers/text.ts'
// import type { }

type ComponentData = {
  props: Record<string, any>,
  events: Record<string ,any>,
  slots: Record<string, any>,
  exposed: Record<string, any>,
  displayName: string,
  fileName: string,
}

export function createVeturApi (componentData: ComponentData[]) {
  const tags = componentData.reduce((result, component) => {
    return {
      ...result,
      [component.fileName]: {
        attributes: Object.keys(component.props ?? {}).map(name => kebabCase(name)).sort(),
        description: ''
      }
    }
  }, {})

  const attributes = componentData.reduce((obj, component) => {
    const attrs = Object.entries(component.props ?? {}).reduce((curr, [name, prop]) => {
      curr[`${component.fileName}/${kebabCase(name)}`] = {
        type: prop.formatted,
        description: prop.description || '',
      }

      return curr
    }, {} as Record<string, { type: string, description: string }>)
    Object.assign(obj, attrs)
    return obj
  }, {})

  fs.writeFileSync('dist/tags.json', JSON.stringify(tags, null, 2))
  fs.writeFileSync('dist/attributes.json', JSON.stringify(attributes, null, 2))
}
