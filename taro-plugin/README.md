# @uxda/taro-plugin
组件库内置的 Taro Plugin
编译过程时加入特定处理

```js
/**
 * @typedef { import("@uxda/taro-plugin").PluginOptions } PluginOptions
 * @type {PluginOptions}
 **/
```

* 添加 attifacts (设计素材)

## 使用

### 安装
```
npm i taro-plugin -D
```

### 使用插件
`/config/index.js`

```js
const config = {
  plugins: [
    ['@uxda/taro-plugin']
  ]
}
```
