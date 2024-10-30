import Components from 'unplugin-vue-components/webpack'
import NutUIResolver from '@nutui/nutui-taro/dist/resolver'
import path from 'path'

/**
 * @typedef { import("@uxda/taro-plugin").PluginOptions } PluginOptions
 * @type {PluginOptions}
 **/

/**
 * 这是一个微信小程序应用
 * 使用自定义的 unplugin-vue-components resolver
 */
const nsRegex = /^Ns[A-Z][\w]+/
const NutshellResolver = (name) => {
  // console.log('NutshellResolver....................mame=', name)
  if (nsRegex.test(name)) {
    // console.log('NutshellResolver....................matched=', name)
    return {
      name: name,
      from: '@uxda/nutshell/taro'
    }
  }
}

const outputRoots = {
  h5: 'dist/h5',
  weapp: 'dist/weapp',
}

const config = {
  projectName: 'expo-play',
  date: '2024-9-24',
  designWidth: 375,
  deviceRatio: {
    640: 2.34 / 2,
    750: 1,
    828: 1.81 / 2,
    375: 2 / 1,
  },
  sourceRoot: 'src',
  outputRoot: outputRoots[process.env.TARO_ENV],
  plugins: [
    '@tarojs/plugin-html',
    ['@uxda/taro-plugin', {
      artifacts: true
    }]
  ],
  defineConstants: {
  },
  copy: {
    patterns: [
    ],
    options: {
    }
  },
  framework: 'vue3',
  compiler: {
    type: 'webpack5',
    prebundle: { enable: false }
  },
  alias: {
    '~': path.resolve(__dirname, '../src'),
  },
  cache: {
    enable: false // Webpack 持久化缓存配置，建议开启。默认配置请参考：https://docs.taro.zone/docs/config-detail#cache
  },
  sass:{
  },
  mini: {
    webpackChain(chain) {
      chain.plugin('unplugin-vue-components').use(Components({
        resolvers: [
          NutUIResolver({taro: true}),
          NutshellResolver
        ]
      }))
    },
    postcss: {
      pxtransform: {
        enable: true,
        config: {
          // selectorBlackList: ['nut-']
        }
      },
      url: {
        enable: true,
        config: {
          limit: 1024 // 设定转换尺寸上限
        }
      },
      cssModules: {
        enable: false, // 默认为 false，如需使用 css modules 功能，则设为 true
        config: {
          namingPattern: 'module', // 转换模式，取值为 global/module
          generateScopedName: '[name]__[local]___[hash:base64:5]'
        }
      }
    }
  },
  h5: {
    devServer: {
      open: false,
      port: 10087
    },
    router: {
      mode: 'browser', // browser/hash
    },
    webpackChain(chain) {
      chain.plugin('unplugin-vue-components').use(Components({
        resolvers: [
          NutUIResolver({taro: true}),
          NutshellResolver
        ]
      }))
    },
    publicPath: '/',
    staticDirectory: 'static',
    esnextModules: ['nutui-taro', 'icons-vue-taro'],
    postcss: {
      pxtransform: {
        enable: false,
        config: {
          rootValue: 14,
          onePxTransform: false,
          unitPrecision: 5,
          propList: ['*'],
          selectorBlackList: [],
          replace: true,
          mediaQuery: false,
          minPixelValue: 0,
          baseFontSize: 14,
          maxRootSize: 14,
          minRootSize: 14
        }
      },
    }
  }
}

module.exports = function (merge) {
  if (process.env.NODE_ENV === 'development') {
    return merge({}, config, require('./dev'))
  }
  return merge({}, config, require('./prod'))
}
