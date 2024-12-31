import path from 'upath'
import { fileURLToPath } from 'url'
import AutoImport from 'unplugin-auto-import/rollup'
import copy from 'rollup-plugin-copy'
import commonjs from '@rollup/plugin-commonjs'
import postcss from 'rollup-plugin-postcss'
import { resolve } from 'path'
import vue from 'rollup-plugin-vue'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import terser from '@rollup/plugin-terser'
import { babel } from '@rollup/plugin-babel'
import { visualizer } from 'rollup-plugin-visualizer'
import packageJson from '../package.json' with { type: 'json' }
// import alias from '@rollup/plugin-alias'
// import NutUIResolver from '@nutui/nutui/dist/resolver'
// import path from 'path'

// const __filename = fileURLToPath(import.meta.url),
//   __dirname = path.dirname(__filename),
//   __root = path.resolve(__dirname)

const banner = `/*!
* @uxda/nutshell v${packageJson.version}
* Forged by UXDA team
* Released under the MIT License.
*/\n`

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
  // if (taroComponents.includes(name)) {
  //   return {
  //     name: name,
  //     from: '@tarojs/components',
  //   }
  // }
}

// 返回一个假的Taro
// 避免 Desktop/H5 引入整个Taro包
// 见 vendors/nutui/service/toast.ts
// const PsuedoTaroResolver = (name) => {
//   if (name === 'Taro') {
//     return {
//       name: 'Taro',
//       from: {
//         path: './src/index.ts',
//       }
//     }
//   }
// }

const NutTaroResolver = (name) => {
  if (nutRegex.test(name)) {
    return {
      name: name.slice(3),
      from: '@nutui/nutui-taro'
    }
  }
}

const extensions = ['.ts', '.js', '.mjs'],
  root = path.resolve(fileURLToPath(import.meta.url), '../..')

export default [
  {
    input: 'src/index.ts',
    output: [
      {
        format: 'es',
        file: 'dist/nutshell.js',
        sourcemap: true,
        // banner,
        // exports: 'named',
        // dir: 'dist'
        inlineDynamicImports: true,
      },
      // {
      //   file: 'dist/nutshell.js',
      //   name: 'Nutshell',
      //   format: 'umd',
      //   globals: { vue: 'Vue' },
      //   sourcemap: true,
      //   banner,
      // },
      // {
      //   file: 'dist/nutshell.min.js',
      //   name: 'Vuetify',
      //   format: 'umd',
      //   globals: { vue: 'Vue' },
      //   plugins: [terser({
      //     format: { comments: /^!/, ecma: 2015, semicolons: false },
      //   })],
      //   sourcemap: true,
      //   banner,
      // },
    ],
    plugins: [
      commonjs(),
      nodeResolve({ extensions }),
      babel({
        extensions,
        babelHelpers: 'inline',
      }),
      AutoImport({
        dirs: [
          'src/vendors/nutui/**',
        ],
        dts: 'src/auto-imports.d.ts',
        defaultExportByFilename: true,
        include: [
          /\.ts$/,
        ],
        eslintrc: {
          enabled: true,
        },
        resolvers: [
          NutResolver,
          // NutTypeResolver,
          // PsuedoTaroResolver
        ]
      }),
      postcss({
        modules: true
      }),
      copy({
        targets: [
          {
            src: 'components.d.ts',
            dest: 'dist/api/'
          }
        ]
      }),
      vue(),
      {
        async buildEnd () {
          const id = (await this.resolve('src/components/index.ts')).id
          console.log('========================================================== ROLLUP BUILD END', id)
          { // Components
            // const { importedIds } = this.getModuleInfo(
            //   (await this.resolve('src/components/index.ts')).id
            // )
            // console.log(importedIds)
          }
        }
      }
    ],
    external: [
      'vue',
      'vue-router',
      '@nutui/nutui',
      '@nutui/nutui-taro',
      'ant-design-vue',
      '@tarojs/taro',
      'vxe-table',
    ]
  },
  {
    input: 'src/index.ts',
    output: [
      {
        format: 'es',
        // file: 'dist/taro/nutshell.esm.js',
        sourcemap: true,
        // banner,
        // exports: 'named',
        dir: 'dist/taro',
        inlineDynamicImports: true,
      },
    ],
    plugins: [
      commonjs(),
      nodeResolve({ extensions }),
      babel({
        extensions,
        // babelHelpers: 'inline',
      }),
      AutoImport({
        dirs: [
          'src/composables/',
          'src/composables/**',
          'src/vendors/nutui/**',
        ],
        defaultExportByFilename: true,
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
      postcss({
        modules: true
      }),
      vue(),
      // terser(),
      {
        transform: (source, id) => {
          if (/src\/vendors\/index/.test(id)) {
            return {
              code: source.replace(/antdv\:\santdvToImport/, '')
            }
          }
        }
      },
      visualizer(),
    ],
    external: [
      'vue',
      '@nutui/nutui',
      '@nutui/nutui-taro',
      '@tarojs/components',
      '@tarojs/taro',
      'ant-design-vue',
      'compressorjs',
      'validator',
      'viewerjs',
      'cropperjs',
      'vue-draggable-plus',
      'chroma-js',
      'vue-tippy',
      'tippy.js',
      'vue-toastification',
      'vxe-table',
      'lodash-es'
    ]
  },
  // {
  //   input: './dist/index.d.ts',
  //   output: {
  //     file: 'dist/nutshell.d.ts',
  //     exports: 'named',
  //     format: 'es',
  //   },
  //   plugins: [dts()]
  // },
  // {
  //   input: './dist/index.d.ts',
  //   output: {
  //     file: 'dist/taro/nutshell.d.ts',
  //     exports: 'named',
  //     format: 'es',
  //   },
  //   plugins: [dts()]
  // },
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
  },
  {
    input: './src/styles/tabbar.scss',
    output: {
      dir: './dist'
    },
    plugins: [
      postcss({
        use: ['sass'],
        extract: resolve('./dist/tabbar.css'),
      })
    ]
  },
  {
    input: './src/vendors/antdv/styles/third.scss',
    output: {
      dir: './dist'
    },
    plugins: [
      postcss({
        use: ['sass'],
        extract: resolve('./dist/third.css'),
      })
    ]
  }
]
