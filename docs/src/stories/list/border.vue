<template lang="">
  <ns-list title="九月第(3)周"
    variant="outlined"
    :has-numbers="true"
    :has-arrows="true"
    :data>
  </ns-list>
</template>
<script lang="ts" setup>
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
