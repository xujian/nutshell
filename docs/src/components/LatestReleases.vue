<template lang="">
  <div class="latest-releases">
    <h2></h2>
    <ns-list title="九月第(3)周"
      :has-numbers="true"
      :data="releases">
    </ns-list>
  </div>
</template>
<script lang="ts" setup>
const releases = [
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
    title: '+ Histoire (失败)',
    caption: '出现 import @nuiui/nutui 错误'
  },
  {
    title: '代码框及代码编辑器',
    caption: '<ns-code>/<ns-code-editor>'
  },
]
</script>
<style lang="scss">
</style>