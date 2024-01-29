import dotenv from 'dotenv'
import chalk from 'chalk'
import * as FigmaExport from '@figma-export/types'
import * as figmaExport from '@figma-export/core'
import outputComponentsAsSvg from '@figma-export/output-components-as-svg'

import config, { Config } from '../config'

dotenv.config()

console.log('从 Figma 导出图标...')

export type FigmaFrame = {
  name: string,
}

if (!process.env.FIGMA_TOKEN) {
  console.error(
    chalk.red('FIGMA_TOKEN 没有设置')
  )
}

async function exportIcons (
  config: Config
): Promise<FigmaExport.PageNode[]> {
  const transformers: FigmaExport.StringTransformer[] = []
  const outputter = outputComponentsAsSvg({
    output: config.dest,
    getBasename (options: FigmaExport.ComponentOutputterParamOption) {
      return `${options.componentName}.svg`
    },
    getDirname: () => ''
  })
  let result: FigmaExport.PageNode[] = []
  await figmaExport.components({
      fileId: config.figmaFile.id,
      concurrency: config.concurrency,
      token: process.env.FIGMA_TOKEN || '',
      onlyFromPages: [config.figmaFile.page],
      transformers,
      outputters: [outputter]
    }).then(async (nodes: FigmaExport.PageNode[]) => {
      result = nodes
    }).catch((err: Error) => {
      console.error('导出错误:', err)
    })
  return result
}

async function run () {
  const nodes = exportIcons(config)
  console.log('===nodes', nodes)
}

run()
