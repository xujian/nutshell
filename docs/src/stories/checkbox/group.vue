<template>
  <ns-checkbox-group color="primary"
    v-model="callResults"
    :options="options"
    label="营养成分" />
</template>


<script lang="ts" setup>
import { reactive, ref } from 'vue'

const callResults = ref<string[]>([])

const options = [
  { label: '蛋白质', value: '1' },
  { label: '热量', value: '2' },
  { label: '微量元素', value: '3' },
]
</script>
