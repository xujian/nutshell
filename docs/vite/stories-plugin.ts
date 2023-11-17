import { fileURLToPath } from 'url'
import type { Plugin } from 'vite'
import fs from 'fs/promises'
import path from 'path'

const ID = 'virtual:stories'

export default function StoriesPlugin (): Plugin {
  return {
    name: 'stories',
    resolveId (source) {
      if (!source.startsWith('virtual:stories')) return
      const [, dir] = source.split('/')
      return dir ? `${ID}/${dir}` : ID
    },
    async load (id) {
      if (!id.startsWith(ID)) return
      const storiesDir = fileURLToPath(
        new URL(
          '../src/stories/',
          import.meta.url
        )
      )
      if (id === ID) {
        const dirs = (await fs.readdir(storiesDir, {encoding: 'utf8'}))
          .map(dir => `  '${dir}': () => import('virtual:stories/${dir}')`)
          .join(',\n')
        const code = [
          `const dirs = {`,
          `${dirs}`,
          `}`,
          `export async function getStory (name) {`,
          `  const [dir, file] = name.split('/')`,
          `  const imported = await dirs[dir]()`,
          `  return imported.default[file.replace(/\\.vue$/, '')]`,
          `}`
        ].join('\n')
        return code
      } else {
        // <story file="button/basic.vue" />
        // virtual:stories/button.basic.vue
        const [, dir] = id.split('/')
        // 遍历 stories 目录
        // 获取全体 story vue 文件
        const { imports, files } = (await fs.readdir(
            path.join(storiesDir, dir), 'utf8'
          ))
          .reduce<{imports: string[], files: string[]}>((acc, file, i) => {
              acc.imports.push(`import __${i} from '/src/stories/${dir}/${file}'`)
              acc.imports.push(`import __${i}_raw from '/src/stories/${dir}/${file}?raw'`)
              acc.files.push([
                  `  '${file.split('.vue')[0]}': {`,
                  `    component: __${i},`,
                  `    source: __${i}_raw,`,
                  '  }'
                ].join('\n')
              )
              return acc
            }, { imports: [], files: []}
          )
        const code = [
            `${imports.join('\n')}`,
            `export default {`,
            `  ${files.join(',\n')}`,
            `}`
          ].join('\n')
        return { code }
      }
    }
  }
}