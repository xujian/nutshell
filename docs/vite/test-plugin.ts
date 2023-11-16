import type { Plugin } from 'vite'

export default function TestPlugin (): Plugin {
  const virtualModuleId = 'virtual:test'
  const resolvedVirtualModuleId = '\0' + virtualModuleId

  return {
    name: 'test-plugin',
    resolveId (id: string) {
      console.log('/---/---/---/---/resolveId', id)
      if (id === virtualModuleId) {
        return resolvedVirtualModuleId
      }
    },
    load (id: string) {
      console.log('/---/---/---/---/load', id   )
      if (id === resolvedVirtualModuleId) {
        return `export const test = 'from virtual module'`
      }
    }
  }
}