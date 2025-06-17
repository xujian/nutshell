<template>
  <ns-grid
    class="case-list size-cases"
    :columns="direction === 'row' ? 2 : 1"
    :gap="1">
    <div class="item flex align-center justify-center"
       v-for="size in sizes"
      :key="size">
      <h6 class="title">size="<span class="b">{{ size }}</span>"</h6>
      <slot :size="size"></slot>
    </div>
  </ns-grid>
</template>

<script lang="ts" setup>
import { sizes } from '@uxda/nutshell/taro'

defineProps({
  direction: {
    type: String,
    default: 'row'
  }
})
</script>
