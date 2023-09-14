<script setup lang="ts">
import { ref } from 'vue'
import ComplexTable from '@/components/ComplexTable.vue'
import HomeHero from '@/components/HomeHero.vue'
import LatestReleases from '@/components/LatestReleases.vue'

const tabs = [
  { label: '2023', value: '2023'},
  { label: '2024', value: '2024'},
]
const activeTab = ref('2023')

const variants: string[] = ['solid', 'outlined', 'soft', 'plain'],
  colors = [
  'primary',
  'secondary',
  'neutral',
  'accent',
  'positive',
  'negtive',
  'warning',
]

</script>

<template>
  <home-hero />
  <div class="features">
    <ns-tabs v-model="activeTab" :items="tabs" variant="card">
    </ns-tabs>
    <p>&nbsp;</p>
    <h2>最新特性</h2>
    <p>&nbsp;</p>
    <latest-releases />
    <p>&nbsp;</p>
    <ns-button label="创建" v-tooltip="'点击查看详情点击查看详情'"></ns-button>
  </div>
  <p>&nbsp;</p>
  <ns-card title="待办任务" class="no-padding">
    <template #header>
      <ns-chip label="政策"></ns-chip>
    </template>
    <template #corner>
      <ns-chip label="政策"></ns-chip>
    </template>
    <complex-table />
  </ns-card>
  <p>&nbsp;</p>
  <div class="buttons">
    <ns-row v-for="(variant) in variants" :key="variant">
      <ns-button v-for="(color) in colors"
        :key="color"
        :color="color" 
        :variant="variant" label="创建订单"></ns-button>
    </ns-row>
  </div>
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
  <p>&nbsp;</p>
</template>
<style lang="scss">
.buttons {
  .ns-button {
    margin: 6px;
  }
}
</style>