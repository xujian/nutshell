import dts from 'rollup-plugin-dts'
import esbuild from 'rollup-plugin-esbuild'

export default [
  {
    input: './src/index.ts',
    output: [
      {
        format: 'es',
        // file: 'dist/nutshell.js',
        exports: 'named',
        dir: 'dist'
      },
    ],
    plugins: [
      esbuild({}),
    ],
    external: ['vue']
  },
  {
    input: './dist/index.d.ts',
    output: {
      file: 'dist/plot.d.ts',
      exports: 'named',
      format: 'es',
    },
    plugins: [dts()]
  },
]
