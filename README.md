# Nutshell

前端标准组件库

- 基于 Vue 3.x
- 是 nutui/ant-design-vue 的套娃

## 将 Nutshell 加入项目

```bash
git clone git@10.1.108.137:fed/nutshell.git
```

```bash
cd nutshell
yarn
```

```bash
cd ui
yarn patch
yarn build
```

在nutshell/ui目录下执行

```bash
yarn link
```

到项目目录下执行

```bash
yarn link @uxda/nutshell
```

Nutshell 部署到 npm 后，这一步骤相当于

```bash
yarn add @uxda/nutshell
```

### 其他注意事项

在 Nutshell 进入成熟迭代之前，需要同步开发组件库与项目，此时需要在 nutshell/ui 目录下执行

```bash
cd nutshell/ui
yarn start
```

此时修改 Nutshell 组件，可以即时编译。

## 文件目录结构

- docs 组件库官网及文档
- expo 范例应用
- ui 核心代码库

## Core/Vendor策略

Nutshell直接依赖 nutui。
也就是Nutshell会强制引入@nutui/nutui，除此之外，对于PC端项目，会引入ant-design-vue, 也就是PC端项目会多出@nuui/nutui部分的 bundle size。

Nutshell使用的core/vendor规范，可以在表面上实现单一组件库支持多个platform，然而多个vendor造成的问题是必须为多个platform，至少包含(PC、H5、微信小程序)实现多个vendor，这造成了一定程度上的机械式重复实现。

因此Nutshell选择部分组件仅实现一个vendor，例如NS-BUTTON。

NS-BUTTON仅实现了nutui的vendor，当组件库在PC端运行时，Fallback机制在vendor/antdv下面找不到NsButton的实现，会自动使用vendor/nutui下面的实现。

这样就可以省下一个vendor的开发成本。

## 维护组件库文档

在nutshell/docs目录下执行

```bash
yarn dev
```

在具体pages下面找到相应文档

### 新建组件文件的快捷命令

```bash
nsc: 新建组件
nsv: 新建 vendor
```
