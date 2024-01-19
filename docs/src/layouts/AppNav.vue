<template>
  <div class="logo" @click="goHome">
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

const goHome = () => {
  router.push('/')
}

const onMenuClick = (item: any) => {
  router.push(item.key)
}

const menuData = computed(() => [
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
    key: 'theming',
    children: [
      {
        label: '色表 palettes',
        key: '/palettes'
      },
      {
        label: '派生风格 variants',
        key: '/variants'
      }
    ]
  },
  {

    label: '设计规范',
    key: 'tokens',
    children: [
      {
        label: '字型 font',
        key: '/tokens/font'
      },
      {
        label: '尺寸 sizing',
        key: '/tokens/sizes'
      },
      {
        label: '间距 spacing',
        key: '/tokens/spacings'
      },
      {
        label: '交互状态 state',
        key: '/tokens/state'
      },
      {
        label: '形状 shape',
        key: '/tokens/shapes'
      },
      {
        label: '阴影 shadow',
        key: '/tokens/shadow'
      },
      {
        label: '半透明 opacity',
        key: '/tokens/opacities'
      },
      {
        label: '渐变 gradient',
        key: '/tokens/gradients'
      },
      {
        label: '动效 motions',
        key: '/tokens/motion'
      },
    ]
  },
  {
    label: '开发规范',
    key: '/develop',
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
            key: '/components/button'
          },
          {
            label: '下拉菜单 dropdown',
            key: '/components/dropdown'
          },
          {
            label: '标签 chip',
            key: '/components/chip'
          },
          {
            label: '卡片 card',
            key: '/components/card'
          },
          {
            label: 'Tabs',
            key: '/components/tabs'
          },
          {
            label: 'Tabbar',
            key: '/components/tabbar'
          },
          {
            label: '图标 icon',
            key: '/components/icon'
          }
        ]
      },
      {
        label: '表单组件',
        key: 'form',
        children: [
          {
            label: '表单 form',
            key: '/components/form'
          },
          {
            label: '文本输入框 input',
            key: '/components/input'
          },
          {
            label: '下拉选框 select',
            key: '/components/select'
          },
          {
            label: '级联选框 cascading-select',
            key: '/components/cascading-select'
          },
          {
            label: '日期输入 date-input',
            key: '/components/date-input'
          },
          {
            label: '复选框 checkbox',
            key: '/components/checkbox'
          },
          {
            label: '单选框 radio',
            key: '/components/radio'
          },
          {
            label: '星星输入框 rating-input',
            key: '/components/rating-input'
          },
          {
            label: '开关 switch',
            key: '/components/switch'
          },
        ]
      },
      {
        label: '数据组件',
        key: 'data',
        children: [
          {
            label: '列表 list',
            key: '/components/list'
          },
          {
            label: '表格 table',
            key: '/components/table'
          },
          {
            label: '空状态 empty',
            key: '/components/empty'
          },
          {
            label: '分页 pagination',
            key: '/components/pagination'
          }
        ]
      },
      {
        label: '交互组件',
        key: 'interactive',
        children: [
          {
            label: '弹窗 dialog',
            key: '/interactive/dialog'
          },
          {
            label: '消息 toast',
            key: '/interactive/toast'
          },
          {
            label: '侧边栏 drawer',
            key: '/interactive/drawer'
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
    label: 'Services',
    key: 'services'
  },
  {
    label: '附带工具',
    key: 'utils'
  },
  {
    label: '实验室',
    key: 'labs',
    children: [
      {
        label: '大量数据表格',
        key: '/labs/table-perf'
      },
      {
        label: '组件表',
        key: '/labs/component-list'
      }
    ]
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
    cursor: pointer;
    transform: rotate(0deg);
    will-change: transform;
    transition: transform 1s;
    &:hover {
      transform: rotate(180deg);
    }
  }
}
</style>
