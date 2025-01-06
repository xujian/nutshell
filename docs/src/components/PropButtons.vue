<template>
  <ns-row class="props-buttons justify-between">
    <div class="label">填色 <span class="caption">(fill)</span></div>
    <ns-button-group size="xs" v-model="model" color="primary" :items />
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
  items: {
    type: Array as PropType<Record<string, any>>,
    default: []
  }
})
</script>
