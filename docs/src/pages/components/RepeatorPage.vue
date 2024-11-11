<template>
  <ns-page class="repeator-page">
    <ns-page-content>
      <h1>连续平铺</h1>
      <p class="caption">&lt;ns-repeator&gt;</p>
      <h2>基本特性</h2>
      <p>&nbsp;</p>
      <story file="repeator/basic" />
      <p>&nbsp;</p>
      <p>&nbsp;</p>
      <h2>使用 devides 控制网格</h2>
      <p>&nbsp;</p>
      <story file="repeator/basic-devides" />
    </ns-page-content>
  </ns-page>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue'

</script>

<style lang="scss">
.demo-repeator {
  width: 100%;
  .repeator-card {
    color: #ffffff;
  }
}
</style>
