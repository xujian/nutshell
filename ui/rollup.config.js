import dts from 'rollup-plugin-dts'
import vueJsx from 'rollup-plugin-vue-jsx-compat'
import esbuild from 'rollup-plugin-esbuild'
import AutoImport from 'unplugin-auto-import/rollup'
import copy from 'rollup-plugin-copy'
import scss from 'rollup-plugin-scss'
import postcss from 'rollup-plugin-postcss'
import { resolve } from 'path'
// import alias from '@rollup/plugin-alias'
// import NutUIResolver from '@nutui/nutui/dist/resolver'
// import path from 'path'

// const __filename = fileURLToPath(import.meta.url),
//   __dirname = path.dirname(__filename),
//   __root = path.resolve(__dirname)

const nutRegex = /^Nut[A-Z].*$/
const nutTypeRegex = /^Nut[\w]+Type$/

const NutResolver = (name) => {
  console.log('rollup.config.js-----------NutResolver......name===', name)
  if (nutRegex.test(name) && !name.endsWith('Type')) {
    const resolved = name.slice(3)
    return {
      name: resolved,
      from: '@nutui/nutui',
      // sideEffects: `@nutui/nutui/dist/packages/${resolved.toLowerCase()}/style`
    }
  }
}

const NutTypeResolver = (name) => {
  if (nutTypeRegex.test(name)) {
    const dir = name.slice(3, -4).toLowerCase()  //NutButtonType => button/type
    return {
      name: NutButtonType,
      from: `@nutui/nutui/dist/types/__VUE/${dir}/type`,
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
          'src/providers/nutui/**',
        ],
        dts: true,
        include: [
          /\.ts$/,
        ],
        eslintrc: {
          enabled: true,
        },
        resolvers: [
          NutResolver,
          NutTypeResolver
        ]
      }),
      copy({
        targets: [
          {
            src: 'src/styles/**',
            dest: 'dist/styles'
          }
        ]
      }),
      vueJsx(),
      esbuild({
        jsx: 'transform', // default, or 'preserve'
        jsxFactory: 'vueJsxCompat',
      }),
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
          'src/providers/nutui',
        ],
        dts: true,
        include: [
          /\.ts$/,
        ],
        eslintrc: {
          enabled: true,
        },
        resolvers: [
          NutTaroResolver
        ]
      }),
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
    input: './src/styles/main.scss',
    output: {
      file: 'nutshell.css',
      format: 'es'
    },
    plugins: [
      postcss({
        use: ['sass'],
        extract: resolve('./dist/nutshell.css'),
      })
    ]
  },
  {
    input: './src/providers/nutui/nutui.scss',
    output: {
      file: 'nutui.css',
      format: 'es'
    },
    plugins: [
      postcss({
        use: ['sass'],
        extract: resolve('./dist/nutui.css'),
      })
    ]
  },
  {
    input: './src/providers/antdv/antdv.scss',
    output: {
      file: 'antdv.css',
      format: 'es'
    },
    plugins: [
      postcss({
        use: ['sass'],
        extract: resolve('./dist/antdv.css'),
      })
    ]
  }
]