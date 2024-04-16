<template>
  <div class="page card-page">
    <h1 class="my-lg">区域加载 v-loading</h1>
    <div class="loading-dom" v-loading="true">加载区域</div>

    <h1 class="my-lg">可动态开启/关闭</h1>
    <div class="loading-dom" v-loading="loading">动态开启/关闭</div>
    <div style="margin-top: 5px;">开关：<ns-switch v-model="loading" /></div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const loading = ref(false)
</script>

<style scoped lang="scss">
.loading-dom {
  width: 200px;
  height: 100px;
  background: var(--ns-primary--90);
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
