<template>
  <ns-facts
    class="color-samples"
    direction="column"
    :vertical="vertical"
    :columns="7">
    <ns-facts-item v-for="color in colors"
      :key="color"
      :label="`color=${color}`">
      <slot :color="color"></slot>
    </ns-facts-item>
  </ns-facts>
</template>

<script lang="ts" setup>
import { colors } from '@uxda/nutshell'

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
