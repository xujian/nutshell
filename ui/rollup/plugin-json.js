import { parse, posix as path } from 'path'
import { fileURLToPath } from 'url'
import { simple as walk } from 'acorn-walk'
// import { properties } from '../src/components/index'

function fixWindowsPath (path) {
  return path.replace(/^[^:]+\\/, '\\').replace(/\\/g, '/')
}

export default function () {
  return {
    name: 'json',
    async buildEnd () {
      const components = Object.create(null)
      // const directives = []
      {
        const originModule = this.getModuleInfo(
          (await this.resolve('src/components/index.ts')).id
        )
        const parsed = this.parse(originModule.code)
        // console.log('---////-----///----///---//1/0', parsed)
        const components = parsed.body
          .filter(section =>
            section.type === 'VariableDeclaration'
          )
        console.log('---////-----///----///---///', components[0].declarations.init)
        // walk(originModule.ast, {
        //   ExportNamedDeclaration (node) {
        //     console.log('---////-----///----///---///', node.exported)
        //   }
        // })
        // await Promise.all(importedIds.map(async (id) => {
        //   // id: .../nutshell/ui/src/components/button/index.ts
        //   console.log('VVVVVVVVVVVVVVVVV---json.......id....', id)
        //   const moduleInfo = this.getModuleInfo(id)
        //   console.log('VVVVVVVVVVVVVVVVV---json.......moduleInfo....', Object.keys(moduleInfo), moduleInfo
        //   )
        //   walk(mouleInfo.ast, {
        //     ExportAllDeclaration (node) {
        //       console.log('VVVVVVVVVVVVVVVVV---json.......AST node....', Object.keys(node), node.source)
        //       // node.specifiers.forEach(({imported}) => {
        //       //   console.log('VVVVVVVVVVVVVVVVV---json.......AST node....', imported.name)
        //       //   components[imported.name] = importedFrom
        //       // })
        //       // node.declaration?.declarations.forEach()
        //     }
        //   })
        // }))
      }
      console.log('VVVVVVVVVVVVVVVVV---json.......rollup.....components', components)
      this.emitFile({
        type: 'asset',
        fileName: 'json/json.json',
        source: JSON.stringify({
          components: Object.fromEntries(
            Object.entries(components).map(entry => [entry[0], {
              from: entry[1],
              styles: [] // TODO
            }])
          )
        }, null, 2)
      })
      // this.emitFile({
      //   type: 'asset',
      //   fileName: 'json/props.json',
      //   source: JSON.stringify(properties, null, 2)
      // })
    }
  }
}
