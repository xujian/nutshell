<template>
  <ns-column align="start" class="card-column">
    <h3>客户列表</h3>
    <ns-card class="color-card full-width" title="卡片"
      :fill="colors[0]"></ns-card>
    <h3>客户列表</h3>
    <p class="caption">客户总数(1000)名</p>
    <ns-card class="color-card full-width" title="卡片"
      :fill="colors[1]"></ns-card>
    <h3>客户列表</h3>
    <ns-card class="color-card full-width" title="卡片"
      :fill="colors[2]"></ns-card>
    <h3>客户列表</h3>
    <ns-card class="color-card full-width" title="卡片"
      :fill="colors[3]"></ns-card>
    <ns-card class="color-card full-width" title="卡片"
      :fill="colors[4]"></ns-card>
    <ns-card class="color-card full-width" title="卡片"
      :fill="colors[0]"></ns-card>
    <ns-list title="九月第(3)周"
      variant="outlined"
      :has-numbers="true"
      :has-arrows="true"
      :data>
  </ns-list>
  </ns-column>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const colors = [
  '#DEF2C8', '#C5DAC1', '#BCD0C7', '#A9B2AC', '#898980'
]

const data = [
  {
    title: 'Color tints/shades/alphas',
    caption: '视觉效果'
  },
  {
    title: '列表组件',
    caption: '<ns-list>'
  },
  {
    title: '多项下拉选框',
    caption: '<ns-multiple-select>'
  },
  {
    title: '身份证号专用输入框',
    caption: '<ns-id-input>'
  },
  {
    title: '手机号专用输入框',
    caption: '<ns-mobile-input>'
  },
  {
    title: '标签组',
    caption: '<ns-chips>'
  },
  {
    title: '调整了卡片及表单嵌套样式',
    caption: '<ns-card>'
  },
]

</script>
