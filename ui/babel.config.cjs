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
}
