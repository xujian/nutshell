<template>
  <ns-tabs v-model="tab">
    <ns-tabs-item key="1" tab="线索客户">
    </ns-tabs-item>
    <ns-tabs-item key="2" tab="意向客户">
    </ns-tabs-item>
  </ns-tabs>
  <template v-if="tab === '1'">
    线索客户
  </template>
  <template v-if="tab === '2'">
    意向客户
  </template>
</template>
<script lang="ts" setup>
import { ref } from 'vue'

const tab = ref<string>('1')
</script>
