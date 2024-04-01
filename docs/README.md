# Nutsell Docs
组件库官方文档

## Project Setup

```sh
yarn
```


```sh
yarn dev
```


```sh
yarn build
```  

```sh
yarn deploy
```

## 目录结构
* components 系统组件
* examples 复杂的组件样例
* layouts 页面结构定义
* pages 路由页面定义
* panels 组件场景包(卡片)样例
* plugins Vue plugins
* router 路由定义
* boards 页面场景样例
* stories 组件样例
* styles 系统样式

## Virtual Directories 虚拟目录

虚拟目录放了一些预制的组件场景样例

虚拟目录下的 vue 文件被 virtual-plugin 编译

* /stories 独立组件样例
* /panels 组件场景包(卡片)样例
* /boards 业务场景(完整的页面样板)

以上目录下放的是一些 *.vue 文件
可以分别使用

```html
<story file="button/basic.vue" />
<panel file="forms/tasks.vue" />
<board file="contracts/query.vue" />
```
嵌入到 vue 页面