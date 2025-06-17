<template>
  <ns-grid
    class="case-list size-cases"
    :columns="direction === 'row' ? 2 : 1"
    :gap="1">
    <ns-row class="item align-center justify-center"
      v-for="variant in variants"
      :key="variant">
      <h6 class="title">variant="<span class="b">{{ variant }}</span>"</h6>
      <slot :variant="variant"></slot>
    </ns-row>
  </ns-grid>
</template>

<script lang="ts" setup>
import { variants } from '@uxda/nutshell/taro'

defineProps({
  direction: {
    type: String,
    default: 'row'
  }
})
</script>

<style lang="scss">
.variant-cases {
}
</style>
