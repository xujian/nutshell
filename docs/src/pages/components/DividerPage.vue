<template>
  <ns-page class="divider-page">
    <ns-page-content>
      <h1>分隔线</h1>
      <p class="caption">&lt;ns-divider&gt;</p>
      <h2>基本用法</h2>
      <ns-divider> text </ns-divider>
      <h2>虚线</h2>
      <ns-divider dashed> text </ns-divider>
      <h2>垂直分隔线</h2>
      <ns-divider dashed direction="vertical" />
      text1
      <ns-divider dashed direction="vertical" />
      text2
    </ns-page-content>
  </ns-page>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue'

</script>

<style lang="scss">
</style>
