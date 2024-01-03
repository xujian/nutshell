import Piscina from 'piscina'
import path from 'upath'
import inspector from 'inspector'
import * as os from 'os'
import fs from 'fs/promises'
import { rimraf } from 'rimraf'
import { mkdirp } from 'mkdirp'
import { fileURLToPath } from 'url'
import { components } from '@uxda/nutshell/api/components'
import { kebabCase } from './helpers/text.ts'
import { createVeturApi } from './vetur.ts'
import yargs from 'yargs'

const yar = yargs(process.argv.slice(2))
  .option('components', {
    type: 'array',
  })
  .option('skip-directives', {
    type: 'boolean',
  })
  .option('skip-composables', {
    type: 'boolean',
  })

const DIST = path.resolve('./dist')

const run = async () => {
  const argv = await yar.argv
  const filename = path.resolve('./src/worker.ts')
  const pool = new Piscina({
    filename,
    niceIncrement: 10,
    maxThreads: inspector.url() ? // 这是在干什么
      1
      : Math.max(
        1,
        Math.floor(
          Math.min(
            os.cpus().length / 2,
            os.freemem() / (1.1 * 1024 ** 3)
          )
        )
      )
  })

  rimraf.sync(DIST)
  await fs.mkdir(DIST)
  await mkdirp('./templates/tmp')
  const template = await fs.readFile('./templates/component.d.ts', 'utf-8')

  components.forEach(async component => {
    await fs.writeFile(`./templates/tmp/${component.name}.d.ts`,
      template.replaceAll('__component__', component.name)
        // .replaceAll('__name__', componentsInfo[component].from.replace('.mjs', '.js'))
        .replaceAll('__name__', 'components')
    )
  })
  const outPath = path.resolve('./dist/api')
  await mkdirp(outPath)

  const componentData = await Promise.all(
    components.map(async ({name}) => {
      console.log('===000===000===000===000', name)
      const data = await pool.run(name)
      console.log('===000===000===000===002', data)
      // const componentProps = stringifyProps(component?.props)

      const json = {
        displayName: name,
        fileName: kebabCase(name),
        ...data,
        // sass
      }
      await fs.writeFile(
        path.resolve(outPath, `${name}.json`),
        JSON.stringify(json, null, 2)
      )
      return json
    }).filter(Boolean)
  )

  // Composables
  // if (!argv.skipComposables) {
  //   const composables = await Promise.all((await generateComposableDataFromTypes()).map(async composable => {
  //     console.log(blue, composable.name, reset)
  //     const kebabName = kebabCase(composable.name)
  //     await addDescriptions(composable.name, composable.data, locales)
  //     return { fileName: kebabName, displayName: composable.name, ...composable }
  //   }))

  //   for (const { displayName, fileName, data } of composables) {
  //     await fs.writeFile(path.resolve(outPath, `${displayName}.json`), JSON.stringify({ displayName, fileName, ...data }, null, 2))
  //   }
  // }

  createVeturApi(componentData)
  await fs.mkdir(path.resolve('../ui/dist/json/'), { recursive: true})
  await fs.copyFile(path.resolve('./dist/tags.json'), path.resolve('../ui/dist/json/tags.json'))
}

run()
