## Nutshell

前端标准组件库

- 基于 Vue 3.x
- 是 nutui/ant-design-vue 的套娃

# 将 Nutshell 加入项目

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

在 Nutshell 进入成熟迭代之前，需要同步开发组件库与项目，此时需要

在 nutshell/ui 目录下执行

```bash
cd nutshell/ui
yarn start
```

此时修改 Nutshell 组件，可以即时编译。

# 文件目录结构

- docs 组件库官网及文档
- expo 范例应用
- ui 核心代码库

# 维护组件库文档

在nutshell/docs目录下执行

```bash
yarn dev
```

在具体pages下面找到相应文档
