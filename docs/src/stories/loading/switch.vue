<template>
  <ns-card v-loading="loading" fill="#ff0" style="height: 200px;">
    加载区域
  </ns-card>
  <ns-switch v-model="loading" style="margin-top: 15px;" />
</template>

<script setup lang="ts">
import { ref } from 'vue';

const loading = ref(false)
</script>

<style lang="scss"></style>
