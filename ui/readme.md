p# Nutshell
标准组件库
A Vue 3 UI library based on Nutui on Taro

## 开始工作

```bash
git clone git@10.1.108.137:fed/nutshell.git
```

```sh
cd nutshell
yarn
```
## 编辑源代码自动 hot reload

```sh
yarn dev
```

在 docs 目录下调试组件
```sh
cd ../docs
yarn dev
```

* 在 docs/pages/components/下建立 demo 页面
* 在 nav.vue 下建立入口
* 在 docs/router 下建立 route
此时编辑 /ui 或者 /docs 之下的源代码都可以支持 hot reload


## 编译及打包

```sh
rm -rf dist
yarn build
```

## 发布
```sh
npm publish
```