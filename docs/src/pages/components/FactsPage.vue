<template>
  <h1 class="my-lg">详表 &lt;ns-facts&gt;</h1>
  <story file="facts/basic.vue" />
  <p>&nbsp;</p>
  <h2>排列</h2>
  <story file="facts/column.vue" />
  <p>&nbsp;</p>
  <h2>使用 slot</h2>
  <p>&nbsp;</p>
  <story file="facts/slot.vue" />
  <h2>使用 ns-facts-item</h2>
  <p>&nbsp;</p>
  <story file="facts/items.vue" />
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue'


</script>

<style lang="scss">
.variants {
  .ns-button {
    margin: 2px
  }
  .variant-label {
    width: 100px
  }
}
</style>
