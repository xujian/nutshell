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
        label: '视觉风格 design',
        key: '/design'
      },
      {
        label: '色表 palettes',
        key: '/design/palettes'
      },
      {
        label: '派生风格 variants',
        key: '/variants'
      },
      {
        label: '磨砂玻璃效果 glassmorphism',
        key: '/design/glassmorphism'
      },
      {
        label: '预制渐层 gradients',
        key: '/design/gradients'
      },
      {
        label: '预制动画填充 motions',
        key: '/design/motions'
      },
      {
        label: '预制图案填充 patterns',
        key: '/design/patterns'
      },
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
        label: '间距 spacing',
        key: '/tokens/spacing'
      },
      {
        label: '尺寸 sizing',
        key: '/tokens/sizing'
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
        label: '动作类',
        key: 'action',
        children: [
          {
            label: '按钮 button',
            key: '/components/button'
          },
          {
            label: '按钮组 button-group',
            key: '/components/button-group'
          },
          {
            label: '弹出命令 popover',
            key: '/components/popover'
          },
          {
            label: '下拉菜单 dropdown',
            key: '/components/dropdown'
          },
          {
            label: '选单 menu',
            key: '/interactive/menu'
          },
        ]
      },
      {
        label: '呈现类',
        key: 'presentation',
        children: [
          {
            label: '标签 chip',
            key: '/components/chip'
          },
          {
            label: '步骤条 stepper',
            key: '/components/stepper'
          },
          {
            label: '图片 image',
            key: '/components/image'
          },
          {
            label: '图标 icon',
            key: '/components/icon'
          },
          {
            label: '数字 number',
            key: '/components/number'
          },
          {
            label: '星星 rating',
            key: '/components/rating'
          },
          {
            label: '开关 switch',
            key: '/components/switch'
          },
          {
            label: '分隔线 divider',
            key: '/components/divider'
          }
        ]
      },
      {
        label: '导向类',
        key: 'navigation',
        children: [
          {
            label: '选项卡 Tabs',
            key: '/components/tabs'
          },
          {
            label: '主导航条 Tabbar',
            key: '/components/tabbar'
          },
        ]
      },
      {
        label: '容器类',
        key: 'container',
        children: [
          {
            label: '卡片 card',
            key: '/components/card'
          },
          {
            label: '横向排列 row',
            key: '/layout/row'
          },
          {
            label: '纵向排列 column',
            key: '/layout/column'
          }
        ],
      },
      {
        label: '表单输入类',
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
            label: '单选框 radio',
            key: '/components/radio'
          },
          {
            label: '复选框 checkbox',
            key: '/components/checkbox'
          },
          {
            label: '开关 switch-input',
            key: '/components/switch-input'
          },
          {
            label: '按钮组',
            key: '/components/button-group-input'
          },
          {
            label: '星星输入框 rating-input',
            key: '/components/rating-input'
          },
          {
            label: '文件上传 upload',
            key: '/components/upload'
          },
        ]
      },
      {
        label: '数据类',
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
            label: '平铺 repeator',
            key: '/components/repeator'
          },
          {
            label: '空状态 empty',
            key: '/components/empty'
          },
          {
            label: '分页 pagination',
            key: '/components/pagination'
          },
          {
            label: '时间线 timeline',
            key: '/components/timeline'
          },
          {
            label: '详表 facts',
            key: '/components/facts'
          },
          {
            label: '文件表 files',
            key: '/components/files'
          }
        ]
      },
      {
        label: '交互类',
        key: 'interactive',
        children: [
          {
            label: '弹窗 dialog',
            key: '/interactive/dialog'
          },
          {
            label: '底部弹窗 sheet',
            key: '/interactive/sheet'
          },
          {
            label: '消息 toast',
            key: '/interactive/toast'
          },
          {
            label: '侧边栏 drawer',
            key: '/interactive/drawer'
          },
        ]
      },
      {
        label: '图表',
        key: 'plot',
        children: [
          {
            label: '折线图 line-chart',
            key: '/plot/line'
          },
          {
            label: '柱状图 bar-chart',
            key: '/plot/bar'
          },
          {
            label: '饼图 pie-chart',
            key: '/plot/pie'
          },
        ]
      },
    ]
  },
  {
    label: 'Directives',
    key: 'directives',
    children: [
      {
        label: '提示 v-tooltip',
        key: '/directives/tooltip'
      },
      {
        label: '加载中 v-loading',
        key: '/directives/loading'
      },
    ]
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
      border-inline-end: 0;
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
      &.ant-menu-item-only-child {
        font-size: 12px;
      }
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
