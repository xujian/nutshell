<template>
  <ns-page class="home-page">
    <ns-page-content>
      <ns-card class="hero-card breakout" motion="001">
        <ns-row class="fit square" align="center" justify="center">
          <h2>标准组件库</h2>
        </ns-row>
      </ns-card>
      <ns-card class="mb-md" v-for="(g, index) in groups" :key="index"
        :title="g.title"
        fill="#fff"
        body-fill="#eee">
        <ns-list :data="g.data">
        </ns-list>
      </ns-card>
    </ns-page-content>
  </ns-page>
</template>
<script lang="ts" setup>
import { ListItemProps } from '@uxda/nutshell/taro'


const groups: {title: string, data: ListItemProps[]}[] = [
  {
    title: '页面构成',
    data: [
      {
        title: '页',
        name: '<ns-page>',
        caption: '',
        link: '/pages/components/page',
        hasArrow: true,
      },
      {
        title: 'Page header',
        name: '<ns-page-header>',
        caption: '',
        link: '/pages/components/page-header',
        hasArrow: true,
      },
      {
        title: 'Page content',
        name: '<ns-page-header>',
        caption: '',
        link: '/pages/components/page-header',
        hasArrow: true,
      },
      {
        title: 'Page footer',
        name: '<ns-page-footer>',
        caption: '',
        link: '/pages/components/page-footer',
        hasArrow: true,
      },
      {
        title: '滚动模式',
        caption: '针对不同内容要求的滚动方式',
        link: '/pages/components/scroll',
        hasArrow: true,
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
        hasArrow: true,
      },
      {
        title: '底部滑出弹窗',
        name: '$n.sheet',
        caption: '',
        link: '/pages/interactive/sheet',
        hasArrow: true,
      },
      {
        title: '右侧滑出浮层',
        name: '$n.drawer',
        caption: '',
        link: '/pages/interactive/drawer',
        hasArrow: true,
      },
      {
        title: '通知消息',
        name: '$n.notice',
        caption: '',
        link: '/pages/interactive/notice',
        hasArrow: true,
      },
      {
        title: 'Toast',
        name: '$n.toast',
        caption: '',
        link: '/pages/interactive/toast',
        hasArrow: true,
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
        hasArrow: true,
      },
      {
        title: '内置渐变',
        name: 'gradients',
        caption: '',
        link: '/pages/design/gradients',
        hasArrow: true,
      },
      {
        title: '内置动画',
        name: 'motions',
        caption: '',
        link: '/pages/design/motions',
        hasArrow: true,
      }
    ]
  },
  {
    title: 'UI 组件',
    data: [
      {
        title: '按钮',
        name: 'ns-button',
        caption: '',
        link: '/pages/components/button',
        hasArrow: true,
      },
      {
        title: '下拉菜单',
        name: 'ns-dropdown',
        caption: '',
        link: '/pages/components/dropdown',
        hasArrow: true,
      },
      {
        title: '标签',
        name: 'ns-chip',
        caption: '',
        link: '/pages/components/chip',
        hasArrow: true,
      }
    ]
  },
  {
    title: '数据组件',
    data: [
      {
        title: '连续平铺',
        name: 'ns-repeator',
        caption: '',
        link: '/pages/components/repeator',
        hasArrow: true,
      },
    ]
  }
]
</script>

<style lang="scss">
.home-page {
  background-color: var(--ns-neutral);
  .hero-card {
    height: 50vh;
    color: #ffffff90;
    margin-bottom: -20px;
  }
}
</style>
