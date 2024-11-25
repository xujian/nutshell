<template>
  <div
    class="case-list variant-cases flex"
    :class="[direction]">
    <div class="item flex align-center justify-center"
      v-for="variant in variants"
      :key="variant">
      <h6 class="title">variant="<span class="b">{{ variant }}</span>"</h6>
      <slot :variant="variant"></slot>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { variants } from '@uxda/nutshell/taro'

defineProps({
  direction: String
})
</script>

<style lang="scss">
.variant-cases {
}
</style>
