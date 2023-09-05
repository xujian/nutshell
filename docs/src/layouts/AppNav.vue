<template>
  <div class="logo">
    <img src="/logo.svg" alt="" class="svg" />
  </div>
  <a-menu class="nav"
    theme="dark"
    mode="inline"
    :items="menuData">
  </a-menu>
</template>
<script lang="ts" setup>
const menuData = [
  {
    label: '总述',
    key: 'overview',
  },
  {
    label: '参考配置',
    key: 'configurations',
  },
  {
    label: '色彩主题',
    key: 'themes',
    children: [
      {
        label: '色表',
        key: 'palletes'
      }
    ]
  },
  {
    label: '组件',
    key: 'components',
    children: [
      {
        label: 'UI 组件',
        key: 'ui',
        children: [
          {
            label: '按钮 button',
            title: '按钮',
            key: 'button'
          }
        ]
      },
      {
        label: '表单组件',
        key: 'form',
        children: [
          {
            label: '文本输入框 iunput',
            key: 'input'
          },
          {
            label: '选择框 select',
            key: 'select'
          }
        ]
      },
      {
        label: '数据组件',
        key: 'data',
        children: [
          {
            label: '列表 list',
            key: 'list'
          },
          {
            label: '表格 table',
            key: 'table'
          }
        ]
      },
      {
        label: '交互组件',
        key: 'interactive',
        children: [
          {
            label: '弹窗 dialog',
            title: '按钮',
            key: 'dialog'
          },
          {
            label: '弹出消息 toast',
            key: 'toast'
          }
        ]
      },
      {
        label: '版式组件',
        key: 'interactive',
        children: [
          {
            label: '横向排列 row',
            key: 'row'
          },
          {
            label: '纵向排列 row',
            key: 'col'
          }
        ]
      },
    ]
  },
  {
    label: 'Directives',
    key: 'directives'
  },
  {
    label: 'Composables',
    key: 'composables'
  },
  {
    label: '附带工具',
    key: 'utils'
  },
  {
    label: '最新成果',
    key: 'labs'
  }
]
</script>
<style lang="scss">
.app-nav {
  .nav {
    width: 100%;
    background-color: transparent;
    user-select: none;
    &.ant-menu-dark {
      .ant-menu-item-selected {
        background-color: var(--ns-primary);
      }
      &.ant-menu-inline .ant-menu-sub.ant-menu-inline {
        background-color: transparent;
      }
    }
    .ant-menu-item {
      border-radius: 20px;
      color: var(--ns-text);
    }
  }
  .logo {
    margin: 1em;
    width: 40px;
    height: 40px;
  }
}
</style>