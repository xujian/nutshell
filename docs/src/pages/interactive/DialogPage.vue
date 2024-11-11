<template>
  <ns-page class="dialog-page">
    <ns-page-content>
      <h1>弹窗</h1>
      <p class="caption">&lt;ns-dialog&gt;</p>
      <p>&nbsp;</p>
      <h2>使用静态组件</h2>
      <p class="caption">&lt;ns-dialog&gt;</p>
      <p>&nbsp;</p>
      <story file="dialog/static" />
      <p>&nbsp;</p>
      <h2>使用 SERVICE</h2>
      <p class="caption">$n.dialog()</p>
      <story file="dialog/basic" />
      <p>&nbsp;</p>
      <p>&nbsp;</p>
      <h2>弹出子界面</h2>
      <p class="caption">确定时询问子界面是否允许关闭</p>
      <story file="dialog/component" />
      <p>&nbsp;</p>
      <h2>自定义 footer </h2>
      <p>&nbsp;</p>
      <story file="dialog/slot" />
    </ns-page-content>
  </ns-page>
</template>

<script lang="ts" setup>
</script>

<style lang="scss">
</style>
