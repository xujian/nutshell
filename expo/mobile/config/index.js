import Components from 'unplugin-vue-components/webpack'
import NutUIResolver from '@nutui/nutui-taro/dist/resolver'
import path from 'path'

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

const SpeedMeasurePlugin = require('speed-measure-webpack-plugin')

const config = {
  projectName: 'expo-mobile',
  date: '2023-7-21',
  designWidth: 375,
  deviceRatio: {
    640: 2.34 / 2,
    750: 1,
    828: 1.81 / 2,
    375: 2 / 1
  },
  sourceRoot: 'src',
  outputRoot: 'dist',
  plugins: [
    '@tarojs/plugin-html'
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
    data: `@import "@nutui/nutui-taro/dist/styles/variables.scss";`
  },
  mini: {
    webpackChain(chain) {
      chain.plugin('unplugin-vue-components').use(Components({
        resolvers: [
          NutUIResolver({taro: true}),
          NutshellResolver
        ]
      }))
      // chain
      //   .plugin('speed-measure-webpack-plugin')
      //   .use(SpeedMeasurePlugin)
      //   .end()
      // chain.plugin('unplugin-auto-import').use(AutoImportPlugin({
      //   include: [
      //     /\.vue$/, /\.vue\?vue/, // .vue
      //   ],
      //   dirs: ['.src/pages/**'],
      //   resolvers: [
      //     NutshellResolver
      //   ]
      // }))
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
      // autoprefixer: {
      //   enable: true,
      //   config: {
      //   }
      // },
      cssModules: {
        enable: false, // 默认为 false，如需使用 css modules 功能，则设为 true
        config: {
          namingPattern: 'module', // 转换模式，取值为 global/module
          generateScopedName: '[name]__[local]___[hash:base64:5]'
        }
      }
    }
  }
}

module.exports = function (merge) {
  if (process.env.NODE_ENV === 'development') {
    return merge({}, config, require('./dev'))
  }
  return merge({}, config, require('./prod'))
}
