<template>
  <h1 class="my-lg">连续平铺 &lt;ns-repeator&gt;</h1>
  <h3>基本特性</h3>
  <p>&nbsp;</p>
  <story file="repeator/basic" />
  <p>&nbsp;</p>
  <p>&nbsp;</p>
  <h3>使用 devides 控制网格</h3>
  <p>&nbsp;</p>
  <story file="repeator/basic-devides" />
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
