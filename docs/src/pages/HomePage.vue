<script setup lang="ts">
import { ref } from 'vue'
import ComplexTable from '@/components/ComplexTable.vue'
import HomeHero from '@/components/HomeHero.vue'

const tabs = [
  { label: '2023', value: '2023'},
  { label: '2024', value: '2024'},
]
const activeTab = ref('2023')
</script>

<template>
  <home-hero />
  <div class="features">
    <ns-tabs v-model="activeTab" :items="tabs" variant="card">
    </ns-tabs>
    <p>&nbsp;</p>
    <ns-button label="创建" v-tooltip="'点击查看详情点击查看详情'"></ns-button>
  </div>
  <p>&nbsp;</p>
  <ns-card title="待办任务">
    <template #header>
      <ns-chip label="政策"></ns-chip>
    </template>
    <template #corner>
      <ns-chip label="政策"></ns-chip>
    </template>
    <complex-table />
  </ns-card>
  <p>&nbsp;</p>
  <p>&nbsp;</p>
  <p>&nbsp;</p>
  <p>&nbsp;</p>
  <p>&nbsp;</p>
  <p>&nbsp;</p>
  <p>&nbsp;</p>
  <p>&nbsp;</p>
  <p>&nbsp;</p>
  <p>&nbsp;</p>
  <p>&nbsp;</p>
  <p>&nbsp;</p>
  <p>&nbsp;</p>
  <p>&nbsp;</p>
  <p>&nbsp;</p>
  <p>&nbsp;</p>
  <p>&nbsp;</p>
  <p>&nbsp;</p>
  <p>&nbsp;</p>
  <p>&nbsp;</p>
  <p>&nbsp;</p>
  <p>&nbsp;</p>
  <p>&nbsp;</p>
  <p>&nbsp;</p>
  <p>&nbsp;</p>
  <p>&nbsp;</p>
  <p>&nbsp;</p>
  <p>&nbsp;</p>
  <p>&nbsp;</p>
  <p>&nbsp;</p>
</template>
