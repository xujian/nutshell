<template>
  <h1 class="my-lg">图标 &lt;ns-icon&gt;</h1>
  <h3>基本特性</h3>
  <p>&nbsp;</p>
  <ns-row class="icons-list" gap="sm">
    <div class="icon-container border-sm r-sm round"
      v-for="(name) in icons" :key="name">
      <ns-icon :name="name" />
    </div>
  </ns-row>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue'

const icons = [
  'house', 'gear'
]
</script>

<style lang="scss">
.icons-list {
  width: 100%;
  .icon-container {
    padding: 10px;
  }
}
</style>
