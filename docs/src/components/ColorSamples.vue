<template>
  <ns-facts
    class="color-samples"
    direction="column"
    :vertical="vertical"
    :columns="7">
    <ns-facts-item v-for="color in brands"
      :key="color"
      :label="`color=${color}`">
      <slot :color="color"></slot>
    </ns-facts-item>
  </ns-facts>
</template>

<script lang="ts" setup>
import { brands } from '@uxda/nutshell'

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
