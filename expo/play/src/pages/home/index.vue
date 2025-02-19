<template>
  <ns-page class="home-page" fill="neutral">
    <ns-page-content>
      <ns-card class="hero-card breakout" mesh="100" fill="#333" :thick="0">
        <ns-row class="fit square" align="center" justify="center">
          <h2>标准组件库</h2>
        </ns-row>
      </ns-card>
      <ns-row class="scenes-row mb-md" justify="stretch" align="stretch" :gap="10">
        <ns-card
          v-for="(scene, index) in scenes"
          class="scene-card" fill="#FF980099" :blur="40"
          stroke="#d8870f" title="场景" v-link="'/scenes/list-01'">
          <ns-column class="fit" align="end" justify="end" :gap="10">
            <ns-button
              r="sm"
              v-for="(s, i) in scene"
              class="link-button"
              size="xs" color="#00000033" :label="`${s.title}`" />
          </ns-column>
        </ns-card>
      </ns-row>
      <ns-card class="content-card mb-md" v-for="(g, index) in groups"
        :key="index"
        :title="g.title"
        :fill="fills[index] || '#fff'"
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
import chroma from 'chroma-js'

const scenes = [
  [
    { title: '列表一', link: '/scenes/list-01' },
    { title: '列表二', link: '/scenes/list-02' },
    { title: '列表三', link: '/scenes/list-03' },
    { title: '列表四', link: '/scenes/list-04' },
  ],
  [
    { title: '表单一', link: '/scenes/form-01' },
    { title: '表单二', link: '/scenes/form-02' },
    { title: '表单三', link: '/scenes/form-03' },
    { title: '表单四', link: '/scenes/form-04' },
  ],
  [
    { title: '详情一', link: '/scenes/detail-01' },
    { title: '详情二', link: '/scenes/detail-02' },
    { title: '详情三', link: '/scenes/detail-03' },
    { title: '详情四', link: '/scenes/detail-04' },
  ],
  [
    { title: '图表一', link: '/scenes/chart-01' },
    { title: '图表二', link: '/scenes/chart-02' },
    { title: '图表三', link: '/scenes/chart-03' },
    { title: '图表四', link: '/scenes/chart-04' },
  ]
]

const groups: {title: string, color?: Color, data: ListItemProps[]}[] = [
  {
    title: '页面构成',
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
        link: '/pages/components/button-group/button-group',
      },
      {
        title: '气泡',
        name: '<ns-popover>',
        caption: '',
        link: '/pages/components/popover/popover',
      },
      {
        title: '下拉框',
        name: '<ns-dropdown>',
        caption: '',
        link: '/pages/components/dropdown/dropdown',
      },
      {
        title: '菜单',
        name: '<ns-menu>',
        caption: '',
        link: '/pages/components/menu/menu',
      },
    ]
  },
  {
    title: '呈现类组件',
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
        link: '/pages/components/stepper/stepper',
      },
      {
        title: '图片',
        name: '<ns-image>',
        link: '/pages/components/image/image',
      },
      {
        title: '图标',
        name: '<ns-icon>',
        link: '/pages/components/icon/icon',
      },
      {
        title: '数字',
        name: '<ns-number>',
        link: '/pages/components/number/member',
      },
      {
        title: '星星',
        name: '<ns-rating>',
        link: '/pages/components/rating/rating',
      },
      {
        title: '开关',
        name: '<ns-switch>',
        link: '/pages/components/switch/switch',
      },
      {
        title: '分隔线',
        name: '<ns-divider>',
        link: '/pages/components/divider/divider',
      }
    ],
  },
  {
    title: '导向类组件',
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
        link: '/pages/components/tabbar/tabbbar',
      },

    ],
  },
  {
    title: '容器类组件',
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
        link: '/pages/components/row/row',
      },
      {
        title: '纵向排列',
        name: '<ns-column>',
        caption: '',
        link: '/pages/components/column/column',
      },
    ],
  },
  {
    title: '输入类组件',
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
        title: '文本域',
        name: '<ns-textarea>',
        caption: '',
        link: '/pages/components/input/textarea',
      },
      {
        title: '下拉选框',
        name: '<ns-select>',
        caption: '',
        link: '/pages/components/select/select',
      },
      {
        title: '日期选择',
        name: '<ns-date-input>',
        caption: '',
        link: '/pages/components/input/date-input',
      },
      {
        title: '时间选择',
        name: '<ns-time-input>',
        caption: '',
        link: '/pages/components/input/time-input',
      },
      {
        title: '单选框',
        name: '<ns-radio>',
        caption: '',
        link: '/pages/components/radio/radio',
      },
      {
        title: '复选框',
        name: '<ns-checkbox>',
        caption: '',
        link: '/pages/components/checkbox/checkbox',
      },
      {
        title: '开关',
        name: '<ns-switch-input>',
        caption: '',
        link: '/pages/components/input/switch-input',
      },
      {
        title: '按钮组',
        name: '<ns-button-group-input>',
        caption: '',
        link: '/pages/components/input/button-group-input',
      },
      {
        title: '星星输入框',
        name: '<ns-rating-input>',
        caption: '',
        link: '/pages/components/intpu/rating-input',
      },
      {
        title: '文件上传',
        name: '<ns-upload>',
        caption: '',
        link: '/pages/components/upload/upload',
      },
    ]
  },
  {
    title: '数据类组件',
    data: [
      {
        title: '列表',
        name: '<ns-list>',
        caption: '',
        link: '/pages/components/list/list',
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
        link: '/pages/components/files/files',
      },
    ]
  }
]

const fills = chroma.scale(['#004233', '#C0A30D']).colors(groups.length)
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
  .scenes-row {
    height: 240px;
    .link-button {
      width: 100%;
    }
  }
}
</style>
