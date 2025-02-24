<template lang="">
  <ns-list title="本周任务"
    :has-numbers="true"
    :data>
  </ns-list>
</template>
<script lang="ts" setup>
const data = [
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
  {
    title: '范例表单',
    caption: '<regular-form>'
  },
  {
    title: '级联选择框',
    caption: '<ns-cascading-select>'
  },
  {
    title: '代码框及代码编辑器',
    caption: '<ns-code>/<ns-code-editor>'
  },
  {
    title: '星星框',
    caption: '<ns-rating>'
  },
  {
    title: '复选框及复选框组',
    caption: '<ns-checkbox>, <ns-checkbox-group>'
  },
]
</script>
