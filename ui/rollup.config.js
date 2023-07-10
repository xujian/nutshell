import vue from 'rollup-plugin-vue'
import typescript from 'rollup-plugin-typescript2'
import dts from 'rollup-plugin-dts'

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
      typescript(),
      vue(),
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