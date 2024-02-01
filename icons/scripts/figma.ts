import dotenv from 'dotenv'
import chalk from 'chalk'
import * as FigmaExport from '@figma-export/types'
import * as figmaExport from '@figma-export/core'
import outputComponentsAsSvg from '@figma-export/output-components-as-svg'
import transformSvgWithSvgo from '@figma-export/transform-svg-with-svgo'
import { optimize } from 'svgo'
import { resolve } from 'path'
import fs from 'fs'
import makePrimaryReplacePlugin from './svgo.replace.color'
import config, { type Config } from '../config'

dotenv.config()

console.log('从 Figma 导出图标...')

export type IconColorTheme = {
  name: string,
  primary: string
}

const defaultTheme: IconColorTheme = {
  name: 'default',
  primary: '#4DCB93',
}

const themes: IconColorTheme[] = [
  {
    name: 'blue',
    primary: '#081ec0'
  }
]

export type FigmaFrame = {
  name: string,
}

if (!process.env.FIGMA_TOKEN) {
  console.error(
    chalk.red('FIGMA_TOKEN 没有设置')
  )
}

const svgoTransformer = transformSvgWithSvgo({
  plugins: [
    {
      name: 'removeAttrs',
      params: {
        attrs: '*:id',
        elemSeparator: ":",
        preserveCurrentColor: false
      }
    },
    {
      name: 'removeEmptyContainers',
    },
    {
      name: 'removeUnknownsAndDefaults',
    },
    {
      name: 'removeUselessStrokeAndFill',
    },
    {
      name: 'collapseGroups',
    },
    {
      name: 'sortAttrs',
    },
  ]
})

/**
 * 批处理全体图标
 * 另存到 theme 子目录
 * @param icons
 * @param theme
 */
const duplicateIconsByTheme = (icons: FigmaExport.ComponentNode[]) => {
  themes.forEach(theme => {
    icons.forEach(icon => {
      const path = resolve(__dirname, `../svg/default/${icon.name}.svg`),
        content = fs.readFileSync(path, 'utf-8')
      const { data } = optimize(content, {
        plugins: [
          // SVGO plugin
          // 双色图标从一种主色替换、派生成多套主色
          makePrimaryReplacePlugin(theme)
        ]
      })
      const dir = resolve(__dirname, `../svg/${theme.name}`)
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir)
      }
      fs.writeFileSync(`${dir}/${icon.name}.svg`, data)
    })
  })
}

function buildOutputter (theme: IconColorTheme) {
  return outputComponentsAsSvg({
    output: config.dest,
    getBasename (options: FigmaExport.ComponentOutputterParamOption) {
      return `${options.componentName}.svg`
    },
    getDirname: () => theme.name
  })
}

const defaultOutputer = buildOutputter(defaultTheme)

async function exportIcons (
  config: Config
) {
  const transformers: FigmaExport.StringTransformer[] = [
    svgoTransformer
  ]

  // 从 figma 导出图标
  // 经过一系列 SVGO plugin 处理/清理
  // 保存到 icons/default 目录
  // 然后按 themes 配置替换主色 primary 后
  // 分别保存到 icons/<theme-name> 目录
  await figmaExport.components({
      fileId: config.figmaFile.id,
      concurrency: config.concurrency,
      token: process.env.FIGMA_TOKEN || '',
      onlyFromPages: [config.figmaFile.page],
      transformers,
      outputters: [
        defaultOutputer
      ],
    }).then(async (nodes: FigmaExport.PageNode[]) => {
      // 图标保存到 default/ 之后
      // 对 primary 颜色替换
      // 另存到 theme 目录
      nodes.forEach(node => {
        duplicateIconsByTheme(node.components)
      })
    }).catch((err: Error) => {
      console.error('导出错误:', err)
    })
}

async function run () {
  await exportIcons(config)
}

run()
