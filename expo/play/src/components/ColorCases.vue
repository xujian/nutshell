<template>
  <div
    class="case-list color-cases flex"
    :class="[direction]">
    <div class="item flex align-center justify-center" v-for="color in brands"
      :key="color">
      <h6 class="title">color="<span class="b">{{ color }}</span>"</h6>
      <slot :color="color"></slot>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { brands } from '@uxda/nutshell'

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
