<template>
  <ns-row class="colors" :gap="10" justify="start">
    <ns-card v-for="color in brands"
      title="卡片"
      :fill="color"
      :key="color"></ns-card>
  </ns-row>
</template>

<script lang="ts" setup>
import { brands } from '@uxda/nutshell'
</script>

<style scoped lang="scss">
.colors {
  flex-wrap: wrap;
  .ns-card {
    width: 200px;
  }
  .variant-label {
    width: 100px
  }
}
</style>
