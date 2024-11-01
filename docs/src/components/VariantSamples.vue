<template>
  <ns-facts
    class="variant-samples"
    direction="column"
    :vertical="vertical"
    :columns="1">
    <ns-facts-item v-for="variant in variants"
      :key="variant"
      :label="`variant=${variant}`">
      <slot :variant="variant"></slot>
    </ns-facts-item>
  </ns-facts>
</template>

<script lang="ts" setup>
import { variants } from '@uxda/nutshell'

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

<style lang="scss">
.variant-samples {
  &.ns-facts {
    .ant-descriptions-item-label {
      width: 100px;
    }
  }
}
</style>
