<template>
  <div
    class="case-list variant-cases flex">
    <div class="item flex align-center justify-center"
      v-for="variant in variants"
      :key="color">
      <h6 class="title">variant="<span class="b">{{ variant }}</span>"</h6>
      <slot :variant="variant"></slot>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { variants } from '@uxda/nutshell'

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
