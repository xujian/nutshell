import dts from 'rollup-plugin-dts'
import vueJsx from 'rollup-plugin-vue-jsx-compat'
import esbuild from 'rollup-plugin-esbuild'
import AutoImport from 'unplugin-auto-import/rollup'
import copy from 'rollup-plugin-copy'
import scss from 'rollup-plugin-scss'
import postcss from 'rollup-plugin-postcss'
import { resolve } from 'path'
import json from './rollup/plugin-json.js'
import vue from 'rollup-plugin-vue'
// import alias from '@rollup/plugin-alias'
// import NutUIResolver from '@nutui/nutui/dist/resolver'
// import path from 'path'

// const __filename = fileURLToPath(import.meta.url),
//   __dirname = path.dirname(__filename),
//   __root = path.resolve(__dirname)

const nutRegex = /^Nut[A-Z].*$/
const nutTypeRegex = /^Nut[\w]+Type$/

const NutResolver = (name) => {
  // console.log('rollup.config.js-----------NutResolver......name===', name)
  if (nutRegex.test(name) && !name.endsWith('Type')) {
    const resolved = name.slice(3)
    return {
      name: resolved,
      from: '@nutui/nutui',
      // sideEffects: `@nutui/nutui/dist/packages/${resolved.toLowerCase()}/style`
    }
  }
}

// const NutTypeResolver = (name) => {
//   if (nutTypeRegex.test(name)) {
//     const dir = name.slice(3, -4).toLowerCase()  //NutButtonType => button/type
//     return {
//       name: NutButtonType,
//       from: `@nutui/nutui/dist/types/__VUE/${dir}`,
//     }
//   }
// }

// 只用来解析 Taro
const OnlyTaroResolver = (name) => {
  if (name === 'Taro') {
    return {
      name: 'default',
      as: 'Taro',
      from: '@tarojs/taro',
    }
  }
}

const taroEvents = [
  'usePageScroll',
  'useDidShow',
  'useDidHide',
  'useReady',
  'useUnload',
  'useLoad',
  'usePullDownRefresh',
  'useReachBottom',
  'useResize',
]

const taroComponents = [
  'ScrollView',
]

const TaroHookResolver = (name) => {
  if (taroEvents.includes(name)) {
    return {
      name: name,
      from: '@tarojs/taro',
    }
  }
  if (taroComponents.includes(name)) {
    return {
      name: name,
      from: '@tarojs/components',
    }
  }
}

// 返回一个假的Taro
// 避免 Desktop/H5 引入整个Taro包
// 见 vendors/nutui/service/toast.ts
const PsuedoTaroResolver = (name) => {
  if (name === 'Taro') {
    return {
      name: 'Taro',
      from: '@uxda/nutshell',
    }
  }
}

const NutTaroResolver = (name) => {
  if (nutRegex.test(name)) {
    return {
      name: name.slice(3),
      from: '@nutui/nutui-taro'
    }
  }
}

export default [
  {
    input: 'src/index.ts',
    output: [
      {
        format: 'es',
        // file: 'dist/nutshell.js',
        exports: 'named',
        dir: 'dist'
      },
    ],
    plugins: [
      AutoImport({
        dirs: [
          'src/vendors/nutui/**',
        ],
        dts: 'src/auto-imports.d.ts',
        include: [
          /\.ts$/,
        ],
        eslintrc: {
          enabled: true,
        },
        resolvers: [
          NutResolver,
          // NutTypeResolver,
          PsuedoTaroResolver
        ]
      }),
      copy({
        targets: [
          {
            src: 'src/styles/**',
            dest: 'dist/styles'
          },
          {
            src: 'components.d.ts',
            dest: 'dist/api/'
          }
        ]
      }),
      vue(),
      vueJsx(),
      esbuild({
        jsx: 'transform', // default, or 'preserve'
        jsxFactory: 'vueJsxCompat',
      }),
      json(),
    ],
    external: ['vue']
  },
  {
    input: 'src/index.ts',
    output: [
      {
        format: 'es',
        // file: 'dist/taro/nutshell.js',
        dir: 'dist/taro'
      },
    ],
    plugins: [
      AutoImport({
        dirs: [
          'src/composables/',
          'src/composables/**',
          'src/vendors/nutui/**',
        ],
        imports: [{
          '@tarojs/taro': [
            ['default', 'Taro']
          ]
        }],
        dts: 'src/auto-imports-taro.d.ts',
        include: [
          /\.ts$/,
        ],
        eslintrc: {
          enabled: true,
        },
        resolvers: [
          // OnlyTaroResolver,
          NutTaroResolver,
          TaroHookResolver,
        ]
      }),
      vue(),
      vueJsx(),
      esbuild({
        jsx: 'transform', // default, or 'preserve'
        jsxFactory: 'vueJsxCompat',
      }),
    ],
    external: ['vue']
  },
  {
    input: './dist/index.d.ts',
    output: {
      file: 'dist/nutshell.d.ts',
      exports: 'named',
      format: 'es',
    },
    plugins: [dts()]
  },
  {
    input: './dist/index.d.ts',
    output: {
      file: 'dist/taro/nutshell.d.ts',
      exports: 'named',
      format: 'es',
    },
    plugins: [dts()]
  },
  {
    input: './src/styles/main.scss',
    output: {
      dir: './dist'
    },
    plugins: [
      postcss({
        use: ['sass'],
        extract: resolve('./dist/nutshell.css'),
      })
    ]
  },
  {
    input: './src/vendors/nutui/nutui.scss',
    output: {
      dir: './dist'
    },
    plugins: [
      postcss({
        use: ['sass'],
        extract: resolve('./dist/nutui.css'),
      })
    ]
  },
  {
    input: './src/vendors/antdv/antdv.scss',
    output: {
      dir: './dist'
    },
    plugins: [
      postcss({
        use: ['sass'],
        extract: resolve('./dist/antdv.css'),
      })
    ]
  }
]
