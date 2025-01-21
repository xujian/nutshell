<template>
  <ns-page class="home-page" fill="neutral">
    <ns-page-content>
      <ns-card class="hero-card breakout" mesh="100" fill="#333" :thick="0">
        <ns-row class="fit square" align="center" justify="center">
          <h2>标准组件库</h2>
        </ns-row>
      </ns-card>
      <ns-card class="content-card mb-md" v-for="(g, index) in groups"
        :key="index"
        :title="g.title"
        :fill="g.color || '#fff'"
        body-fill="#ffffff22"
        :edge="2">
        <ns-list :data="g.data" has-arrows class="full-width">
        </ns-list>
      </ns-card>
    </ns-page-content>
  </ns-page>
</template>
<script lang="ts" setup>
import { ListItemProps, type Color } from '@uxda/nutshell/taro'


const groups: {title: string, color?: Color, data: ListItemProps[]}[] = [
  {
    title: '页面构成',
    color: '#004233',
    data: [
      {
        title: '页',
        name: '<ns-page>',
        caption: '',
        link: '/pages/components/page/page',
      },
      {
        title: 'Page header',
        name: '<ns-page-header>',
        caption: '',
        link: '/pages/components/page-header',
      },
      {
        title: 'Page content',
        name: '<ns-page-header>',
        caption: '',
        link: '/pages/components/page-header',
      },
      {
        title: 'Page footer',
        name: '<ns-page-footer>',
        caption: '',
        link: '/pages/components/page-footer',
      },
      {
        title: '滚动模式',
        caption: '针对不同内容要求的滚动方式',
        link: '/pages/components/scroll',
      },
    ]
  },
  {
    title: '预设交互',
    color: '#20532D',
    data: [
      {
        title: '弹窗',
        name: '$n.dialog',
        caption: '',
        link: '/pages/interactive/dialog',
      },
      {
        title: '底部滑出弹窗',
        name: '$n.sheet',
        caption: '',
        link: '/pages/interactive/sheet',
      },
      {
        title: '右侧滑出浮层',
        name: '$n.drawer',
        caption: '',
        link: '/pages/interactive/drawer',
      },
      {
        title: '通知消息',
        name: '$n.notice',
        caption: '',
        link: '/pages/interactive/notice',
      },
      {
        title: 'Toast',
        name: '$n.toast',
        caption: '',
        link: '/pages/interactive/toast',
      }
    ]
  },
  {
    title: '视觉效果',
    color: '#406327',
    data: [
      {
        title: '总述',
        caption: '视觉效果相关属性',
        link: '/pages/design/props',
      },
      {
        title: '内置渐变',
        name: 'gradients',
        caption: '',
        link: '/pages/design/gradients',
      },
      {
        title: '内置动画',
        name: 'motions',
        caption: '',
        link: '/pages/design/motions',
      }
    ]
  },
  {
    title: '动作类组件',
    color: '#607321',
    data: [
      {
        title: '按钮',
        name: '<ns-button>',
        caption: '',
        link: '/pages/components/button/button',
      },
      {
        title: '按钮组',
        name: '<ns-button-group>',
        caption: '',
        link: '/pages/components/button-group',
      },
      {
        title: '弹出命令',
        name: '<ns-popover>',
        caption: '',
        link: '/pages/components/popover/popover',
      },
      {
        title: '下拉框',
        name: '<ns-dropdown>',
        caption: '',
        link: '/pages/components/dropdown',
      },
      {
        title: '弹出菜单',
        name: '<ns-menu>',
        caption: '',
        link: '/pages/components/menu',
      },
    ]
  },
  {
    title: '呈现类组件',
    color: '#80831A',
    data: [
      {
        title: '标签',
        name: '<ns-chip>',
        caption: '',
        link: '/pages/components/chip/chip',
      },
      {
        title: '步骤条',
        name: '<ns-stepper>',
        link: '/pages/components/stepper',
      },
      {
        title: '图片',
        name: '<ns-image>',
        link: '/pages/components/image',
      },
      {
        title: '图标',
        name: '<ns-icon>',
        link: '/pages/components/icon',
      },
      {
        title: '数字',
        name: '<ns-number>',
        link: '/pages/components/number',
      },
      {
        title: '星星',
        name: '<ns-rating>',
        link: '/pages/components/rating',
      },
      {
        title: '开关',
        name: '<ns-switch>',
        link: '/pages/components/switch',
      },
      {
        title: '分隔线',
        name: '<ns-divider>',
        link: '/pages/components/divider',
      }
    ],
  },
  {
    title: '导向类组件',
    color: '#A09314',
    data: [
      {
        title: 'Tabs',
        name: '<ns-tabs>',
        caption: '',
        link: '/pages/components/tabs/tabs',
      },
      {
        title: '主导航条',
        name: '<ns-tabbar>',
        caption: '',
        link: '/pages/components/tabbar',
      },

    ],
  },
  {
    title: '容器类组件',
    color: '#C0A30D',
    data: [
      {
        title: '卡片',
        name: '<ns-card>',
        caption: '',
        link: '/pages/components/card/card',
      },
      {
        title: '横向排列',
        name: '<ns-row>',
        caption: '',
        link: '/pages/components/row',
      },
      {
        title: '纵向排列',
        name: '<ns-column>',
        caption: '',
        link: '/pages/components/column',
      },
    ],
  },
  {
    title: '输入类组件',
    color: '#E0B307',
    data: [
      {
        title: '表单',
        name: '<ns-form>',
        caption: '',
        link: '/pages/components/form/form',
      },
      {
        title: '文本输入框',
        name: '<ns-input>',
        caption: '',
        link: '/pages/components/input/input',
      },
      {
        title: '下拉选框',
        name: '<ns-date-select>',
        caption: '',
        link: '/pages/components/select',
      },
      {
        title: '日期输入',
        name: '<ns-date-input>',
        caption: '',
        link: '/pages/components/date-input',
      },
      {
        title: '单选框',
        name: '<ns-radio>',
        caption: '',
        link: '/pages/components/radio',
      },
      {
        title: '复选框',
        name: '<ns-checkbox>',
        caption: '',
        link: '/pages/components/checkbox',
      },
      {
        title: '开关',
        name: '<ns-switch-input>',
        caption: '',
        link: '/pages/components/switch-input',
      },
      {
        title: '按钮组',
        name: '<ns-button-group-input>',
        caption: '',
        link: '/pages/components/button-group-input',
      },
      {
        title: '星星输入框',
        name: '<ns-rating-input>',
        caption: '',
        link: '/pages/components/rating-input',
      },
      {
        title: '文件上传',
        name: '<ns-upload>',
        caption: '',
        link: '/pages/components/upload',
      },
    ]
  },
  {
    title: '数据类组件',
    color: '#FFC300',
    data: [
      {
        title: '列表',
        name: '<ns-list>',
        caption: '',
        link: '/pages/components/list',
      },
      {
        title: '连续平铺',
        name: '<ns-repeator>',
        caption: '',
        link: '/pages/components/repeator/repeator',
      },
      {
        title: '详表',
        name: '<ns-facts>',
        caption: '',
        link: '/pages/components/facts/facts',
      },
      {
        title: '时间线',
        name: '<ns-timeline>',
        caption: '',
        link: '/pages/components/timeline/timeline',
      },
      {
        title: '文件表',
        name: '<ns-files>',
        caption: '',
        link: '/pages/components/files',
      },
    ]
  }
]
</script>

<style lang="scss">
.home-page {
  .hero-card {
    height: 50vh;
    color: #ffffff90;
    margin-bottom: -20px;
  }
  .content-card {
    .title {
      font-weight: bold;
    }
    .caption {
      color: color-mix(in srgb, currentColor 70%, #fff);
      mix-blend-mode: color-dodge;
    }
  }
}
</style>
