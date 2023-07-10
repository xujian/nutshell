import dts from 'rollup-plugin-dts'
import vueJsx from 'rollup-plugin-vue-jsx-compat'
import esbuild from 'rollup-plugin-esbuild'

export default [
  {
    input: 'src/index.ts',
    output: [
      {
        format: 'esm',
        file: 'dist/nutshell.esm.mjs'
      },
      {
        format: 'cjs',
        file: 'dist/nutshell.cjs.js'
      }
    ],
    plugins: [
      // typescript(),
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
      format: 'es',
    },
    plugins: [dts()]
  }
]