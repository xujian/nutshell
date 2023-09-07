<template>
  <div class="logo">
    <img src="/logo.svg" alt="" class="svg" />
  </div>
  <a-menu class="nav"
    @click="onMenuClick"
    mode="inline"
    :items="menuData">
  </a-menu>
</template>
<script lang="ts" setup>
import { computed } from 'vue'
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
const onMenuClick = (item: any) => {
  router.push(item.key)
}

const menuData = computed(() =>[
  {
    label: '总述',
    key: 'overview',
  },
  {
    label: '参考配置',
    key: 'configurations',
  },
  {
    label: '视觉风格',
    key: 'themes',
    children: [

      {
        label: '色表',
        key: 'palettes'
      },
      {
        label: '派生风格',
        key: 'variants'
      }
    ]
  },
  {
    
    label: '设计规范',
    key: 'specifications',
    children: [
      {
        label: '字型',
        key: 'typographics'
      },
      {
        label: '尺寸',
        key: 'sizes'
      },
      {
        label: '间距',
        key: 'spacings'
      },
      {
        label: '交互状态',
        key: 'states'
      },
      {
        label: '形状',
        key: 'shapes'
      },
      {
        label: '阴影',
        key: 'shadows'
      },
      {
        label: '形状',
        key: 'shapes'
      },
      {
        label: '半透明',
        key: 'opacities'
      },
      {
        label: '渐变',
        key: 'gradients'
      },
      {
        label: '动效',
        key: 'motions'
      },
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
            key: '/components/button'
          }
        ]
      },
      {
        label: '表单组件',
        key: 'form',
        children: [
          {
            label: '文本输入框 input',
            key: '/components/input'
          },
          {
            label: '下拉选框 select',
            key: '/components/select'
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
    label: '实验室',
    key: 'labs'
  }
])
</script>
<style lang="scss">
.app-nav {
  overflow-y: auto;
  background-color: var(--ns-nav-background, transparent);
  .nav {
    width: 100%;
    height: 100vh;
    user-select: none;
    &.ant-menu,
    &.ant-menu-dark,
    &.ant-menu-light {
      color: var(--ns-text);
      background-color: transparent;
      .ant-menu-item-selected {
        background-color: var(--ns-primary);
      }
      &.ant-menu-inline .ant-menu-sub.ant-menu-inline {
        background-color: transparent;
      }
      .ant-menu-item:hover:not(.ant-menu-item-selected):not(.ant-menu-submenu-selected), 
      .ant-menu-submenu-title:hover:not(.ant-menu-item-selected):not(.ant-menu-submenu-selected) {
        color: var(--ns-text);
      }
    }
    .ant-menu-item {
      border-radius: 20px;
      color: var(--ns-text);
    }
    .ant-menu-submenu>.ant-menu-submenu-title,
    .ant-menu-inline .ant-menu-item,
    .ant-menu-light.ant-menu-inline .ant-menu-item {
      height: 32px;
      font-size: 12px;
    }
    .ant-menu-item-selected {
      color: #fff;
    }
  }
  .logo {
    margin: 1em;
    width: 40px;
    height: 40px;
  }
}
</style>