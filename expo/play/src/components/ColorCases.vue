<template>
  <ns-grid
    class="case-list size-cases"
    :columns="direction === 'row' ? 2 : 1"
    :gap="1">
    <ns-row class="item align-center justify-center" v-for="color in brands"
      :key="color">
      <h6 class="title">color="<span class="b">{{ color }}</span>"</h6>
      <slot :color="color"></slot>
    </ns-row>
  </ns-grid>
</template>

<script lang="ts" setup>
import { brands } from '@uxda/nutshell/taro'

defineProps({
  direction: {
    type: String,
    default: 'row'
  }
})
</script>
