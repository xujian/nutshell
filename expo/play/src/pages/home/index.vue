<template>
  <ns-page class="home-page" fill="neutral">
    <ns-page-content>
      <ns-card class="hero-card breakout" mesh="100" fill="#333" :thick="0">
        <ns-row class="fit square" align="center" justify="center">
          <h2>标准组件库</h2>
        </ns-row>
      </ns-card>
      <ns-row class="scenarios-row mb-md" justify="stretch" align="stretch" gap>
        <ns-card v-for="(group, index) in scenarios"
          :key="index" class="scene-card" fill="#FF980099"
          :blur="40"
          stroke="#d8870f" :title="group.title">
          <ns-column class="fit" align="end" justify="end" gap>
            <ns-button r="sm" v-for="(s) in group.items"
              class="link-button"
              v-link="`/pages/scenarios/${s.link}`"
              size="xs" color="#00000033" :label="`${s.title}`" />
          </ns-column>
        </ns-card>
      </ns-row>
      <ns-card class="content-card mb-md"
        v-for="(g, index) in groups" :key="index" :title="g.title"
        :fill="fills[index] || '#fff'" body-fill="#ffffff22" :edge="2">
        <ns-list :data="g.data" has-arrows class="full-width">
        </ns-list>
      </ns-card>
    </ns-page-content>
  </ns-page>
</template>
<script lang="ts" setup>
import { ListItemProps, type Color } from '@uxda/nutshell/taro'
import chroma from 'chroma-js'

const scenarios = [
  {
    title: '数据类',
    items: [
      { title: '订单表', link: 'list/orders' },
      { title: '消费记录', link: 'list/transactions' },
      { title: '客户表', link: 'list/clients' },
      { title: '合同表', link: 'list/contracts' },
      { title: '跟进记录', link: 'list/followups' },
      { title: '系统消息', link: 'list/messages' },
      { title: '余额', link: 'list/balance' },
    ],
  },
  {
    title: '表单类',
    items: [
      { title: '客户资料', link: 'form/customer-information' },
      { title: '企业资料', link: 'form/enterprise-information' },
      { title: '发起合同', link: 'form/contract' },
      { title: '房产信息', link: 'form/house-information' },
      { title: '影像资料', link: 'form/material' },
      { title: '提现', link: 'form/withdraw' },
    ],
  },
  {

    title: '呈现类',
    items: [
      { title: '客户详情', link: 'presentation/client' },
      { title: '合同详情', link: 'presentation/contract' },
      { title: '订单详情', link: 'presentation/order' },
      { title: '影像资料', link: 'presentation/material' },
    ],
  },
  {

    title: '交互类',
    items: [
      { title: '批量操作', link: 'interaction/batch' },
      { title: '数据筛选', link: 'interaction/filter' },
      { title: '分享', link: 'interaction/share' },
      { title: '上传', link: 'interaction/upload' },
    ]
  }
]

const groups: { title: string, data: ListItemProps[] }[] = [
  {
    title: '页面构成',
    data: [
      {
        title: '页',
        caption: '<ns-page>',
        link: '/pages/components/page/page',
      },
      {
        title: 'Page header',
        caption: '<ns-page-header>',
        link: '/pages/components/page-header',
      },
      {
        title: 'Page content',
        caption: '<ns-page-header>',
        link: '/pages/components/page-header',
      },
      {
        title: 'Page footer',
        caption: '<ns-page-footer>',
        link: '/pages/components/page-footer',
      },
      {
        title: '滚动模式',
        caption: '针对不同内容要求的滚动方式',
        link: '/pages/components/scroll',
      }
    ]
  },
  {
    title: '预设交互',
    data: [
      {
        title: '弹窗',
        caption: '$n.dialog',
        link: '/pages/interactive/dialog',
      },
      {
        title: '底部滑出弹窗',
        caption: '$n.sheet',
        link: '/pages/interactive/sheet',
      },
      {
        title: '右侧滑出浮层',
        caption: '$n.drawer',
        link: '/pages/interactive/drawer',
      },
      {
        title: '通知消息',
        caption: '$n.notice',
        link: '/pages/interactive/notice',
      },
      {
        title: 'Toast',
        caption: '$n.toast',
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
        caption: 'gradients',
        link: '/pages/design/gradients',
      },
      {
        title: '内置动画',
        caption: 'motions',
        link: '/pages/design/motions',
      }
    ]
  },
  {
    title: '动作类组件',
    data: [
      {
        title: '按钮',
        caption: '<ns-button>',
        link: '/pages/components/button/button',
      },
      {
        title: '按钮组',
        caption: '<ns-button-group>',
        link: '/pages/components/button-group/button-group',
      },
      {
        title: '气泡',
        caption: '<ns-popover>',
        link: '/pages/components/popover/popover',
      },
      {
        title: '下拉框',
        caption: '<ns-dropdown>',
        link: '/pages/components/dropdown/dropdown',
      },
      {
        title: '菜单',
        caption: '<ns-menu>',
        link: '/pages/components/menu/menu',
      }
    ]
  },
  {
    title: '呈现类组件',
    data: [
      {
        title: '标签',
        caption: '<ns-chip>',
        link: '/pages/components/chip/chip',
      },
      {
        title: '步骤条',
        caption: '<ns-stepper>',
        link: '/pages/components/stepper/stepper',
      },
      {
        title: '图片',
        caption: '<ns-image>',
        link: '/pages/components/image/image',
      },
      {
        title: '图标',
        caption: '<ns-icon>',
        link: '/pages/components/icon/icon',
      },
      {
        title: '数字',
        caption: '<ns-number>',
        link: '/pages/components/number/number',
      },
      {
        title: '星星',
        caption: '<ns-rating>',
        link: '/pages/components/rating/rating',
      },
      {
        title: '开关',
        caption: '<ns-switch>',
        link: '/pages/components/switch/switch',
      },
      {
        title: '分隔线',
        caption: '<ns-divider>',
        link: '/pages/components/divider/divider',
      }
    ]
  },
  {
    title: '导向类组件',
    data: [
      {
        title: 'Tabs',
        caption: '<ns-tabs>',
        link: '/pages/components/tabs/tabs',
      },
      {
        title: '主导航条',
        caption: '<ns-tabbar>',
        link: '/pages/components/tabbar/tabbbar',
      }
    ]
  },
  {
    title: '容器类组件',
    data: [
      {
        title: '卡片',
        caption: '<ns-card>',
        link: '/pages/components/card/card',
      },
      {
        title: '可滚动区域',
        caption: '<ns-scrollable>',
        link: '/pages/components/scrollable/scrollable',
      },
      {
        title: '横向排列',
        caption: '<ns-row>',
        link: '/pages/components/row/row',
      },
      {
        title: '纵向排列',
        caption: '<ns-column>',
        link: '/pages/components/column/column',
      }
    ]
  },
  {
    title: '输入类组件',
    data: [
      {
        title: '表单',
        caption: '<ns-form>',
        link: '/pages/components/form/form',
      },
      {
        title: '文本输入框',
        caption: '<ns-input>',
        link: '/pages/components/input/input',
      },
      {
        title: '多行输入框',
        caption: '<ns-textarea>',
        link: '/pages/components/input/textarea',
      },
      {
        title: '下拉输入框',
        caption: '<ns-select>',
        link: '/pages/components/select/select',
      },
      {
        title: '级联输入框',
        caption: '<ns-cascading-select>',
        link: '/pages/components/select/cascading-select',
      },
      {
        title: '日期选择',
        caption: '<ns-date-input>',
        link: '/pages/components/input/date-input',
      },
      {
        title: '时间选择',
        caption: '<ns-time-input>',
        link: '/pages/components/input/time-input',
      },
      {
        title: '单选框',
        caption: '<ns-radio>',
        link: '/pages/components/radio/radio',
      },
      {
        title: '复选框',
        caption: '<ns-checkbox>',
        link: '/pages/components/checkbox/checkbox',
      },
      {
        title: '开关',
        caption: '<ns-switch-input>',
        link: '/pages/components/input/switch-input'
      },
      {
        title: '按钮组',
        caption: '<ns-button-group-input>',
        link: '/pages/components/input/button-group-input',
      },
      {
        title: '星星输入框',
        caption: '<ns-rating-input>',
        link: '/pages/components/input/rating-input',
      },
      {
        title: '文件上传',
        caption: '<ns-upload>',
        link: '/pages/components/upload/upload',
      }
    ]
  },
  {
    title: '数据类组件',
    data: [
      {
        title: '列表',
        caption: '<ns-list>',
        link: '/pages/components/list/list',
      },
      {
        title: '连续平铺',
        caption: '<ns-repeator>',
        link: '/pages/components/repeator/repeator',
      },
      {
        title: '详表',
        caption: '<ns-facts>',
        link: '/pages/components/facts/facts',
      },
      {
        title: '时间线',
        caption: '<ns-timeline>',
        link: '/pages/components/timeline/timeline',
      },
      {
        title: '文件表',
        caption: '<ns-files>',
        link: '/pages/components/files/files',
      }
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

  .scenarios-row {
    height: 260px;

    .link-button {
      width: 100%;
    }
  }
}
</style>
