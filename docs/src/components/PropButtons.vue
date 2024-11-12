<template>
  <ns-row class="props-buttons justify-between">
    <div class="label">填色 <span class="caption">(fill)</span></div>
    <ns-button-group size="xs" v-model="model" color="primary" :options />
  </ns-row>
</template>

<script lang="ts" setup>
import type { PropType } from 'vue'


const model = defineModel()

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  caption: {
    type: String,
    required: true,
  },
  options: {
    type: Array as PropType<Record<string, any>>,
    default: []
  }
})
</script>
