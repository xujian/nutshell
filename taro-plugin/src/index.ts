import type { IPluginContext } from '@tarojs/service'
import webpackChain from 'webpack-chain'

export type PluginOptions = {
  artifacts: boolean | string[]
}

/**
 * 编译过程扩展
 */
export default (ctx: IPluginContext, options: PluginOptions) => {
  ctx.onBuildStart(() => {
    console.log('NUTSHELL-TARO-PLUGIN ===插件入参：', options)
    console.log('NUTSHELL-TARO-PLUGIN ===编译开始')
  })

  // @ts-ignore
  ctx.modifyWebpackChain(({ chain }: { chain: webpackChain }) => {
    console.log('NUTSHELL-TARO-PLUGIN ===这里可以修改webpack配置')
    // 示例：利用webpackChain向html中插入脚本
    // if (process.env.TARO_ENV !== 'h5') return
    // chain
    //   .plugin('htmlWebpackPlugin')
    //   .tap(([pluginConfig]) => {
    //     return [
    //       {
    //         ...pluginConfig,
    //         script: pluginConfig.script + 'console.log("向html中插入代码");'
    //       }
    //     ]
    //   })
  })

  ctx.onBuildComplete(() => {
    console.log('NUTSHELL-TARO-PLUGIN ===Taro 构建完成')
  })

  ctx.modifyBuildAssets(({ assets }) => {
    const wxss = assets['app.wxss']
    // if (options.artifacts) {
    //   if (wxss && wxss._value) {
    //     wxss._value = wxss._value + '@import "./artifacts.wxss";'
    //   }
    // }
    // console.log('NUTSHELL-TARO-PLUGIN ===修改编译后的结果', Object.keys(assets))
    // // 示例：修改html产物内容
    // const indexHtml = assets['index.html']
    // if (indexHtml && indexHtml._value) {
    //   indexHtml._value = indexHtml._value.replace(/<title>(.*?)<\/title>/,'<title>被插件修改过的标题</title>')
    // }
  })

  ctx.onBuildFinish(() => {
    console.log('NUTSHELL-TARO-PLUGIN ===Webpack 编译结束')
  })
}
