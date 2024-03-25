<template>
  <ns-tabs v-model="tab">
    <ns-tabs-item key="1" tab="线索客户">
      <h3>AAA</h3>
    </ns-tabs-item>
    <ns-tabs-item key="2" tab="意向客户">
      <h3>BBB</h3>
    </ns-tabs-item>
  </ns-tabs>
</template>
<script lang="ts" setup>
import { ref } from 'vue'

const tab = ref<string>('1')
</script>
