<template>
  <h1 class="my-lg">分割线 ns-divider</h1>
  <h4 class="my-lg">基本用法</h4>
  <ns-divider> text </ns-divider>

  <h4 class="my-lg">虚线</h4>
  <ns-divider dashed> text </ns-divider>


  <h4 class="my-lg">垂直分割线</h4>
  <ns-divider dashed direction="vertical" />
  text1
  <ns-divider dashed direction="vertical" />
  text2
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue'

</script>

<style lang="scss">
</style>
