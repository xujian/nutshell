<template>
  <ns-checkbox-group color="primary"
    v-model="callResults"
    :options
    label="受限用户" />
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const callResults = ref<string[]>([])

const options = [
  { label: '接通', value: 'connected' },
  { label: '繁忙', value: 'busy' },
  { label: '拒接', value: 'rejected' },
]
</script>
