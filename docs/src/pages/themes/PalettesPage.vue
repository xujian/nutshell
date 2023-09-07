<template>
  <h1 class="my-lg">标准色表</h1>
  <ns-row v-for="c in brands" :key="c.name" justify="start" :gutter="16">
    <ns-col class="m-sm">
      <color-card :color="c"></color-card>
    </ns-col>
  </ns-row>
</template>
<script lang="ts" setup>
import ColorCard from '@/components/ColorCard.vue'

const brands = [
  {
    name: 'primary',
    label: '主色'
  },
  {
    name: 'secondary',
    label: '辅色'
  },
  {
    name: 'neutral',
    label: '中立色'
  },
  {
    name: 'accent',
    label: '着重色'
  },
  {
    name: 'positive',
    label: '正向色'
  },
  {
    name: 'negtive',
    label: '负面色'
  },
  {
    name: 'warning',
    label: '警示色'
  }
]

</script>