<template>
  <ns-chips :options="tags" color="primary" justify="start" />
</template>

<script lang="ts" setup>
const tags = [
    { label: '经营企业', value: '1' },
    { label: '房地产', value: '2' },
    { label: '海外资产', value: '3' },
    { label: '互联网', value: '4' },
    { label: '金融', value: '5' },
    { label: '高管', value: '6' },
  ]
</script>
