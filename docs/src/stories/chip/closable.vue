<template>
  <ns-chips :items color="primary" justify="start" @close="onClose" />
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const items = ref([
  { label: '可关闭', value: '1', closable: true },
])

function onClose(item: any) {
  console.log('onClose', items.value.findIndex((i) => item.value === i.value))
  items.value.splice(items.value.findIndex((i) => item.value === i.value), 1)
}
</script>
