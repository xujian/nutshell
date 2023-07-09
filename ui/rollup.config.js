import vue from 'rollup-plugin-vue'
import typescript from 'rollup-plugin-typescript2'

export default {
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
}