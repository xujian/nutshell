<template>
  <h1 class="my-lg">弹窗 &lt;ns-dialog&gt;</h1>
  <p>&nbsp;</p>
  <h3>使用静态组件 &lt;ns-dialog&gt;</h3>
  <p>&nbsp;</p>
  <story file="dialog/static" />
  <p>&nbsp;</p>
  <p>&nbsp;</p>
  <h3>使用 SERVICE $n.dialog()</h3>
  <p>&nbsp;</p>
  <story file="dialog/basic" />
  <p>&nbsp;</p>
  <p>&nbsp;</p>
  <h3>弹出子界面</h3>
  <p class="caption">确定时询问子界面是否允许关闭</p>
  <p>&nbsp;</p>
  <story file="dialog/component" />
  <p>&nbsp;</p>
  <p>&nbsp;</p>
  <h3>自定义 footer </h3>
  <p>&nbsp;</p>
  <story file="dialog/slot" />
</template>

<script lang="ts" setup>
</script>

<style lang="scss">
</style>
