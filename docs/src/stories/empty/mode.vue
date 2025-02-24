<template>
  <ns-empty v-for="mode in modes" :key="mode" :mode="mode" style="margin: 30px 0" />
</template>
<script lang="ts" setup>
import { ref } from 'vue'

const modes = ref([
  'data',
  'search',
  'notice',
  'network',
  'loading',
  'permission',
  '404'
])
</script>
