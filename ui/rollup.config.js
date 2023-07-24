import dts from 'rollup-plugin-dts'
import vueJsx from 'rollup-plugin-vue-jsx-compat'
import esbuild from 'rollup-plugin-esbuild'
import { watch } from 'vue'

export default [
  {
    input: 'src/index.ts',
    output: [
      {
        format: 'cjs',
        file: 'dist/nutshell.cjs.js'
      },
    ],
    output: [
      {
        format: 'es',
        file: 'dist/nutshell.js',
      },
    ],
    plugins: [
      vueJsx(),
      esbuild({
        jsx: 'transform', // default, or 'preserve'
        jsxFactory: 'vueJsxCompat',
      }),
    ]
  },
  {
    input: './dist/index.d.ts',
    output: {
      file: 'dist/nutshell.d.ts',
      export: 'named',
      format: 'es',
    },
    plugins: [dts()]
  }
]