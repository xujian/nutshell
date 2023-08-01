// babel-preset-taro 更多选项和默认值：

const { resolve } = require('path')

// https://github.com/NervJS/taro/blob/next/packages/babel-preset-taro/README.md
console.log('babel.config.js0---------------')
module.exports = {
  presets: [
    ['taro', {
      framework: 'vue3',
      ts: true
    }]
  ]
}
