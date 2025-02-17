<template>
  <ns-chips :items variant="outlined" color="primary" @close="onClose" />
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const items = ref([
  { label: '经营企业', value: '1' },
  { label: '房地产', value: '2' },
  { label: '海外资产', value: '3' },
  { label: '互联网', value: '4', closable: true },
  { label: '金融', value: '5', closable: true },
  { label: '高管', value: '6', closable: true },
])

function onClose(item: any) {
  items.value.splice(items.value.findIndex((i) => item.value === i.value), 1)
}
</script>
