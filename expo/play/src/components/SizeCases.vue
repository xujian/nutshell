<template>
  <div
    class="case-list size-cases flex"
    :class="[direction]">
    <div class="item flex align-center justify-center"
       v-for="size in sizes"
      :key="size">
      <h6 class="title">size="<span class="b">{{ size }}</span>"</h6>
      <slot :size="size"></slot>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { sizes } from '@uxda/nutshell/taro'

defineProps({
  direction: String
})
</script>
