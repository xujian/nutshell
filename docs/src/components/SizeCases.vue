<template>
  <ns-facts
    class="size-cases"
    direction="column"
    :vertical="vertical"
    :columns="5">
    <ns-facts-item v-for="size in sizes"
      :key="size"
      :label="`size=${size}`">
      <slot :size="size"></slot>
    </ns-facts-item>
  </ns-facts>
</template>

<script lang="ts" setup>
import { sizes } from '@uxda/nutshell'

defineProps({
  vertical: {
    type: Boolean,
  }
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
