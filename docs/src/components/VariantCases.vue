<template>
  <div
    class="case-list variant-cases flex"
    :class="[direction]">
    <div class="item flex align-center justify-center"
      v-for="variant in variants"
      :key="variant">
      <h6 class="title">variant="<span class="b">{{ variant }}</span>"</h6>
      <!-- @vue-ignore -->
      <slot :variant="variant"></slot>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { variants } from '@uxda/nutshell'

defineProps({
  direction: String
})

const slots = defineSlots<{
  default(props: {
    item: {
      label: string,
      value: any
    }}
  ): any
}>()
</script>

<style lang="scss">
.variant-cases {
}
</style>
