const pack = require('./package.json')

module.exports = {
  assumptions: {
    noDocumentAll: true
  },
  ignore: [/\.d\.ts$/],
  presets: [
    ['@babel/preset-env', {
      modules: false,
    }],
    '@babel/preset-typescript',
  ],
  plugins: [
    ['transform-define', {
      __VERSION__: pack.version,
      __REQUIRED_VUE__: pack.peerDependencies.vue,
    }],
  ],
  env: {
    test: {
      presets: [
        ['@babel/preset-env', {
          targets: { node: true },
          modules: 'commonjs',
        }],
      ],
    },
    lib: {
      ignore: ['**/__tests__'],
      plugins: [
        ['babel-plugin-add-import-extension', { extension: 'mjs' }],
      ],
    },
  },
}
