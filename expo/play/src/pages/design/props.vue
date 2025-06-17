<template>
  <ns-page class="props-page" fill="neutral" color-scheme="dark">
    <ns-page-header title="视觉风格" fill="#00000044" reveal :blur="50" />
    <ns-page-content>
      <h3>视觉风格调试器</h3>
      <design-tweak />
      <callout>
        <p>视觉风格是现代UI设计的核心, 赏心悦目的视觉风格来自于色彩、线条、字型、透明度、渐变、动画的组合与映衬。</p>
      </callout>
      <h3>视觉风格属性总表</h3>
      <props-table
        :data="props" />
      <p>&nbsp;</p>
      <ns-grid :columns="2" gap>
        <ns-card fill="#fff" body-fill="#ffffff22"
          :edge="2"
          foreground="black">
          <h3>色彩</h3>
        </ns-card>
        <ns-card fill="#fff" body-fill="#ffffff22"
          :edge="2"
          foreground="black">
          <h3>色彩</h3>
        </ns-card>
        <ns-card fill="#fff" body-fill="#ffffff22"
          :edge="2"
          foreground="black">
          <h3>色彩</h3>
        </ns-card>
        <ns-card fill="#fff" body-fill="#ffffff22"
          :edge="2"
          foreground="black">
          <h3>色彩</h3>
        </ns-card>
      </ns-grid>
    </ns-page-content>
  </ns-page>
</template>

<script lang="ts" setup>
import DesignTweak from './design-tweak.vue'

const props = [
  {
    name: '填色',
    description: ':fill',
    type: 'Color',
    default: ''
  },
  {
    name: '面色', 
    description: ':surface',
    type: 'Color',
    default: ''
  },
  {
    name: '字色',
    description: ':foreground', 
    type: 'Color',
    default: ''
  },
  {
    name: '渐变底色',
    description: ':gradient',
    type: 'Color',
    default: ''
  },
  {
    name: '底图',
    description: ':texture',
    type: 'string',
    default: ''
  },
  {
    name: '图案',
    description: ':pattern',
    type: 'string',
    default: ''
  },
  {
    name: '圆角',
    description: ':round',
    type: 'string',
    default: ''
  },
  {
    name: '倒角',
    description: ':radius',
    type: 'string',
    default: ''
  },
  {
    name: '线色',
    description: ':stroke',
    type: 'string',
    default: ''
  },
  {
    name: '线宽',
    description: ':thick',
    type: 'string',
    default: ''
  },
  {
    name: '模糊',
    description: ':blur',
    type: 'string',
    default: ''
  },
  {
    name: '提亮',
    description: ':brightness',
    type: 'string',
    default: ''
  },
]

</script>


<style lang="scss">
.props-page {
  background-image: url(https://simple.shensi.tech/images/ios26.jpg);
  background-size: cover;
  box-sizing: border-box;
}
</style>